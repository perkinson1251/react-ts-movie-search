import styled from "styled-components";
import { Container } from "styles/components";

import { WhiteTheme } from "styles/theme";

export const Navbar = styled.div`
    width: 100%;

    background-color: ${WhiteTheme.colors.navbarColor};
    backdrop-filter: blur(8px);

    position: sticky;
    top: 0;
`;

export const Box = styled(Container)`
    padding: 2.5rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;
