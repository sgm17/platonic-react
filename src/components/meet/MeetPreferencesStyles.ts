import styled from "styled-components";
import { Button, Container } from "../../GlobalStyles";

export const PreferencesContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    padding-left: 1rem;
    padding-right: 1rem;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-items: center;
    }
`

export const PreferencesContent = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 2rem;
    align-items: center;

    @media screen and (max-width: 768px){
        grid-gap: 1.5rem;
    }
`

export const PreferencesHeader = styled.h1`
    text-align: left;
    font-weight: bold;
    color: #3F4254;
    font-size: 2.8rem;

    @media screen and (max-width: 768px) {
        text-align: center;
        font-size: 2.25rem;
    }
`

export const PrefernecesSubheader = styled.h2`
    text-align: left;
    font-weight: 500;
    color: #3F4254;
    font-size: 2rem;

    @media screen and (max-width: 768px) {
        text-align: center;
        font-size: 1.5rem;
    }
`

export const PreferenceImageContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const PreferencesImage = styled.img`
    border-radius: 10px;

    height: calc(100% - 60px - 2rem);
    width: 502px;
    aspect-ratio: 1.5;
`

export const PreferencesStart = styled(Button)`
    font-size: .8rem;
    color: #fff;
    background-color: #E22F2F;
    max-width: 33%;
    border-radius: 6px;
    font-weight: 500;

    padding: .8rem 1.7rem;

    @media screen and (max-width: 768px){
        padding: .9rem 0;
        max-width: 100%;
    }
`