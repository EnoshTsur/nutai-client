import styled, { css } from "styled-components";
import PlaceholderLabel from "../Label/PlaceholderLabel";
import useInput from "../hooks/useInput";
import { BiShow } from "react-icons/bi";
import { lighten } from "polished";
import ErrorLabel from "../Label/ErrorLabel";

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
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  background: transparent;
  padding-left: 1rem;
  flex-basis: 97%;
  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    flex-basis: 95%;
  }

  @media (max-width: 500px) {
    flex-basis: 80%;
  }

  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Show = styled(BiShow)<{ color: string }>`
  color: ${({ color }) => color};
  padding: 0 1rem;
  flex-basis: 3%;
  cursor: pointer !important;

  @media (max-width: 768px) {
    flex-basis: 5%;
  }

  @media (max-width: 500px) {
    flex-basis: 10%;
  }

  &:hover {
    color: ${({ color }) => lighten(0.2, color)} !important;
  }
`;

export interface InputProps
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
  type,
  ...rest
}: InputProps) => {
  const {
    ref,
    isFocused,
    handleFocus,
    handleBlur,
    inputType,
    handleShowPasswordClick,
    showPasswordColor,
  } = useInput({ value, type, error, success });

  return (
    <Container
      error={error}
      success={success != null && success}
      focused={`${isFocused}`}
      onClick={handleFocus}
      onBlur={handleBlur}
    >
      <PlaceholderLabel isFocused={isFocused}>{placeholder}</PlaceholderLabel>
      <InputContent
        onFocus={handleFocus}
        value={value}
        onChange={onChange}
        ref={ref}
        type={inputType}
        {...rest}
      />
      {type === "password" && (
        <Show onClick={handleShowPasswordClick} color={showPasswordColor} />
      )}
      <ErrorLabel error={error}>{error}</ErrorLabel>
    </Container>
  );
};

export default Input;
