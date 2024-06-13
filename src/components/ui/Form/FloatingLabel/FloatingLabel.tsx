import styled, { css } from "styled-components"

const Label = styled.label<{ focused: string }>`
  position: absolute;
  padding: 0 0.2rem;
  top: 20%;
  left: 0.5rem;
  color: ${({ theme }) => theme.formElement.labelColor};
  transition: all 400ms ease-in-out;
  ${({ focused, theme }) =>
    focused === "true" &&
    css`
      top: -1.5rem;
      left: 0;
      color: ${theme.formElement.labelFocusColor};
    `}
`

interface LabelProps {
    readonly children: React.ReactNode
    readonly isFocused: boolean
}

const FloatingLabel = ({ children, isFocused, }: LabelProps) => {
    return (
        <Label focused={`${isFocused}`}>
            { children }
        </Label>
    )
} 

export default FloatingLabel