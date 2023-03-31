import styled from "styled-components";
import { DarkTheme } from "styles/theme";

import getTransition from "core/utils/getTransition";

export const Container = styled.div`
    margin-top: 1rem;
    background: transperent;
`;

export const Button = styled.div`
    background-color: ${DarkTheme.colors.collapsibleButtonColor};
    cursor: pointer;
    padding: 1.3rem 2rem;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    border-radius: ${DarkTheme.sizes.borderRadius};

    :hover {
        background-color: ${DarkTheme.colors.collapsibleButtonColorHover};
    }
    ${getTransition(DarkTheme.durations.ms500, [":hover"])}
`;

export const Content = styled.div`
    margin-top: 0.5rem;
    padding: 2rem;
    overflow: hidden;
    background-color: ${DarkTheme.colors.collapsibleContentColor};

    border-radius: ${DarkTheme.sizes.borderRadius};
`;
