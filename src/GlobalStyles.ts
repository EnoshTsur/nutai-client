import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.background};
    }

    * , body {
        font-family: "Ubuntu", sans-serif;
    }
`

export default GlobalStyles