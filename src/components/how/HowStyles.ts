import styled from "styled-components";
import { Button, Section } from "../../globalStyles";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

export const HowSection = styled(Section)`    
    ${Section}
`;

export const HowWrapper = styled.div`
    padding: 2rem;
    display: flex;
    gap: 3rem;

    @media screen and (max-width: 992px) {
        display: block;
    }
`

export const HowTextWrapper = styled(motion.div)`
    text-align: left;
    padding-bottom: 2rem;

    @media screen and (max-width: 768px){
        text-align: center;
    }
`

export const HowHeader = styled.h1`
    font-size:  1.1rem;
    line-height: 1.1rem;
    font-weight: 400;
    color: #716e6d;
`

export const HowSubheader = styled.h2`
    padding-top: 1rem;
    padding-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: 500;
    margin: 0;
`

export const HowSpan = styled.span`
    font-size: 1.5rem;
    line-height: 1.4rem;
    color: #1d1b1b;
    display: inline-block;
    padding-bottom: 2rem;
`

export const HowImage = styled(motion.img)`
    width: 750px;
    height: 500px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 2rem;

    @media screen and (max-width: 768px){
        height: auto;
        width: calc(100vw - 4rem);
    }
`

export const HowStartLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`

export const HowStart = styled(Button)`
    ${Button}
    display: inline-block;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1rem;
    border-radius: 2em;
    padding: 1rem;
    width: auto;
    height: auto;
    border: 1px solid transparent;
    border-color: #E22F2F;
    background-color: #E22F2F;
    color: #fff;
    transition: all 0.2s;

    &:hover {
        background-color: #fff;
        color: #E22F2F;
    }

`

