import styled from "styled-components";

export const ChatStoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 177px;

    margin-bottom: 1rem;
`

export const ChatStoryText = styled.p`
    text-align: left;
    font-weight: 500;
    font-size: .7rem;
    padding-top: 10px;
`

export const ChatStorySeparator = styled.div`
    height: 10px;
    width: 177px;
    border-top: 2px solid #DDDDDD;
    margin-top: 3px;
`

export const ChatStoryContent = styled.div<{ background: string }>`
    width: 127px;
    height: 177px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    ${({ background }) => {
        return `background-color: ${background};`;
    }}
`

export const ChatStoryBody = styled.p`
    text-align: center;
    font-weight: 500;
    font-size: .65rem;
    color: #fff;
    line-height: 1rem;
`

