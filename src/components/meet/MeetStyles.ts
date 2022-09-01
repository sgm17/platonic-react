import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../GlobalStyles";

export const MeetItemContainer = styled.div<{ first: boolean, last: boolean, active: boolean }>`
    width: 280px;
    height: 400px;
    background-color: #fff;
    border-radius: 6px;
    margin: 1em;
    padding: 1rem;
    
    -webkit-box-shadow: 2px 2px 8px 1px rgba(0,0,0,0.4);
    -moz-box-shadow: 2px 2px 8px 1px rgba(0,0,0,0.4);
    box-shadow: 2px 2px 8px 1px rgba(0,0,0,0.4);

    background-image: linear-gradient(to right top, #e22f2f, #ef0053, #ec0081, #d100b9, #8700f2);
    background-size: 100% 30%;
    background-repeat: no-repeat;

    ${({ first }) => {
        if (first) return `margin-left: 2em;`;
    }}

    ${({ last }) => {
        if (last) return `margin-right: 2em;`;
    }}

    ${({ active }) => {
        if (!active) return `
            background: rgb(73,64,64);
            background: linear-gradient(90deg, rgba(73,64,64,1) 0%, rgba(27,17,17,1) 100%);
            background-size: 100% 30%;
            background-repeat: no-repeat;
        `
    }}

`

export const MeetImageContainer = styled.div`
    height: 100px;
    width: 100%;
    padding-top: calc(400px * .3 - 50px - 1rem);

    display: flex;
    justify-content: center;
`

export const MeetBodyContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    height: 50%;    
    justify-content: space-evenly;
    height: auto;
    padding-top: calc(50px);
    align-items: center;
`

export const MeetItemImage = styled.img`
    width: auto;
    height: 100px;
    aspect-ratio: 1;

    border-radius: 50%;
    border: 3px solid #fff;
    background-color: #fff;
`

export const MeetItemUsername = styled.div`
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
`

export const MeetUniversityContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MeetUniversityText = styled.p<{ size: string, paddingTop?: string, color?: string }>`
    color: #9B9B9B;
    text-align: center;
    font-weight: 400;

    ${({ size }) => {
        return `font-size: ${size};`
    }}

    ${({ paddingTop }) => {
        if (paddingTop) return `padding-top: ${paddingTop};`
    }}

    ${({ color }) => {
        if (color) return `color: ${color}; font-weight: 500;`
    }}
`

export const MeetTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const MeetItemDates = styled.p`
    font-weight: 400;
    text-align: center;
    font-size: .8rem;
    color: #9B9B9B;
`


export const MeetCountdownText = styled.p`
    font-size: .8rem;
    font-weight: 500;
    color: #9B9B9B;
    text-align: center;
    padding-top: .4rem;
`

export const MeetChatContainer = styled.div`
    padding-top: 1rem;
    width: 100%;
    justify-content: center;
    display: flex;
`

export const MeetChatLink = styled(Link)`
    text-decoration: none;
`

export const MeetChat = styled(Button)`
    padding: .65rem 1.4rem;
    
    &:disabled{
        cursor: default;
    }

    &:hover{
        background-color: #ED3333;

        ${({ disabled }) => {
        if (disabled) return 'background-color:gray;'
    }}
    }

    ${({ disabled }) => {
        if (disabled) return 'background-color:gray;'
    }}
`