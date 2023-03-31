import styled from "styled-components";
import { Container } from "styles/components";

import { DarkTheme } from "styles/theme";

export const Navbar = styled.div`
    width: 100%;

    background-color: ${DarkTheme.colors.navbarColor};
    backdrop-filter: blur(8px);

    position: fixed;
    top: 0;
`;

export const Box = styled(Container)`
    padding: 2.5rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.img`
    @media ${({ theme }) => theme.media.small} {
        display: none;
    }
`;

export const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media ${({ theme }) => theme.media.small} {
        width: 100%;
        justify-content: center;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    color: #fff;
`;
