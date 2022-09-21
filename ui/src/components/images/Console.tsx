import React from "react";
import { Icon, useStyleConfig } from "@chakra-ui/react";

const GameConsole = (props: any) => {
  const { variant, size, ...rest } = props;
  const styles = useStyleConfig("Icon", { variant, size });

  return (
    <Icon
      width="189px"
      height="148px"
      viewBox="0 0 189 148"
      fill="currentColor"
      __css={styles}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.8044 6.69238L81.7262 1.05566L82.503 1.30946C86.6183 2.65415 89.4009 6.49438 89.397 10.8238L89.3853 23.99L90.1683 23.8724L90.1657 18.4008L97.5426 17.1755L97.53 16.679L90.136 17.8893L90.1196 11.6492L98.0032 10.4331L97.9673 15.7739L117.641 23.1513L117.399 23.1912L117.145 28.4476L144.812 38.8285V64.9089L131.819 67.9603L131.524 70.2242L111.148 75.1457L107.999 73.7677L92.7419 76.7206L92.1513 79.6735L69.4138 84.9888L66.4609 83.3155L51.9997 86L1.97461 53.877L1.99186 29.8914L32.3433 24.7749L32.3239 22.4102L38.8567 25.688L47.2859 24.5078L47.3939 30.2967L48.1802 30.1786C48.192 27.2293 48.2447 21.9096 48.291 17.6068C48.3346 13.5567 45.9355 9.8791 42.2097 8.29041L40.8927 7.7288L40.8044 6.69238ZM93.4345 38.6927L95.0895 38.3768L95.0642 36.538L115.167 32.9379L116.901 33.7V30.9408L109.149 28.0762L86.0505 32.0439V35.5127L93.4345 38.6927ZM54.0069 45.761L51.8818 46.0909L45.0583 42.6974V38.9355L70.5079 34.5098L77.7002 37.9398V40.5216L76.2986 39.8577L53.947 43.8781L53.9771 44.649L53.8669 45.6784L54.0069 45.761ZM112.986 63.707L113.028 59.9826C113.033 59.518 113.358 59.1181 113.811 59.0175L127.957 55.8775C128.581 55.7389 129.174 56.2141 129.174 56.8537V60.4812C129.174 60.9478 128.851 61.3524 128.396 61.4562L114.209 64.6931C113.578 64.8369 112.979 64.3536 112.986 63.707ZM71.7214 73.0875L71.7649 69.3583C71.7704 68.8902 72.0998 68.4886 72.5577 68.3917L87.4873 65.2311C88.1092 65.0995 88.6944 65.5738 88.6944 66.2094V69.8411C88.6944 70.3115 88.3666 70.7182 87.9071 70.8182L72.9339 74.0763C72.3059 74.213 71.7139 73.7302 71.7214 73.0875Z"
      />
      <path d="M86.3063 2.72166L90.6792 2.05176L96.5991 3.99763C97.4305 4.27091 97.9876 5.05295 97.9744 5.92797L97.9139 9.91225L90.1396 11.1275L90.1387 10.5839C90.134 7.62877 88.8224 4.82703 86.556 2.93061L86.3063 2.72166Z" />
      <path d="M40.7167 8.40527L32.3563 9.57053L32.3239 9.55566L32.3241 9.57501L32.2731 9.58212L32.3243 9.60618L32.374 15.4366L38.89 18.6134L38.8903 18.6289L47.3495 17.3347C47.3696 13.4629 44.9709 9.9903 41.3428 8.63853L40.7167 8.40527Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M130.023 91.5191L122.483 88.7849C121.22 87.6188 121.094 85.4392 122.15 83.8521L138.456 79.8164L145.708 82.5188L145.837 82.4894C146.895 83.8927 146.564 86.3796 146.266 87.4477L140.863 88.7952C141.46 89.6147 141.877 90.6521 141.877 91.9304C141.877 92.08 141.879 92.2446 141.881 92.4181V92.4209C141.888 92.8817 141.895 93.4049 141.863 93.8702C141.813 94.5697 141.671 95.3443 141.246 96.111C140.39 97.6575 138.658 98.7079 135.832 99.5758C134.929 99.8531 131.838 100.469 128.397 101.155L127.787 101.276C124.105 102.01 120.019 102.829 117.326 103.466C116.536 103.887 115.538 104.618 114.916 105.483C114.302 106.338 114.145 107.145 114.667 108.05C115.286 109.126 116.216 109.586 117.239 109.729C118.314 109.879 119.413 109.655 120.056 109.41L120.159 109.371L148.616 103.104C148.449 102.032 148.337 100.897 148.337 99.6815C148.337 97.1986 150.126 95.6107 151.775 94.6982C153.44 93.7769 155.378 93.2916 156.687 93.1106L177.541 88.7512C178.82 88.3897 180.791 88.0705 182.544 88.3997C183.448 88.5694 184.421 88.9358 185.18 89.6892C185.974 90.4778 186.387 91.5463 186.387 92.8134C186.387 95.1451 185.386 96.7705 184.071 97.7844C182.876 98.7065 181.483 99.0816 180.48 99.1578L152.14 105.399L152.224 105.757C152.393 106.481 152.568 107.229 152.729 108.03C153.016 109.458 153.228 110.79 153.368 111.762C153.438 112.249 153.49 112.648 153.525 112.927C153.533 112.995 153.541 113.055 153.547 113.108C153.554 113.165 153.56 113.212 153.564 113.251L153.574 113.338L153.578 113.369C153.578 113.369 153.578 113.371 152.087 113.536L153.578 113.371L153.585 113.431L153.586 113.492C153.604 114.08 153.338 114.603 153.188 114.875C152.999 115.218 152.749 115.581 152.484 115.933C151.949 116.642 151.247 117.445 150.556 118.197C150.035 118.765 149.506 119.319 149.037 119.803L169.903 121.142C175.875 121.203 187.565 123.022 188.544 129.679L188.61 129.681V130.574L188.61 130.591L188.61 130.609V137.69C188.61 145.095 176.203 147.525 170 147.815C165.917 147.844 157.304 147.264 152.747 144.852C151.885 144.396 150.969 144.015 149.997 143.942L129.395 142.39C128.765 142.343 128.133 142.421 127.519 142.569C124.942 143.19 119.739 143.902 113.784 143.09C105.299 141.933 97.7806 137.883 98.1662 134.412C98.163 134.293 98.1638 134.174 98.169 134.057L98.2154 128.127C98.1539 127.853 98.1364 127.581 98.1662 127.313C98.0694 123.745 101.596 117.863 118.798 117.863L145.138 119.553C145.182 119.483 145.232 119.416 145.289 119.353C145.4 119.228 145.67 118.954 146.004 118.614C146.141 118.475 146.289 118.324 146.442 118.168C146.997 117.601 147.681 116.892 148.346 116.169C149.016 115.439 149.641 114.719 150.088 114.126C150.314 113.827 150.469 113.593 150.56 113.428L150.563 113.422L150.548 113.3C150.515 113.037 150.465 112.656 150.398 112.189C150.264 111.254 150.061 109.98 149.788 108.621C149.661 107.993 149.51 107.348 149.354 106.683C149.305 106.473 149.255 106.26 149.206 106.046L121.014 112.254C119.995 112.623 118.437 112.925 116.825 112.7C115.1 112.46 113.247 111.598 112.067 109.547C110.788 107.327 111.401 105.233 112.48 103.732C113.513 102.295 115.045 101.25 116.13 100.708L116.284 100.631L116.452 100.591C119.209 99.9312 123.459 99.0802 127.2 98.3344L127.388 98.2968L127.39 98.2966C131.128 97.5513 134.199 96.9389 134.951 96.708C137.591 95.8973 138.351 95.1457 138.621 94.658C138.76 94.4075 138.839 94.107 138.87 93.6597C138.894 93.3253 138.889 93.0074 138.883 92.6114C138.88 92.4092 138.877 92.1859 138.877 91.9304C138.877 90.9973 138.387 90.3162 137.624 89.7865C137.558 89.74 137.49 89.6956 137.422 89.6534L130.148 91.4672C130.095 91.4291 130.044 91.3889 129.995 91.3467L130.023 91.5191ZM150.619 113.31C150.623 113.3 150.624 113.296 150.624 113.296C150.624 113.296 150.623 113.297 150.622 113.3L150.621 113.304L150.619 113.31ZM180.068 96.1766L151.548 102.458C151.418 101.587 151.337 100.679 151.337 99.6815C151.337 98.8488 151.916 98.0488 153.228 97.3232C154.499 96.6198 156.082 96.2177 157.14 96.0766L157.195 96.0693L178.262 91.6652L178.316 91.6497C179.368 91.3466 180.858 91.1354 181.99 91.3481C182.542 91.4518 182.878 91.6315 183.066 91.8177C183.218 91.9687 183.387 92.2333 183.387 92.8134C183.387 94.1762 182.849 94.9388 182.239 95.4089C181.565 95.9291 180.721 96.1432 180.192 96.1703L180.068 96.1766ZM114.36 123.716L110.13 123.587C109.786 123.576 109.462 123.743 109.27 124.027L108.885 124.599C108.446 125.25 108.894 126.129 109.678 126.157L112.206 126.249C112.975 126.276 113.426 127.128 113.016 127.78L112.799 128.125C112.392 128.773 112.834 129.619 113.599 129.656L117.576 129.845C118.063 129.868 118.495 129.537 118.6 129.061L118.933 127.548C119.04 127.059 119.492 126.725 119.99 126.766L123.779 127.074C124.358 127.121 124.855 126.667 124.86 126.087L124.869 125.139C124.874 124.6 124.451 124.154 123.912 124.131L121.088 124.008C120.446 123.98 119.997 123.362 120.168 122.742L120.219 122.558C120.39 121.941 119.945 121.325 119.305 121.293L117.002 121.178C116.616 121.158 116.254 121.363 116.071 121.703L115.271 123.191C115.091 123.524 114.739 123.728 114.36 123.716ZM173.192 126.367C173.192 127.072 171.615 127.644 169.67 127.644C167.725 127.644 166.149 127.072 166.149 126.367C166.149 125.661 167.725 125.089 169.67 125.089C171.615 125.089 173.192 125.661 173.192 126.367ZM169.67 133.858C171.615 133.858 173.192 133.286 173.192 132.581C173.192 131.875 171.615 131.303 169.67 131.303C167.725 131.303 166.149 131.875 166.149 132.581C166.149 133.286 167.725 133.858 169.67 133.858ZM180.235 129.29C180.235 129.995 178.658 130.567 176.713 130.567C174.768 130.567 173.192 129.995 173.192 129.29C173.192 128.584 174.768 128.012 176.713 128.012C178.658 128.012 180.235 128.584 180.235 129.29ZM162.627 130.567C164.572 130.567 166.149 129.995 166.149 129.29C166.149 128.584 164.572 128.012 162.627 128.012C160.682 128.012 159.106 128.584 159.106 129.29C159.106 129.995 160.682 130.567 162.627 130.567Z"
      />
      <path d="M32.374 21.7913L38.8848 25.1248L38.8847 25.1041L47.3963 23.7485L47.3493 17.9131L38.8771 19.1776V19.1761L32.3239 16.0537L32.374 21.7913Z" />
    </Icon>
  );
};

export default GameConsole;