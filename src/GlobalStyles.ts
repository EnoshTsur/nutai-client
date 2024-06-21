import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    #root, html {
        height: 100%;
        background: linear-gradient(to bottom, #0d0d0d, #0d0d0d, #2e2e2e);
    }

    body {
        margin: 0;
        padding: 0;
    }

    * , body {
        font-family: "Ubuntu", sans-serif;
    }
`;

export default GlobalStyles;
