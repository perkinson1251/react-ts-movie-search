import styled from "styled-components";

import { DarkTheme } from "styles/theme";

export const Row = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: ${DarkTheme.sizes.cardRowGap};

    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
        display: none;
    }

    @media ${({ theme }) => theme.media.medium} {
        flex-direction: column;
    }
`;
