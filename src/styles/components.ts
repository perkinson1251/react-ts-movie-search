import styled from "styled-components";

import { WhiteTheme } from "./theme";

export const Text4XL = styled.h2<{ color?: string; bold?: boolean }>`
    font-size: 3.6rem;
    line-height: 4rem;
    font-weight: ${({ bold = false }) => (bold ? 700 : 400)};
    color: ${({ color = WhiteTheme.colors.gray800 }) => color};
`;

export const TextLG = styled.h3<{ color?: string }>`
    font-size: 1.8rem;
    line-height: 2.8rem;
    color: ${({ color = WhiteTheme.colors.gray800 }) => color};
`;

export const TextXS = styled.h5<{ color?: string }>`
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: ${({ color = WhiteTheme.colors.gray800 }) => color};
`;

export const Container = styled.div`
    width: ${WhiteTheme.sizes.containerWidth};
    margin: 0 auto;
`;
