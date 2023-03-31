import styled from "styled-components";

import { DarkTheme } from "styles/theme";

import getTransition from "core/utils/getTransition";

export const Container = styled.div`
    display: flex;
    gap: 1rem;
`;

export const Input = styled.input`
    background: transparent;
    border: 1px solid ${DarkTheme.colors.gray400};
    border-radius: ${DarkTheme.sizes.borderRadius};
    outline: none;
    padding: 1.2rem;
    font-size: 1.6rem;
    color: inherit;

    &:focus {
        border-color: ${DarkTheme.colors.textColor};
    }

    ${getTransition(DarkTheme.durations.ms500, ["border", "border-color"])}
`;

export const Button = styled.button`
    background: ${DarkTheme.colors.rose700};
    border: none;
    outline: none;
    cursor: pointer;
    padding: 1.2rem 1.8rem;
    border-radius: ${DarkTheme.sizes.borderRadius};
`;
