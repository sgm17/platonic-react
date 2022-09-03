import styled from "styled-components";

export const ChatBubbleMyContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
`

export const ChatBubbleContainer = styled.div<{ pastMe: boolean, me: boolean }>`
    padding: .5rem 0;
    width: 70%;
    display: flex;
    justify-content: left;

    ${({ pastMe }) => {
        if (pastMe) return 'padding: .25rem 0;'
    }}

    ${({ me }) => {
        if (me) return 'justify-content: right;'
    }}
`

export const ChatBubbleContent = styled.span<{ me: boolean }>`
    padding: .8rem;
    background-color: #fff;
    border-radius: 20px;
    border: 1px solid #DDDDDD;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${({ me }) => {
        if (me) return 'background-color: rgb(239, 239, 239); border:none; align-items: flex-end;'
    }}
`

export const ChatBubbleBody = styled.p<{ me: boolean }>`
    text-align: left;
    font-size: .7rem;
    line-height: 1rem;
    font-weight: 500;

    ${({ me }) => {
        if (me) return 'text-align: right;'
    }}
`

export const BubbleOtherUserContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    justify-content: start;
    align-items: center;
`

export const BubbleOtherUserImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 1rem;
`

export const ChatBubbleTimeText = styled.p`
    font-size: .6rem;
    font-weight: 500;
    color: gray;
    padding-top: 3px;
`

export const ChatBubbleRead = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding-bottom: .7rem;
    padding-left: 2px;
`

export const ChatBubbleDoubleCheck = styled.img`
    height: 14px;
    width: 14px;
`