import { Link } from "react-router-dom";
import styled from "styled-components";
import { Section } from "../../globalStyles";

export const FooterSection = styled(Section)`
    width: 100%;
    padding-bottom: 0;
    background-color: #000;
    color: #fff;

    ${Section}
`

export const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5rem;
    padding: 0 1rem;
    padding-bottom: 6rem;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
}
`

export const FooterContainer = styled.div`
    height: 100%;
    align-items: center;
    width: auto;
`

export const FooterLogoContainer = styled.div`
    height: 2rem;
    width: 100%;
    gap: 1rem;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const FooterLogoLink = styled(Link)`
    text-decoration: none;
    display: inline-flex;
    color: #fff;
`

export const FooterLogo = styled.img`
    height: 2rem;
    width: 2rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export const FooterLogoText = styled.p`
    font-family: 'Retrokia';
    font-size: 2rem;
    line-height: 2rem;
    margin: 0;
    padding: 0;
`

export const FooterEmail = styled.p`
    display: block;
    font-size: 1rem;
    line-height: 1rem;
    margin: 0;

    padding-top: 2rem;
`

export const FooterCopyrightContainer = styled.div`
    border-top: 1px solid #2d3748;
    text-align: center;
    width: 100%;
    font-size: 0.8rem;
    padding: 2rem 0;
`

export const FooterCopyright = styled.span`
    line-height: .8rem;
`

export const FooterSocialHeader = styled.h2`
    padding: 0;
    margin: 0;
    color: #fff;
    font-size: 1.66rem;
    font-weight: 400;
    font-weight: 100.66rem;
    display: inline-block;
`

export const FooterSocial = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3vw;
    width: 100%;
    height: 2.6rem;

    padding-top: 2rem;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
}
`

export const FooterSocialIcon = styled.a`
    text-decoration: none;
`

export const FooterLinks = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 1.66rem;
    line-height: 1.66rem;
    font-weight: 400;
`

export const FooterLast = styled.div`
    padding-top: 2rem;
`

export const FooterDownload = styled.span`
    cursor: pointer;
    padding: 0;
    margin: 0;
    color: #fff;
    transition: all 0.2s;
    display: inline-block;

    @media screen and (max-width: 768px) {
        display: block;
}

    &:hover{
        color: #E22F2F;
    }

`

export const FooterLink = styled(Link)`
    padding: 0;
    margin: 0;
    text-decoration: none;
    color: #fff;
    transition: all 0.2s;
    display: inline-block;

    @media screen and (max-width: 768px) {
        display: block;
}

    &:hover{
        color: #E22F2F;
    }
`