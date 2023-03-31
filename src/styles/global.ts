import { createGlobalStyle } from "styled-components";

import { DarkTheme } from "./theme";

export default createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: ${DarkTheme.sizes.htmlFontSize};
    }

    body {
        font-family: "DM Sans", sans-serif;
        color: ${DarkTheme.colors.textColor};
        font-size: ${DarkTheme.sizes.mainFontSize};
        overflow-x: hidden;
        background-color: ${DarkTheme.colors.backgroundColor};
        background-image: ${DarkTheme.colors.backgroundImage};
    }

    .root {
        width: 100%;
        height: 100%;
    }

    a {
        text-decoration: none;
    }
`;
