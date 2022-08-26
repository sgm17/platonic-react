import { motion } from "framer-motion";
import styled from "styled-components";

export const WhatMeetContainer = styled.div`
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 768px) {
        display: flex;
    }
`

export const WhatMeetImages = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: flex-start;
    grid-gap: 1rem;
    padding: 1rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const WhatMeetVertical = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const WhatMeetImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
`

export const WhatMeetContent = styled(motion.div)`
    display: grid;
    grid-template-rows: 1fr 3fr 3fr 1fr;
    grid-gap: 1rem;
    align-items: center;
    padding: 1rem;

    @media screen and (max-width: 768px) {
        grid-gap: 1.5rem;
        justify-items: center;
    }
`

export const WhatMeetHeader = styled.h1`
    color: #E22F2F;
    font-size: 1.5rem;
    font-weight: 500;
    display: block;
    text-align: left;

    @media screen and (max-width: 768px){
        text-align: center;
        font-size: 1.75rem;
    }
`

export const WhatMeetSubheader = styled.h2`
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

`

export const WhatMeetBody = styled.span`
    font-size: 1rem;
    color: #3F4254;
    line-height: 1.5rem;
    text-align: left;

    padding-right: 2rem;

    @media screen and (max-width: 768px){
        text-align: center;
        padding: 0 1rem;
    }
`

export const WhatMeetStart = styled.button`
    font-size: .75rem;
    color: #fff;
    background-color: #E22F2F;
    max-width: 33%;
    border-radius: 6px;
    height: 2.5rem;
    border: none;
    font-weight: 500;
    cursor: pointer;

    @media screen and (max-width: 768px){
        text-align: center;
        height: 3rem;
        font-size: 1rem;
        max-width: 100%;
        width: 100%;

        text-align: center;
    }
`

export const WhatMeetSection = styled.div`
    padding-top: 60px;
`