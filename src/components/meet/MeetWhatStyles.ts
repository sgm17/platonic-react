import { motion } from "framer-motion";
import styled from "styled-components";
import { Button } from "../../GlobalStyles";

export const MeetWhatContainer = styled.div`
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 768px) {
        display: flex;
    }
`

export const MeetWhatContent = styled(motion.div)`
    display: grid;
    grid-template-rows: 1fr 3fr 3fr 1fr;
    grid-gap: 1rem;
    align-items: center;
    padding: 1rem;

    @media screen and (min-width: 1200px){
        grid-gap: 0.5rem;
    }

    @media screen and (max-width: 768px) {
        grid-gap: 1.5rem;
        justify-items: center;
    }
`

export const MeetWhatImagesContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: flex-start;
    grid-gap: 1rem;
    padding: 1rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const MeetWhatVerticalImagesContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const WhatMeetImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
`

export const WhatMeetImageContainer = styled.div`
    padding-top: 1rem;
`

export const MeetWhatHeader = styled.h1`
    color: #E22F2F;
    font-size: 2rem;
    font-weight: bold;
    display: block;
    text-align: left;

    @media screen and (min-width: 1200px){
        font-size: 2.5rem;
    }

    @media screen and (max-width: 768px){
        text-align: center;
        font-size: 1.75rem;
    }
`

export const MeetWhatSubheader = styled.h2`
    font-size: 2.75rem;
    color: #3F4254;
    line-height: 2.75rem;
    display: block;

    padding-right: 5rem;
    text-align: left;

    @media screen and (max-width: 768px){
        text-align: center;
        padding: 0 1rem;
    }

    @media screen and (min-width: 1200px){
        font-size: 3.5rem;
        line-height: 3.5rem;
    }

`

export const MeetWhatBody = styled.span`
    font-size: 1rem;
    color: #3F4254;
    line-height: 1.5rem;
    text-align: left;

    padding-right: 2rem;

    @media screen and (max-width: 768px){
        text-align: center;
        padding: 0 1rem;
    }

    @media screen and (min-width: 1200px){
        font-size: 2rem;
        line-height: 2.5rem;
    }
`

export const MeetWhatButton = styled(Button)`
    max-width: 40%;
    padding: 0.5rem 1.5rem;
    font-size: .7rem;

    @media screen and (min-width: 1200px){
        max-width: 40%;
        padding: .8rem 1.75rem;
        font-size: .9rem;
    }

    @media screen and (max-width: 768px){
        text-align: center;
        max-width: 100%;
        width: 100%;
        font-size: 1rem;
        padding: .8rem 1.75rem;

        text-align: center;
    }
`

export const WhatMeetSection = styled.div`
    padding-top: 60px;
`