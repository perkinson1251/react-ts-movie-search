import styled from "styled-components";
import { DarkTheme } from "styles/theme";

export const Page = styled.div`
    margin-top: 12rem;
    min-height: 100vh;
    width: 100%;

    row-gap: ${DarkTheme.sizes.cardRowGap};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 5rem;
    text-align: center;
`;
