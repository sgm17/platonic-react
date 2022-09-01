import styled from "styled-components";

export const ScrollContainer = styled.div<{ height?: string }>`
    display: flex;
    align-content: center;
    background-color: #fff;
    
    ${({ height }) => {
        if (height !== undefined) return `height: ${height};`
    }}

    @media screen and (max-width: 768px){
        justify-content: center;
    }
`