import { keyframes } from "styled-components";

const shakeAnimation = keyframes`
  0% {
    transform: translateX(-5rem);
  }
  25% {
    transform: translateX(1rem);
  }
  50% {
    transform: translateX(-2rem);
  }
  75% {
    transform: translateX(1rem);
  }
  100% {
    transform: translateX(0);
  }
`;

export default shakeAnimation