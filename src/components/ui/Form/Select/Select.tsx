import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import FormElementLabel from "../FormElementLabel/FormElementLabel";

const Container = styled.div<{ isfocused: string }>`
  position: relative;
  border-radius: 8px;
  padding: 0.5rem 0;
  color: white;
  background: ${({ theme }) => theme.formElement.background};
  ${({ isfocused, theme }) =>
    isfocused === "true"
      ? css`
          border: ${theme.formElement.borderFocus};
        `
      : css`
          border: ${theme.formElement.border};
        `};

  cursor: pointer;
`;

const OptionsContainer = styled.div<{ open: string }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border-radius: 0 0 8px 8px;
  border-top: none;
  display: ${({ open }) => (open === "true" ? "block" : "none")};
  background: rgba(0, 0, 0, 0.9);
`;

const Option = styled.div`
  padding: 0.5rem 1rem;
  color: white;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to left, transparent, rgba(100, 0, 100, 0.7));
  }
`;

interface SelectProps <T extends string> {
  readonly options: ReadonlyArray<T>;
  readonly value?: T;
  readonly error?: string;
  readonly placeholder?: string;
  readonly onChange: (selection: T) => void;
}

const Select = <T extends string> ({
  value,
  options,
  placeholder,
  error = "",
  onChange,
}: SelectProps<T>) => {
  const [isFocused, setFocused] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleBlur = () => {
    if (value == "") {
      setFocused(false);
      setOpen(false);
    }
  };

  const handleOptionClick = (option: T) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <Container
      tabIndex={0}
      isfocused={`${isFocused}`}
      onClick={() => {
        setOpen(!isOpen);
        setFocused(true);
      }}
      onBlur={handleBlur}
    >
      <FormElementLabel isFocused={isFocused}>{placeholder}</FormElementLabel>
      <span style={{ padding: '0 0.5rem'}}>{value}</span>
      <OptionsContainer open={`${isOpen}`}>
        {isOpen &&
          options.map((option) => (
            <Option key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </Option>
          ))}
      </OptionsContainer>
    </Container>
  );
};

export default Select;
