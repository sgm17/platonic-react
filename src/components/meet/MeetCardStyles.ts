import styled from "styled-components";
import { Button, Container } from "../../GlobalStyles";

export const MeetCardContainer = styled(Container)`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
`

export const MeetCardHeader = styled.h1`
    color: #3F4254;
    font-weight: bold;
    font-size: 3rem;
    text-align: center;
    display: flex;
    padding: 0 1rem;
    padding-top: 1rem;
`

export const MeetCardContentContainer = styled.div`
    padding-top: 1rem;
`

export const MeetCardContent = styled.div`
    height: 325px;
    aspect-ratio: 1.5;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

    -webkit-box-shadow: 2px 2px 8px 1px rgba(0,0,0,0.4);
    -moz-box-shadow: 2px 2px 8px 1px rgba(0,0,0,0.4);
    box-shadow: 2px 2px 8px 1px rgba(0,0,0,0.4);

    background-image: linear-gradient(to right top, #e22f2f, #ef0053, #ec0081, #d100b9, #8700f2);
    background-size: 100% 30%;
    background-repeat: no-repeat;

    @media screen and (max-width: 768px) {
        aspect-ratio: 0.66;
        height: 450px;
    }

    @media screen and (min-width: 1200px){
        height: 450px;
        aspect-ratio: 1.8;
    }
`
export const MeetCardHeaderContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    position: relative;
    top: calc(325px * .3 - 1rem - 50px);

    @media screen and (max-width: 768px) {
        top: calc(450px * .3 - 1rem - 50px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media screen and (min-width: 1200px){
        top: calc(450px * .3 - 1rem - 50px);
    }
`

export const MeetCardImageContainer = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;

    padding: 3px;

    background-color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const MeetCardImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    aspect-ratio: 1;
`

export const MeetCardBodyContainer = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: 2fr 2fr 1fr 1fr;

    grid-gap: 1rem;

    @media screen and (max-width: 768px) {
        margin-top: 86px;
    }

    @media screen and (min-width: 1200px){
        margin-top: 86px;
    }
`

export const MeetCardButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const MeetCardButton = styled(Button)`
    padding: .6rem 1.5rem;
    font-size: .7rem;
    background-color: #3F4254;  

    &:hover {
     
        background-color: #9B9B9B;
    }
`

export const MeetCardUsername = styled.p`
    font-weight: bold;
    font-size: 1.7rem;
    color: #000;
    text-align: center;
`

export const MeetCardUniversityContainer = styled.span`
    display: flex;
    flex-direction: column;
    color: #3F4254;
    font-weight: 500;
    text-align: center;
`

export const MeetCardUniversityText = styled.p`
    font-size: 1.25rem;
`

export const MeetCardFacultyText = styled.p`
    font-size: 1.25rem;
`

export const MeetCardDatesContainer = styled.span`
    color: #3F4254;
    font-weight: 500;
    text-align: left;
`

export const MeetCardDates = styled.p`
    font-size: 1.1rem;
`

export const MeetCardCountdown = styled.p`
    font-size: 1.1rem;
    color: #3F4254;
    font-weight: 500;
    text-align: left;
`