import styled from "styled-components";
import { Section } from "../../../GlobalStyles";

export const RegisterFormSection = styled(Section)`
    background-color: #edf0f5;

    display: flex;
    justify-content: center;

    ${Section}
`

export const RegisterFormSquare = styled.div`
    border-radius: 8px;
    background-color: #fff;
    width: 400px;
`

export const RegisterFormForm = styled.form`
    padding: 2rem;

    @media screen and (max-width: 768px){
        padding: 1rem;
    }
`

export const RegisterFormLogo = styled.h1`
    color: #E22F2F;
    font-size: 3rem;
    font-weight: 500;
    font-family: 'Retrokia Caps';
    margin: 0;
    padding: 0;
    text-align: center;
`

export const RegisterFormSubheader = styled.h2`
    font-size: 1.25rem;
    line-height: 1.25rem;
    color: grey;
    text-align: center;
    font-weight: 400;
`


export const RegisterFormContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 1rem;
    padding: 2rem 0; 

    @media screen and (max-width: 768px){
        grid-gap: .5rem;
    }
`

export const RegisterFormInput = styled.input`
    background: none;
    float: left;
    font-size: 1rem;
    width: 100%;
    padding: .5rem;
    border-width: 1px;
    border-radius: 6px;
    border-color: #EFEFEF;
    border-style: solid;
`

export const RegisterFormSubmit = styled.button`
    cursor: pointer;
    background-color: #E22F2F;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    line-height: 1.5rem;
    width: 100%;
    color: #fff;
    padding: .5rem;
    font-weight: 500;
`

export const RegisterLegal = styled.p`
    color: grey;
    font-size: .7rem;
    line-height: 1rem;
    font-weight: 400;
    text-align: center;
`


export const RegisterFormMap = styled.div`
    position: absolute;
    padding: 0 2rem;
    bottom: 2rem;
    z-index: 1;
    width: 100%;
`