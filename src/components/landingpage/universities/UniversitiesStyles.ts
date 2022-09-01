import { motion } from "framer-motion";
import styled from "styled-components";
import { Section } from "../../../GlobalStyles";

export const UniversitiesSection = styled(Section)`
    background-color: #E22F2F;
    ${Section}
`

export const UniversitiesWrapper = styled.div`
    padding: 2rem 5.208rem;
    gap: 3rem;

    @media screen and (max-width: 768px){
        padding: 2rem;
    }
`

export const UniversitiesTextWrapper = styled(motion.div)`
    padding-top: 1.7rem;

    @media screen and (max-width: 768px){
        padding: 0;
    }
`

export const UniversitiesHeader = styled.h1`
    text-align: left;
    font-size: 2.25rem;
    font-weight: 500;
    vertical-align: 2.25rem;
    color: #fff;

    @media screen and (max-width: 768px){
        text-align: center;
    }
`

export const UniversitiesSubheader = styled.h2`
    padding-top: 1.25rem;
    text-align: left;
    font-size: 1.25rem;
    font-weight: 400;
    vertical-align: 1rem;
    color: #fff;

    @media screen and (max-width: 768px){
        text-align: center;
    }
`

export const UniversitiesCarouselWrapper = styled(motion.div)`

`