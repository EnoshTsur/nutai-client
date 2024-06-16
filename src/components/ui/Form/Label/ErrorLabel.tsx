import styled, { css } from "styled-components";
import shakeAnimation from "../../../../animations/shakes";

const ErrorLabel = styled.label<{ error: string }>`
  position: absolute;
  padding: 0 0.2rem;
  top: 2.5rem;
  color: rgb(255, 1, 60);
  font-size: 0.8rem;
  ${({ error }) =>
    error !== "" &&
    css`
      animation: ${shakeAnimation} 0.8s ease-in-out;
    `}
`;

export default ErrorLabel