import styled from "styled-components";

import { DarkTheme } from "styles/theme";

export const Table = styled.table`
    width: 100%;
    border: none;
`;

export const Th = styled.th`
    border: none;
`;

export const Td = styled.td<{ gray?: boolean }>`
    color: ${({ gray = false }) => gray && DarkTheme.colors.gray400};
    border: none;
`;
