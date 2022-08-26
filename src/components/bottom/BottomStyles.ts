import { Link } from "react-router-dom";
import styled from "styled-components";

export const BottomContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 3.75rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: whitesmoke;

    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const BottomItems = styled.div`
    width: 100%;
    height: 100%;

    padding: 0 2rem;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    align-items: center;
    grid-gap: 2rem;

`

export const BottomItem = styled.div`
    height: 30px;
    width: 30px;
`

export const BottomLink = styled(Link)`
    text-decoration: none;
    display: flex;
`