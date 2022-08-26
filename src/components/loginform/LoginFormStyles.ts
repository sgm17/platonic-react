import { Link } from "react-router-dom";
import styled from "styled-components";
import { Section } from "../../globalStyles";

export const LoginFormSection = styled(Section)`
    ${Section}

    padding: 4.5rem 0;
    background-color: #edf0f5;

    @media screen and (max-width: 768px) {
        padding: 2rem 0;
    }
`

export const LoginFormWrapper = styled.div`
    padding: 0 5.563rem;
    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5rem;
    justify-items: center;

    @media screen and (max-width: 768px) {
        display: block;
        padding: 1rem;
        grid-gap: 2rem;
    }
`

export const LoginFormText = styled.div`
    text-align: left;
    padding-right: 3rem;

    @media screen and (max-width: 768px) {
        text-align: center;
        padding-right: 0;
    }
`

export const LoginFormLogo = styled.h1`
    color: #E22F2F;
    font-size: 3rem;
    font-weight: 500;
    font-family: 'Retrokia';
    margin: 0;
    padding: 0;
`

export const LoginFormDescription = styled.h2`
    padding-top: 2rem;
    font-size: 1.75rem;
    line-height: 1.75rem;
    font-weight: 400;

    @media screen and (max-width: 768px){
        padding-bottom: 3rem;
    }
`

export const LoginFormContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 1rem;

    @media screen and (max-width: 768px){
        grid-gap: .5rem;
    }
`

export const LoginFormSquare = styled.div`
    border-radius: 8px;
    background-color: #fff;
    width: 100%;
    max-width: 400px;

    @media screen and (max-width: 768px){
        max-width: 100%;
    }
`

export const LoginFormForm = styled.form`
    padding: 2rem;

    @media screen and (max-width: 768px){
        padding: 1rem;
    }
`

export const LoginFormInput = styled.input`
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

export const LoginFormSubmit = styled.button`
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

export const LoginFormForgot = styled(Link)`
    color: #E22F2F;
    font-weight: 500;
    text-decoration: none;
    font-size: .75rem;
    line-height: 1rem;
    transition: all 0.2s;
    width: 100%;
    text-align: center;
    align-items: center;

    &:hover {
        text-decoration: underline;
        text-decoration-color: #E22F2F;
    }
`

export const LoginFormCreate = styled.div`
display: flex;
    padding-top: 2rem;
    border-top: 1px solid #EAEAEA;
    justify-content: center;

`

export const LoginFormCreateButton = styled(Link)`
    cursor: pointer;
    background-color: #42b72a;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #fff;
    padding: .75rem;
    font-weight: 500;
    text-decoration: none;
`