import styled from "styled-components";

import { DarkTheme } from "./theme";

export const Text4XL = styled.h2<{ color?: string; bold?: boolean }>`
    font-size: 3.6rem;
    line-height: 4rem;
    font-weight: ${({ bold = false }) => (bold ? 700 : 400)};
    color: ${({ color = DarkTheme.colors.textColor }) => color};
`;

export const TextXL = styled.h3<{ color?: string }>`
    font-size: 2rem;
    line-height: 2.8rem;
    color: ${({ color = DarkTheme.colors.textColor }) => color};
`;

export const TextLG = styled.h3<{ color?: string }>`
    font-size: 1.8rem;
    line-height: 2.8rem;
    color: ${({ color = DarkTheme.colors.textColor }) => color};
`;

export const TextBase = styled.p<{ color?: string }>`
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${({ color = DarkTheme.colors.textColor }) => color};
`;

export const TextXS = styled.h5<{ color?: string }>`
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: ${({ color = DarkTheme.colors.textColor }) => color};
`;

export const Container = styled.div`
    max-width: ${DarkTheme.sizes.containerWidth};
    margin: 0 auto;

    @media ${({ theme }) => theme.media.large} {
        margin: 2rem auto;
    }
`;
