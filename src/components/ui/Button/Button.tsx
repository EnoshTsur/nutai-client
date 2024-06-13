import styled, { css, keyframes } from "styled-components";

const rippleEffect = keyframes`
  to {
    transform: scale(5);
    opacity: 0;
  }
`;

const ButtonContainer = styled.button`
  border: ${({ theme }) => theme.formElement.border};
  background: ${({ theme }) => theme.formElement.background};
  color: ${({ theme }) => theme.formElement.labelColor};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  opacity:${({ disabled }) => disabled ? '0.2' : '1'} ;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  font-size: 16px;
  transition: color 3s ease-out;

  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.formElement.backgroundHover};
      }

      &:active::before {
        content: "";
        position: absolute;
        background: ${({ theme }) =>
          theme.formElement
            .backgroundActive}; /* Blue color with transparency */
        top: 50%;
        left: 50%;
        width: 300%; /* Adjust as needed */
        height: 300%; /* Adjust as needed */
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: ${rippleEffect} 0.3s ease;
      }
    `}
`;

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = ({ children, ...rest }: ButtonProps) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
};

export default Button;
