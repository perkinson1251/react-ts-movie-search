import { keyframes } from "styled-components";

export const Loading1 = keyframes`
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
`;

export const Loading2 = keyframes`
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
`;

export const Loading3 = keyframes`
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
`;
