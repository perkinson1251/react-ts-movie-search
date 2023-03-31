import styled from "styled-components";

import { Loading1, Loading2, Loading3 } from "styles/animation";

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 1;
`;

export const MainLoader = styled.div`
    display: inline-block;
    position: relative;
    width: 8rem;
    height: 8rem;
`;

export const MainLoaderComponent = styled.div`
    position: absolute;
    top: 1.3rem;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
        left: 0.8rem;
        animation: ${Loading1} 0.6s infinite;
    }

    &:nth-child(2) {
        left: 0.8rem;
        animation: ${Loading2} 0.6s infinite;
    }

    &:nth-child(3) {
        left: 3.2rem;
        animation: ${Loading2} 0.6s infinite;
    }

    &:nth-child(4) {
        left: 5.6rem;
        animation: ${Loading3} 0.6s infinite;
    }
`;
