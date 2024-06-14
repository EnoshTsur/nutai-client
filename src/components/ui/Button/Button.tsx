import styled, { css, keyframes } from "styled-components";

const rippleEffect = keyframes`
  to {
    transform: scale(5);
    opacity: 0;
  }
`;

const ButtonContainer = styled.button`
  border-width: 2px;
  border-style: solid;
  background: transparent;
  border-image: linear-gradient(to right, rgba(100, 0, 100, 1), rgba(100, 0, 70, 0.4)) 1;
  color: ${({ theme }) => theme.formElement.labelColor};
  padding: 0.5rem 1rem;
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
        background: linear-gradient(to right, rgba(100, 0, 70, 0.4), rgba(100, 0, 10, 0.4));
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
