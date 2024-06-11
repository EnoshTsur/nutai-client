import styled, { css, keyframes } from "styled-components";
import FormElementLabel from "../FormElementLabel/FormElementLabel";
import useFocus from "../hooks/useFocus";

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

const Container = styled.div<{ focused: string; error: string }>`
  ${({ error, theme }) =>
    error === ""
      ? css`
          background: ${theme.formElement.background};
        `
      : css`
          background: ${theme.formElement.backgroundError};
        `};
  position: relative;
  border: ${({ theme }) => theme.formElement.border};
  border-radius: 8px;
  padding: 0.5rem 0;
  ${({ focused, theme }) =>
    focused === "true" &&
    css`
      border: ${theme.formElement.borderFocus};
    `}
`;

const InputContent = styled.input`
  border: none;
  color: ${({ theme }) => theme.formElement.color};
  width: 100%;
  background: transparent;
  padding-left: 1rem;
  &:focus {
    outline: none;
  }

  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

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

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  readonly error?: string;
}

const Input = ({
  placeholder,
  value,
  onChange,
  error = "",
  ...rest
}: InputProps) => {
  const { ref, isFocused, handleClick, handleBlur } =
    useFocus<HTMLInputElement>(value);

  return (
    <Container
      error={error}
      focused={`${isFocused}`}
      onClick={handleClick}
      onBlur={handleBlur}
    >
      <FormElementLabel isFocused={isFocused}>{placeholder}</FormElementLabel>
      <InputContent value={value} onChange={onChange} ref={ref} {...rest} />
      <ErrorLabel error={error}>{error}</ErrorLabel>
    </Container>
  );
};

export default Input;
