import styled from "styled-components";

export const AddContainer = styled.div`
    width: 100%;
    height: 100%;
    background: none;
    touch-action: pan-x pan-y;
    
    position: absolute;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 20;
`

export const AddBackground = styled.div`
    width: 100%;
    height: calc(100% - 60px);
    background: #000;
    touch-action: pan-x pan-y;

    position: absolute;
    top: 60px;

    z-index: -1;

    @media screen and (max-width: 768px){
        top: 0;
    }
`

export const AddItemContainer = styled.div<{ backgroundColor: string, text: boolean }>`
    width: 400px;
    height: 100%;
    touch-action: pan-x pan-y;
    position: absolute;

    ${({ backgroundColor }) => {
        if (backgroundColor) return `background-color: ${backgroundColor};`
    }}

    ${({ text }) => {
        if (text) return `border-radius: 20px;`
    }}

    @media screen and (max-width: 768px){
        width: 100%;
    }
`

export const AddItemCloseContainer = styled.div`
    position: absolute;
    right: 1rem;
    top: 1rem;

    color: white;
    
    cursor: pointer;
`

export const AddRoundTextContainer = styled.div<{ backgroundColor: string }>`
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: 1rem;

    width: 80px;
    height: 80px;
    background: #fff;
    padding: 4px;
    border-radius: 50%;

    display: flex;
    justify-content: center;

    cursor: pointer;
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

    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;

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
        color: #fff;
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

export const AddCreatedContainer = styled.div`
    height: calc(100vh - 60px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
`

export const AddCreatedText = styled.p`
    text-align: center;
    color: #fff;
    font-size: 2rem;
`