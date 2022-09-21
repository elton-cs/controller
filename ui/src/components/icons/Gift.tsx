import React from "react";
import { Icon, useStyleConfig } from "@chakra-ui/react";

const Gift = (props: any) => {
  const { variant, size, ...rest } = props;
  const styles = useStyleConfig("Icon", { variant, size });

  return (
    <Icon viewBox="0 0 12 12" fill="currentColor" __css={styles} {...rest}>
      <mask
        id="path-1-outside-1_5641_8171"
        maskUnits="userSpaceOnUse"
        x="-0.251953"
        y="-0.333496"
        fill="black"
      >
        <rect fill="white" x="-0.251953" y="-0.333496" />
        <path d="M6.08138 2.77067L6.88971 1.47838C7.2043 0.973379 7.75846 0.666504 8.3543 0.666504H8.41471C9.33555 0.666504 10.0814 1.41275 10.0814 2.33317C10.0814 2.70838 9.95638 3.054 9.74805 3.33317H10.4147C10.9668 3.33317 11.4147 3.78109 11.4147 4.33317V5.6665C11.4147 6.10192 11.1355 6.47275 10.748 6.61025V9.99984C10.748 10.7353 10.1501 11.3332 9.41471 11.3332H2.74805C2.01159 11.3332 1.41471 10.7353 1.41471 9.99984V6.61025C1.02638 6.47275 0.748047 6.10192 0.748047 5.6665V4.33317C0.748047 3.78109 1.19576 3.33317 1.74805 3.33317H2.41451C2.20534 3.054 2.08138 2.70838 2.08138 2.33317C2.08138 1.41275 2.82763 0.666504 3.74805 0.666504H3.80846C4.4043 0.666504 4.95846 0.973379 5.27305 1.47838L6.08138 2.77067ZM8.3543 1.33317C7.98763 1.33317 7.64805 1.5215 7.4543 1.83171L6.5168 3.33317H8.41471C8.9668 3.33317 9.41471 2.88525 9.41471 2.33317C9.41471 1.78088 8.9668 1.33317 8.41471 1.33317H8.3543ZM5.64596 3.33317L4.70846 1.83171C4.51471 1.5215 4.17513 1.33317 3.80846 1.33317H3.74805C3.19596 1.33317 2.74805 1.78088 2.74805 2.33317C2.74805 2.88525 3.19596 3.33317 3.74805 3.33317H5.64596ZM1.74805 3.99984C1.56388 3.99984 1.41471 4.14984 1.41471 4.33317V5.6665C1.41471 5.84984 1.56388 5.99984 1.74805 5.99984H5.74805V3.99984H1.74805ZM6.41471 5.99984H10.4147C10.598 5.99984 10.748 5.84984 10.748 5.6665V4.33317C10.748 4.14984 10.598 3.99984 10.4147 3.99984H6.41471V5.99984ZM5.74805 6.6665H2.08138V9.99984C2.08138 10.3686 2.37992 10.6665 2.74805 10.6665H5.74805V6.6665ZM6.41471 10.6665H9.41471C9.78346 10.6665 10.0814 10.3686 10.0814 9.99984V6.6665H6.41471V10.6665Z" />
      </mask>
      <path d="M6.08138 2.77067L6.88971 1.47838C7.2043 0.973379 7.75846 0.666504 8.3543 0.666504H8.41471C9.33555 0.666504 10.0814 1.41275 10.0814 2.33317C10.0814 2.70838 9.95638 3.054 9.74805 3.33317H10.4147C10.9668 3.33317 11.4147 3.78109 11.4147 4.33317V5.6665C11.4147 6.10192 11.1355 6.47275 10.748 6.61025V9.99984C10.748 10.7353 10.1501 11.3332 9.41471 11.3332H2.74805C2.01159 11.3332 1.41471 10.7353 1.41471 9.99984V6.61025C1.02638 6.47275 0.748047 6.10192 0.748047 5.6665V4.33317C0.748047 3.78109 1.19576 3.33317 1.74805 3.33317H2.41451C2.20534 3.054 2.08138 2.70838 2.08138 2.33317C2.08138 1.41275 2.82763 0.666504 3.74805 0.666504H3.80846C4.4043 0.666504 4.95846 0.973379 5.27305 1.47838L6.08138 2.77067ZM8.3543 1.33317C7.98763 1.33317 7.64805 1.5215 7.4543 1.83171L6.5168 3.33317H8.41471C8.9668 3.33317 9.41471 2.88525 9.41471 2.33317C9.41471 1.78088 8.9668 1.33317 8.41471 1.33317H8.3543ZM5.64596 3.33317L4.70846 1.83171C4.51471 1.5215 4.17513 1.33317 3.80846 1.33317H3.74805C3.19596 1.33317 2.74805 1.78088 2.74805 2.33317C2.74805 2.88525 3.19596 3.33317 3.74805 3.33317H5.64596ZM1.74805 3.99984C1.56388 3.99984 1.41471 4.14984 1.41471 4.33317V5.6665C1.41471 5.84984 1.56388 5.99984 1.74805 5.99984H5.74805V3.99984H1.74805ZM6.41471 5.99984H10.4147C10.598 5.99984 10.748 5.84984 10.748 5.6665V4.33317C10.748 4.14984 10.598 3.99984 10.4147 3.99984H6.41471V5.99984ZM5.74805 6.6665H2.08138V9.99984C2.08138 10.3686 2.37992 10.6665 2.74805 10.6665H5.74805V6.6665ZM6.41471 10.6665H9.41471C9.78346 10.6665 10.0814 10.3686 10.0814 9.99984V6.6665H6.41471V10.6665Z" />
      <path
        d="M6.08138 2.77067L6.88971 1.47838C7.2043 0.973379 7.75846 0.666504 8.3543 0.666504H8.41471C9.33555 0.666504 10.0814 1.41275 10.0814 2.33317C10.0814 2.70838 9.95638 3.054 9.74805 3.33317H10.4147C10.9668 3.33317 11.4147 3.78109 11.4147 4.33317V5.6665C11.4147 6.10192 11.1355 6.47275 10.748 6.61025V9.99984C10.748 10.7353 10.1501 11.3332 9.41471 11.3332H2.74805C2.01159 11.3332 1.41471 10.7353 1.41471 9.99984V6.61025C1.02638 6.47275 0.748047 6.10192 0.748047 5.6665V4.33317C0.748047 3.78109 1.19576 3.33317 1.74805 3.33317H2.41451C2.20534 3.054 2.08138 2.70838 2.08138 2.33317C2.08138 1.41275 2.82763 0.666504 3.74805 0.666504H3.80846C4.4043 0.666504 4.95846 0.973379 5.27305 1.47838L6.08138 2.77067ZM8.3543 1.33317C7.98763 1.33317 7.64805 1.5215 7.4543 1.83171L6.5168 3.33317H8.41471C8.9668 3.33317 9.41471 2.88525 9.41471 2.33317C9.41471 1.78088 8.9668 1.33317 8.41471 1.33317H8.3543ZM5.64596 3.33317L4.70846 1.83171C4.51471 1.5215 4.17513 1.33317 3.80846 1.33317H3.74805C3.19596 1.33317 2.74805 1.78088 2.74805 2.33317C2.74805 2.88525 3.19596 3.33317 3.74805 3.33317H5.64596ZM1.74805 3.99984C1.56388 3.99984 1.41471 4.14984 1.41471 4.33317V5.6665C1.41471 5.84984 1.56388 5.99984 1.74805 5.99984H5.74805V3.99984H1.74805ZM6.41471 5.99984H10.4147C10.598 5.99984 10.748 5.84984 10.748 5.6665V4.33317C10.748 4.14984 10.598 3.99984 10.4147 3.99984H6.41471V5.99984ZM5.74805 6.6665H2.08138V9.99984C2.08138 10.3686 2.37992 10.6665 2.74805 10.6665H5.74805V6.6665ZM6.41471 10.6665H9.41471C9.78346 10.6665 10.0814 10.3686 10.0814 9.99984V6.6665H6.41471V10.6665Z"
        strokeWidth="0.2"
        mask="url(#path-1-outside-1_5641_8171)"
      />
    </Icon>
  );
};

export default Gift;