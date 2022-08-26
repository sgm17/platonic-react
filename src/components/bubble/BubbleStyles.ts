import styled from "styled-components";

export const ChatContainer = styled.div`
    height: calc(100% - 52.6px);
    width: 100%;
    display: flex;
    flex-direction: row;
`

export const ChatContainerDivided = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: start;
    padding: .5rem 1rem;
    overflow: auto;
`

export const BubbleOther = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
`

export const BubbleWrapper = styled.div<{ pastMe: boolean, me: boolean }>`
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

export const Bubble = styled.div<{ me: boolean }>`
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

export const BubbleText = styled.p<{ me: boolean }>`
    text-align: left;
    font-size: .7rem;
    line-height: 1rem;
    font-weight: 500;

    ${({ me }) => {
        if (me) return 'text-align: right;'
    }}
`

export const BubbleOtherUser = styled.div`
    border-bottom: 1px solid #DDDDDD;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: start;
    max-height: 52.6px;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`

export const BubbleOtherUserWrapper = styled.div`
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

export const BubbleOtherImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`

export const ChatContainingMessages = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const BubbleTimeText = styled.p`
    font-size: .6rem;
    font-weight: 500;
    /* color: #ddd; */
    color: gray;
    padding-top: 3px;
`

export const BubbleRead = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding-bottom: .7rem;
    padding-left: 2px;
`

export const BubbleDoubleCheck = styled.img`
    height: 14px;
    width: 14px;
`

export const UserStatus = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 1rem;
`

export const UserStatusText = styled.p`
    padding-left: 3px;
    color: #46E941;
    font-weight: 500;
    font-size: 1rem;
`

export const UserStatusCircle = styled.div`
    height: 7px;
    width: 7px;
    border-radius: 50%;
    background-color: #46E941;
`

export const UserReturn = styled.div`
    display: flex;
    align-items: center;
    padding-right: 1rem;
    cursor: pointer;
`