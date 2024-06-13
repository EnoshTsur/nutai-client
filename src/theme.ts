import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  background: "#000000",
  formElement: {
    background: "linear-gradient(45deg, transparent, rgba(100, 0, 100, 0.4))",
    backgroundHover:
      "linear-gradient(45deg, transparent, rgba(100, 0, 80, 0.8))",
    backgroundActive:
      "linear-gradient(45deg, transparent, rgba(200, 0, 80, 0.8))",

    backgroundError:
      "linear-gradient(45deg, transparent, rgba(100, 0, 0, 0.7))",
    border: "1px solid purple",
    borderFocus: "1px solid #ffffff",
    color: "#ffffff",
    labelColor: "#d567d5",
    labelFocusColor: "#ffffff",
  },
};

export const lightTheme: DefaultTheme = {
  background: "#ffffff",
  formElement: {
    background: "linear-gradient(45deg, rgba(0, 50, 150, 0.2), transparent)",
    backgroundHover:
      "linear-gradient(45deg, transparent, rgba(100, 0, 80, 0.8))",
    backgroundActive:
      "linear-gradient(45deg, transparent, rgba(200, 0, 80, 0.8))",

    backgroundError:
      "linear-gradient(45deg, transparent, rgb(255 152 181 / 70%))",
    border: "1px solid skyblue",
    borderFocus: "1px solid rgb(0, 60, 100)",
    color: "#000000",
    labelColor: "rgb(0, 60, 100)",
    labelFocusColor: "#000000",
  },
};
