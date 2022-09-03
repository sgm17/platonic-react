import { Link } from "react-router-dom";
import styled from "styled-components";
import { LogoText } from "../../GlobalStyles";

export const AppbarContainer = styled.header<{ story: boolean }>`
    position: fixed;
    width: 100%;
    height: 3.75rem;
    background-color: #fff;
    z-index: 10;

    ${({ story }) => {
        if (story) {
            return `background-color: #000;
                    position:relative;
                    top:0;
                    z-index:1;
                    
                    @media screen and (max-width: 768px){
                        display: none;
                    }`
        } else {
            return `
                -webkit-box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.3);
                -moz-box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.3);
                box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.3);
            `
        }
    }}
`

export const AppbarLogoText = styled.p<{ color?: string, story: boolean }>`
    font-family: 'Retrokia Caps';
    font-size: 1.5rem;
    color: #000;
    padding-left: 1rem;

    ${({ color, story }) => {
        if (color && story) return `color: ${color};`
    }}

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const AppbarItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    justify-content: space-between;
    padding: 0 2rem;
    width: 100%;

    @media screen and (max-width: 768px) {
        display: flex;
        grid-gap: 1rem;
        padding: 0 1rem;
    }
`

export const LogoTextAppbar = styled(LogoText)`
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const AppbarNavigationContainer = styled.div<{ story: boolean }>`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 0;
    height: 100%;
    width: 30%;
    align-items: center;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-around;

    }

    ${({ story }) => {
        if (story) return 'display: none;'
    }}
`

export const AppbarNavigationLink = styled(Link)`
    text-decoration: none;
    color: #000;
`

export const AppbarProfileImageContainer = styled.div<{ page: boolean }>`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: #000;
    padding:2px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${({ page }) => {
        if (page) return 'padding: 0;';
    }}
`

export const AppbarProfileImage = styled.img`
    height: 100%;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
`

export const AppbarNavigationItem = styled.div`
    height: 30px;
    width: 30px;
`