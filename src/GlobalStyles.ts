import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: linear-gradient(to bottom, #0d0d0d, #0d0d0d, #2e2e2e);
        height: 100vh;
    }

    * , body {
        font-family: "Ubuntu", sans-serif;
    }
`

export default GlobalStyles