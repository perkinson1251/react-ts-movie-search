import styled from "styled-components";
import { DarkTheme } from "styles/theme";

export const CardContainer = styled.div`
    max-width: ${DarkTheme.sizes.filmCard.width};
    row-gap: 1.2rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    flex: 0 0 auto;
`;

export const Image = styled.img`
    width: 100%;
    object-fit: cover;
`;
