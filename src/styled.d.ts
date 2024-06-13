import { DefaultTheme } from "styled-components";

// Extend the DefaultTheme interface to include your custom theme properties
declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    formElement: {
      background: string;
      backgroundHover: string;
      backgroundActive: string;
      backgroundError: string;
      border: string;
      borderFocus: string;
      color: string;
      labelColor: string;
      labelFocusColor: string;
    };
  }
}

// Define your darkTheme and lightTheme as DefaultTheme objects
export const darkTheme: DefaultTheme;
export const lightTheme: DefaultTheme;