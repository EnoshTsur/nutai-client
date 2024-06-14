import { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import FormElementLabel from "../FloatingLabel/FloatingLabel";
import useInput from "../hooks/useInput";

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

const Container = styled.div<{
  focused: string;
  error: string;
  success: boolean;
}>`
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
  padding: 0.5rem 0;
  ${({ focused, success, theme }) => {
    if (success) {
      return css`
        border-image: linear-gradient(to right, lime, #028535) 1;
        border-style: solid;
        border-width: 1px;
      `;
    }
    return (
      focused === "true" &&
      css`
        border: ${theme.formElement.borderFocus};
      `
    );
  }}
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
  readonly success?: boolean;
}

const Input = ({
  placeholder,
  value,
  onChange,
  error = "",
  success,
  ...rest
}: InputProps) => {
  const { ref, isFocused, handleFocus, handleBlur } = useInput({ value });

  return (
    <Container
      error={error}
      success={success != null && success}
      focused={`${isFocused}`}
      onClick={handleFocus}
      onBlur={handleBlur}
    >
      <FormElementLabel isFocused={isFocused}>{placeholder}</FormElementLabel>
      <InputContent onFocus={handleFocus} value={value} onChange={onChange} ref={ref} {...rest} />
      <ErrorLabel error={error}>{error}</ErrorLabel>
    </Container>
  );
};

export default Input;
