import styled, { css } from "styled-components"

interface LabelProps {
    readonly focused: 1 | 0
}

const Label = styled.label<LabelProps>`
  position: absolute;
  padding: 0 0.2rem;
  top: 20%;
  left: 0.5rem;
  color: ${({ theme }) => theme.formElement.labelColor};
  transition: all 400ms ease-in-out;
  ${({ focused, theme }) =>
    focused === 1 &&
    css`
      top: -1.5rem;
      left: 0;
      color: ${theme.formElement.labelFocusColor};
    `}
`

interface PlaceholderLabelProps {
    readonly children: React.ReactNode
    readonly isFocused: boolean
}

const PlaceholderLabel = ({ children, isFocused, }: PlaceholderLabelProps) => {
    return (
        <Label focused={isFocused ? 1 : 0}>
            { children }
        </Label>
    )
} 

export default PlaceholderLabel