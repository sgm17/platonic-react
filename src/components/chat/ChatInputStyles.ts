import styled from "styled-components";

export const ChatInputContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    background-color: transparent;
    flex-direction: row;
    padding: 0 1rem;

    @media screen and (max-width: 768px){
        height: 60px;
    }
`

export const ChatInputSend = styled.div`
    padding-left: 1rem;
    cursor: pointer;
`

export const ChatInputText = styled.input`
    outline: none;
    border: none;
    overflow: auto;
    border-radius: 8px;
    resize: none;
    font-size: .8rem;
    font-weight: 500;
    width: 100%;
    height: 30px;
    border: 1px solid #DDDDDD;
    padding: 0 1rem;
`