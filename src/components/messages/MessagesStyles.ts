import { Link } from "react-router-dom";
import styled from "styled-components";

export const MessagesWrapper = styled.div`
    padding-top: 60px;
    background-color: rgb(239, 239, 239);
    width: 100%;
    height: 100vh;
`

export const MessagesContainer = styled.div`
    padding: 20px;

    @media screen and (max-width: 768px){
        padding: 0;
    }
`

export const MessagesContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    border: 1px solid #DDDDDD;
    background: #fff;
    border-radius: 6px;

    height: calc(100vh - 60px - 40px);

    @media screen and (max-width: 768px){
        display: flex;
        border: none;
    }
`

export const MessageAllUsers = styled.div<{ messages: boolean }>`
    width: auto;
    height: 100%;
    max-height: calc(100% - 60px);
    min-width: 33%;
    
    @media screen and (max-width: 768px){
        border: none;
        width: 100%;

        ${({ messages }) => {
        if (messages) return `
                display: none;
                border: none;
            `
    }}
    }
`

export const MessagesChatContent = styled.div<{ messages: boolean }>`
    border-left: 1px solid #DDDDDD;
    width: 100%;
    height: 100%;
    overflow: auto;

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

export const MessagesConversation = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 1rem;
    cursor: pointer;

    &:hover {
        background: whitesmoke;
    }
`

export const MessagesChatUser = styled.div`
    border-bottom: 1px solid #DDDDDD;
    padding: 1rem 0rem;
`

export const MessageChatUserName = styled.p<{ padding: string | undefined }>`
    font-weight: bold;
    font-size: 1rem;
    text-align: center;

    ${({ padding }) => {
        if (padding) return `padding-left: ${padding}`
    }}
`

export const MessageChatConversationImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

export const MessageChatConversationColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    width: 100%;
    height: 100%;
    padding-left: 1rem;
`

export const MessageChatConversationText = styled.p`
    font-size: 1rem;
    font-weight: 500;
    text-align: left;
`

export const MessageChatConversationLastCircle = styled.div`
    padding: 0 4px;
    font-size: .8rem;
    color: #000;
`

export const MessageChatConversationLastMessage = styled.p`
    font-size: .8rem;
    font-weight: 500;
    color: gray;
`

export const MessageChatConversationLastTime = styled.p`
    font-size: .8rem;
    font-weight: 500;
    color: gray;
`

export const MessageChatEmptyContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const MessageChatEmptyCircle = styled.div`
    width: 100px;
    height: 100px;
    border: 2px solid #000;
    border-radius: 50%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
`


export const MessageChatEmptyText = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
    padding: 1rem 0;
`

export const MessageChatEmptyTextBody = styled.p`
    color: gray;
    font-weight: 500;
    font-size: .75rem;
    padding-bottom: 1rem;
`

export const MessageChatEmptyButton = styled(Link)`
    background: #E22F2F;
    font-weight: bold;
    font-size: .75rem;
    border: none;
    padding: .4rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
`

export const MessageChatConversationLastContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`