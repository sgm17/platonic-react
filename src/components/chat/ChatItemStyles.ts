import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../GlobalStyles";

export const ChatItemContainer = styled(Container)`
    background-color: rgb(239, 239, 239);
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ChatItemPadding = styled.div`
    width: 100%;
    padding: 0 1rem;

    @media screen and (max-width: 768px){
        padding: 0;
    }
`

export const ChatItemContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    border: 1px solid #DDDDDD;
    background: #fff;
    border-radius: 6px;

    height: calc(100vh - 60px - 2rem);

    @media screen and (max-width: 768px){
        display: flex;
        border: none;

        height: calc(100vh - 60px);
    }
`

export const ChatItemLeftPanel = styled.div<{ messages: boolean }>`
    width: auto;
    height: 100%;
    min-width: 33%;
    
    @media screen and (max-width: 768px){
        border: none;
        width: 100%;

        ${({ messages }) => {
        if (messages) return `display: none; border: none;`;
    }
    }
    }
`

export const ChatItemConversation = styled.div<{ messages: boolean }>`
    border-left: 1px solid #DDDDDD;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 768px){
        display: none;
        border: none;

        ${({ messages }) => {
        if (messages) return `
                display: flex;
                width: 100%;
                border: none;
            `
    }}
    }
`

export const ChatItemUsernameContainer = styled.div`
    border-bottom: 1px solid #DDDDDD;
    padding: 1rem 0rem;
`

export const ChatItemUsername = styled.p<{ padding: string | undefined }>`
    font-weight: bold;
    font-size: 1rem;
    text-align: center;

    ${({ padding }) => {
        if (padding) return `padding-left: ${padding}`
    }}
`







