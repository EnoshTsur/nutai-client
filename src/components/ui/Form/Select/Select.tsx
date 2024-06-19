import styled, { css } from "styled-components";
import FormElementLabel from "../Label/PlaceholderLabel";
import useSelect from "../hooks/useSelect";

interface ContainerProps {
  readonly isfocused: 1 | 0
  readonly success: 1 | 0
}

const Container = styled.div<ContainerProps>`
  position: relative;
  padding: 0.5rem 0;
  color: white;
  width: 100%;
  background: ${({ theme }) => theme.formElement.background};
  ${({ isfocused, success, theme }) => {
    if (success === 1) {
      return css`
        border-image: linear-gradient(to right, lime, #028535) 1;
        border-style: solid;
        border-width: 1px;
      `;
    }

    return isfocused === 1
      ? css`
          border: ${theme.formElement.borderFocus};
        `
      : css`
          border: ${theme.formElement.border};
        `;
  }}
  cursor: pointer;
`;

interface OptionsContainerProps {
  readonly isopen: 1 | 0
}

const OptionsContainer = styled.div<OptionsContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 8px;
  border-top: none;
  display: ${({ isopen }) => (isopen === 1 ? "block" : "none")};
  background: rgba(0, 0, 0, 0.9);
  z-index: 2;
`;

interface OptionProps {
  readonly isactive: 1 | 0
}


const Option = styled.div<OptionProps>`
  padding: 0.5rem 1rem;
  color: white;
  cursor: pointer;
  ${({ isactive }) =>
    isactive === 1 &&
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
      isfocused={isFocused ? 1 : 0}
      onClick={handleClick}
      onBlur={handleBlur}
      success={success ? 1 : 0}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      ref={containerRef}
    >
      <FormElementLabel isFocused={isFocused}>{label}</FormElementLabel>
      <span style={{ padding: "0 0.5rem" }}>{value}</span>
      <OptionsContainer isopen={isOpen ? 1 : 0}>
        {isOpen &&
          orderedOptions.map((option, index) => (
            <Option
              key={`${label}-${index}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              onClick={() => handleOptionSelection(option)}
              isactive={activeIndex === index ? 1 : 0}
            >
              {option}
            </Option>
          ))}
      </OptionsContainer>
    </Container>
  );
};

export default Select;
