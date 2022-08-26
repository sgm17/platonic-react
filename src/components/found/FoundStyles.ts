import styled from "styled-components";

export const FoundWrapper = styled.div`
    padding-top: 60px;
`

export const FoundContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    justify-items: center;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const FoundTextContainer = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
`

export const FoundTitle = styled.h1`
    text-align: left;
    font-weight: bold;
    color: #3F4254;
    font-size: 2rem;
    padding-bottom: 1rem;

    @media screen and (max-width: 768px){
        text-align: center;
    }
`

export const FoundBody = styled.span`
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.25rem;
    color: #3F4254;
    text-align: left;

    @media screen and (max-width: 768px){
        text-align: center;
    }
`