import styled from "styled-components";

export const CreateContainer = styled.div`
    display: flex;

    width: 100%;
    height: 100vh;

    background-color: #000;

    touch-action: pan-x pan-y;
`

export const CreateStory = styled.div<{ backgroundColor: string, text: boolean }>`
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    width: 400px;
    height: 100vh;
    z-index: 1;

    ${({ backgroundColor }) => {
        if (backgroundColor) return `background-color: ${backgroundColor};`
    }}

    ${({ text }) => {
        if (text) return `border-radius: 20px;`
    }}
`

export const CreateCloseContainer = styled.div`
    position: absolute;
    right: 1rem;
    top: 1rem;
    z-index: 2;
    color: white;
    cursor: pointer;
    
    @media screen and (max-width: 768px){
        top: 5rem;
    }
`

export const CreateTypeTextContainer = styled.div<{ backgroundColor: string }>`
    position: absolute;
    z-index: 2;
    transform: translateX(-50%);
    left: 50%;
    bottom: 50px;

    width: 80px;
    height: 80px;
    background: #fff;
    padding: 4px;
    border-radius: 50%;

    display: flex;
    justify-content: center;

    cursor: pointer;  

    @media screen and (min-width: 768px){
        bottom: 1rem;
    }
`

export const CreateTypeText = styled.div<{ backgroundColor: string }>`
    display: flex;
    border-radius: 50%;
    border: 2px solid #000;
    height: auto;
    width: 100%;
    align-items: center;
    justify-content: center;

    ${({ backgroundColor }) => {
        if (backgroundColor) return `border: 2px solid ${backgroundColor}`
    }}
`

export const CreateTypeTextText = styled.span<{ backgroundColor: string }>`
    font-weight: bold;
    text-align: center;
    font-size: 2rem;

    ${({ backgroundColor }) => {
        if (backgroundColor) return `color: ${backgroundColor}`
    }}
`

export const CreateBackgroundPicker = styled.div<{ backgroundColor: string }>`
    position: absolute;
    z-index: 2;
    left: 1rem;
    bottom: 1rem;
    border: 2px solid #fff;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    cursor: pointer;

    ${({ backgroundColor }) => {
        if (backgroundColor) return `background-color: ${backgroundColor}`
    }}
`

export const CreateInputContainer = styled.div`
    position: absolute;
    z-index: 2;

    left: 50%;
    bottom: 50%;

    transform: translate(-50%, 50%);
`

export const CreateInput = styled.textarea`
    font-weight: bold;
    font-style: italic;
    font-size: 2rem;
    line-height: 2rem;
    text-align: center;

    border: none;
    background: transparent;
    outline: none;
    overflow: hidden;
    resize: none;
    color: #fff;

    &::placeholder{
        color: gray;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`

export const CreateButtonContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    z-index: 2;

    height: 40px;
    width: 100%;
    padding: 0 1rem;

    bottom: 1rem;
`

export const CreateButton = styled.button`
    text-decoration: none;
    border: none;
    font-size: 1rem;
    color: #fff;
    width: 100%;
    background-color: #362E2E;
    border-radius: 20px;

    cursor: pointer;
`