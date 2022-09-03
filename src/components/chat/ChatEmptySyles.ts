import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../GlobalStyles";

export const ChatEmptyContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const ChatEmptyCircleContainer = styled.div`
    width: 100px;
    height: 100px;
    border: 2px solid #000;
    border-radius: 50%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ChatEmptyHeaderText = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
    padding: 1rem 0;
`

export const ChatEmptyBodyText = styled.p`
    color: gray;
    font-weight: 500;
    font-size: .75rem;
    padding-bottom: 1rem;
`

export const ChatEmptyStartLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    cursor: pointer;
`

export const ChatEmptyStart = styled(Button)`
    background: #E22F2F;
    font-size: .65rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    color: #fff;

    padding: .5rem 2rem;
`