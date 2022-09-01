import { motion } from "framer-motion";
import styled from "styled-components";
import { Section } from "../../../GlobalStyles";

export const DownloadSection = styled(Section)`
    width: 100%;
    padding-top: calc(6.75em + 6rem);

    @media screen and (max-width: 768px){
		padding-top: 6rem;
	}
`

export const DownloadContainer = styled.div`
    background-color: #f5f3f3;
`

export const DownloadWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;

    @media screen and (max-width: 768px){
        display: block;
    }
`

export const DownloadContent = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    padding: 2rem;

    @media screen and (max-width: 768px){
        padding: 1rem;
    }
`

export const DownloadImage = styled(motion.img)`
    top: -6.75em;
    position: relative;
    height: 60vh;
    width: auto;
    background-repeat: no-repeat;
    background-position: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const DownloadHeader = styled.h1`
    padding-right: 10rem;
    line-height: 2rem;
    font-size: 1.5rem;
    font-weight: 400;

    @media screen and (max-width: 992px){
        padding-right: 6rem;
    }

    @media screen and (max-width: 768px){
        padding-right: 3rem;
    }
`

export const DownloadSubheader = styled.p<{ notlast: boolean }>`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.75rem;
    color: #5b5857;
    padding-right: 4rem;

    @media screen and (max-width: 992px){
        padding-right: 2rem;
    }

    @media screen and (max-width: 768px){
        ${({ notlast }) => {
        if (notlast) { return 'padding 2rem 0;' }
    }}
        padding-right: 1rem;
        
    }
`

export const DownloadStores = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;

    @media screen and (max-width: 992px){
        padding-top: 2rem;
    }
`

export const DownloadAndroid = styled.img`
    height: 4.5rem;
    width: auto;
`

export const DownloadIos = styled.img`
    height: 3rem;
    width: auto;
`

export const DownloadItem = styled.div<{ android: boolean }>`
    ${({ android }) => {
        if (android) return 'padding-left: 2rem;';
    }}
`


export const DownloadLink = styled.a`
    text-decoration: none;
    height: 100%;
`