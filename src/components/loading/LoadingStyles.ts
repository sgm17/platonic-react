import styled from "styled-components";

export const LoadingContainer = styled.div<{ backgroundColor?: string }>`
    height: calc(100vh - 60px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;

    ${({ backgroundColor }) => {
        if (backgroundColor) return `background-color: ${backgroundColor};`;
    }}
`