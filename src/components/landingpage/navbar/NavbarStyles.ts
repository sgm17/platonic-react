import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Button, LogoContainer, LogoImage, LogoLink, LogoText } from "../../../GlobalStyles";

export const Header = styled.header`
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 6rem;
    padding: 2rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavbarLogoLink = styled(LogoLink)`
    height: 1.5rem;
`

export const NavbarLogoContainer = styled(LogoContainer)``

export const NavbarLogoImage = styled(LogoImage)`
    width:1.5rem;
    height: 1.5rem;
`

export const NavbarLogoText = styled(LogoText)``

export const Nav = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
`

export const NavItems = styled.ul<{ click: boolean }>`
    list-style: none;
    z-index: 5;
    display: flex;
    gap: 1.5rem;
    height: auto;
    align-items: center;
    left: -100%;

    @media only screen and (max-width: 768px) {
        gap: 2rem;

        ${({ click }) => {
        if (click) return `left: 0; display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        opacity: 1;
        transition: all 0.5s ease;
        background: #EBEBEB;
        justify-content: center;
        ` }
    }
    }
`

export const NavItem = styled.li<{ click: boolean }>`
    display: list-item;

    @media only screen and (max-width: 768px) {
        display: none;

        ${({ click }) => {
        if (click) {
            return `text-align: center;
                    padding: 2rem;
                    width: 100%;
                    display: table;`
        }
    }}
       

    }
`

export const NavItemLink = styled(Link)`
    text-decoration: none;
    display: inline-block;
    line-height: clamp(1rem,5vw,1.5rem);
    font-size: clamp(1rem,5vw,1.5rem);
    font-weight: 400;
    color: #000;
    padding-bottom:2px;
    background-image: linear-gradient(#E22F2F 0 0);
    background-position: 0 100%;
    background-size: 0% 2px;
    background-repeat: no-repeat;
    transition:
    background-size 0.3s,
    background-position 0s 0.3s; 

    &:hover{
        background-position: 100% 100%; /*OR bottom right*/
        background-size: 100% 2px;
    }
`

export const NavMobileClose = styled(AiOutlineClose)`
    color: #000;
    width: auto;
    height: clamp(1.5rem,7vw,2rem);
    cursor: pointer;
    display: none;

    @media only screen and (max-width: 768px) {
        display: inline-flex;
    }
`

export const NavMobile = styled(AiOutlineMenu)`
    color: #000;
    width: auto;
    height: clamp(1.5rem,7vw,2rem);
    display: none;
    cursor: pointer;

    @media only screen and (max-width: 768px) {
        display: inline-flex;
    }
`

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`

export const NavButton = styled(Button)`
    display: inline-block;
    padding: 0.5em 2.25em;
    border: 0.1em solid #E22F2F;
    border-radius:2.25em;
    margin: .5em 0;
    color: #fff;
    text-align:center;
    transition: all 0.2s;
    font-size: clamp(.75rem,4vw,1rem);
    
    &:hover{
        color:#E22F2F;
        background-color:#fff;
    }

    ${Button}
`