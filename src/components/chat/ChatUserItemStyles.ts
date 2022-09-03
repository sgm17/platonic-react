import styled from "styled-components";

export const ChatUserItemContainer = styled.div`
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

export const ChatUserItemImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

export const ChatUserItemTextContainer = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    width: 100%;
    height: 100%;
    padding-left: 8px;
`
export const ChatUserItemUsername = styled.p`
    font-size: 1rem;
    font-weight: 500;
    text-align: left;
`

export const ChatUserItemLastMessageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

export const ChatUserItemLastMessageText = styled.p`
    font-size: .8rem;
    font-weight: 500;
    color: gray;
`

export const ChatUserItemCircleSeparator = styled.div`
    padding: 0 4px;
    font-size: .8rem;
    color: #000;
`

export const ChatUserItemLastTimeText = styled.p`
    font-size: .8rem;
    font-weight: 500;
    color: gray;
`