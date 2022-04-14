import cuid from "cuid";
import { Account } from "./account";
import { Message, Messenger } from "./messenger";
import { ConnectRequest, ConnectResponse, ProbeResponse, Scope } from "./types";
import qs from 'query-string';

export class Cartridge {
  private selector = "cartridge-messenger";
  private messenger?: Messenger;
  private scopes: Scope[] = [];
  private baseUrl: string = "https://cartridge.gg";
  private targetOrigin: string = "https://cartridge.gg";
  private loading = true
  private ready_: Promise<boolean>

  constructor(
    scopes?: Scope[],
    options?: {
      baseUrl?: string;
      targetOrigin?: string;
    }
  ) {
    if (scopes) {
      this.scopes = scopes;
    }

    if (options?.baseUrl) {
      this.baseUrl = options.baseUrl;
    }

    if (options?.targetOrigin) {
      this.targetOrigin = options.targetOrigin;
    }

    this.ready_ = new Promise((resolve, reject) => {
      window.addEventListener("message", (e) => {
        if (e.data.target === "cartridge" && e.data.payload.method === "ready") {
          this.loading = false
          resolve(true)
        }
      });
    })

    if (typeof document !== "undefined" && !this.messenger) {
      let iframe = document.getElementById(this.selector) as HTMLIFrameElement;
      if (!!iframe) {
        if (!this.messenger) {
          this.messenger = new Messenger(
            iframe.contentWindow,
            this.targetOrigin
          );
        }
      } else {
        iframe = document.createElement("iframe");
        iframe.id = this.selector;
        iframe.src = `${this.baseUrl}/wallet/iframe`;
        iframe.style.setProperty("display", "none");
        document.body.appendChild(iframe);
        this.messenger = new Messenger(iframe.contentWindow, this.targetOrigin);
      }
    }
  }

  async ready() {
    if (!this.loading) return Promise.resolve(true)
    return this.ready_
  }

  async probe() {
    const prob = await this.messenger.send<ProbeResponse>({
      method: "probe",
    });

    if (prob.result?.address) {
      return new Account(prob.result.address, this.messenger, { uri: this.baseUrl });
    }
  }

  async connect() {
    const prob = await this.messenger.send<ProbeResponse>({
      method: "probe",
    });

    if (prob.result?.address) {
      return new Account(prob.result.address, this.messenger, { uri: this.baseUrl });
    }

    const id = cuid();

    window.open(
      `${this.baseUrl}/wallet/connect?${qs.stringify({
        id,
        origin: window.origin,
        scopes: JSON.stringify(this.scopes),
      })}`,
      "_blank",
      "height=600,width=400"
    );

    const response = await this.messenger.send<ConnectResponse>({
      method: "connect",
      params: {
        id,
        scopes: this.scopes,
      },
    } as ConnectRequest);

    return new Account(response.result.address, this.messenger, { uri: this.baseUrl });
  }
}

export { Message, Messenger };
export * from "./types";
