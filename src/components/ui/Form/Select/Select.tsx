import styled, { css } from "styled-components";
import FormElementLabel from "../Label/PlaceholderLabel";
import useSelect from "../hooks/useSelect";
import React, { useRef } from "react";

const Container = styled.div<{ isfocused: string; success: boolean }>`
  position: relative;
  padding: 0.5rem 0;
  color: white;
  background: ${({ theme }) => theme.formElement.background};
  ${({ isfocused, success, theme }) => {
    if (success) {
      return css`
        border-image: linear-gradient(to right, lime, #028535) 1;
        border-style: solid;
        border-width: 1px;
      `;
    }

    return isfocused === "true"
      ? css`
          border: ${theme.formElement.borderFocus};
        `
      : css`
          border: ${theme.formElement.border};
        `;
  }}
  cursor: pointer;
`;

const OptionsContainer = styled.div<{ open: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 8px;
  border-top: none;
  display: ${({ open }) => (open ? "block" : "none")};
  background: rgba(0, 0, 0, 0.9);
  z-index: 2;
`;

const Option = styled.div<{ isActive: boolean }>`
  padding: 0.5rem 1rem;
  color: white;
  cursor: pointer;
  ${({ isActive }) =>
    isActive &&
    css`
      background: linear-gradient(to left, transparent, rgba(100, 0, 100, 0.7));
    `}
`;

interface SelectProps {
  readonly options: ReadonlyArray<string>;
  readonly value?: string;
  readonly label?: string;
  readonly success?: boolean;
  readonly onChange: (option: string) => void;
}

const Select = ({ value, options, label, success, onChange }: SelectProps) => {
  const {
    isFocused,
    isOpen,
    orderedOptions,
    activeIndex,
    containerRef,
    handleBlur,
    handleClick,
    handleFocus,
    handleKeyDown,
    handleMouseEnter,
    handleMouseLeave,
    handleOptionSelection,
  } = useSelect({ options, value, onChange });

  return (
    <Container
      tabIndex={0}
      isfocused={`${isFocused}`}
      onClick={handleClick}
      onBlur={handleBlur}
      success={success != null && success}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      ref={containerRef}
    >
      <FormElementLabel isFocused={isFocused}>{label}</FormElementLabel>
      <span style={{ padding: "0 0.5rem" }}>{value}</span>
      <OptionsContainer open={isOpen}>
        {isOpen &&
          orderedOptions.map((option, index) => (
            <Option
              key={label}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              onClick={() => handleOptionSelection(option)}
              isActive={activeIndex === index}
            >
              {option}
            </Option>
          ))}
      </OptionsContainer>
    </Container>
  );
};

export default Select;
