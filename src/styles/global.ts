import { createGlobalStyle } from "styled-components";

import { WhiteTheme } from "./theme";

export default createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: ${WhiteTheme.sizes.htmlFontSize};
    }

    body {
        font-family: "DM Sans", sans-serif;

        background-color: #000;
    }

    .root {
        width: 100%;
        height: 100%;
    }
`;
