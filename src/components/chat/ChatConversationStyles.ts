import styled from "styled-components";

export const ChatConversationContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const ChatConversationOtherUserContainer = styled.div`
    border-bottom: 1px solid #DDDDDD;
    height: 52px;
    background-color: #fff;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: start;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`

export const ChatConversationUsername = styled.p<{ padding: string | undefined }>`
    font-weight: bold;
    font-size: 1rem;
    text-align: center;

    ${({ padding }) => {
        if (padding) return `padding-left: ${padding}`
    }}
`

export const ChatConversationReturnContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 1rem;
    cursor: pointer;
`

export const ChatConversationOtherUserImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`
export const ChatConversationOtherUserStatusContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 1rem;
`

export const ChantConversationOtherUserStatusCircle = styled.div<{ online: boolean }>`
    height: 7px;
    width: 7px;
    border-radius: 50%;
    background-color: #46E941;

    ${({ online }) => {
        if (online) return `background-color: red;`;
    }}
`


export const ChatConversationOtherUserStatusText = styled.p<{ online: boolean }>`
    padding-left: 3px;
    color: #46E941;
    font-weight: 500;
    font-size: 1rem;

    ${({ online }) => {
        if (online) return `color: red;`;
    }}
`

export const ChatMessagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const ChatMessagesContainer = styled.div`
    height: calc(100vh - 60px - 52px - 2rem - 40px);
    width: 100%;
    overflow: auto;

    @media screen and (max-width: 768px){
        height: calc(100% - 60px + 60px);
    }
`

export const ChatMessagesContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: start;
    padding: .5rem 1rem;
    overflow: auto;
`

export const ChatDateText = styled.p`
    font-size: .85rem;
    text-align: center;
    width: 100%;
    font-weight: 500;
    padding-bottom: 1rem;
`