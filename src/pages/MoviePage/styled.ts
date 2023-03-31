import styled from "styled-components";

import { Container } from "styles/components";

export const MainContainer = styled(Container)`
    margin-top: 13rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10rem;

    @media ${({ theme }) => theme.media.large} {
        flex-direction: column;
        align-items: center;

        /* max-width: 100%; */
        margin: 2rem auto;
    }
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`;
