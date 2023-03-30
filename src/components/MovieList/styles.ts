import styled from "styled-components";

export const Row = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 5rem;

    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
        display: none;
    }
`;
