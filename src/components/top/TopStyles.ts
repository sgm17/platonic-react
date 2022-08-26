import { Link } from "react-router-dom";
import styled from "styled-components";

export const TopContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 0;
    height: 100%;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
}
`

export const TopLink = styled(Link)`
    text-decoration: none;
    color: #000;
`

export const TopProfile = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: #000;
`

export const TopItem = styled.div`
    height: 30px;
    width: 30px;
`