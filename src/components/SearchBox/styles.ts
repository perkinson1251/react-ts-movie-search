import styled from "styled-components";

import SearchIcon from "assets/icons/Search.svg";

export const Form = styled.form`
    color: #ffffff;
    display: flex;
    padding: 0.5rem;
    border: 0.2rem solid white;
    border-radius: 0.5rem;
`;

export const Input = styled.input`
    border: none;
    outline: none;
    background: transparent;
    padding: 0.5rem;
    font-size: 1.6rem;
    color: inherit;
`;

export const Button = styled.button`
    text-indent: -999px;
    overflow: hidden;
    width: 40px;
    padding: 0;
    margin: 0;
    border: 1px solid transparent;
    border-radius: inherit;
    background: transparent url(${SearchIcon}) no-repeat center;
    cursor: pointer;
    opacity: 0.7;
`;
