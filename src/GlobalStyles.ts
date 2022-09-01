import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import RetrokiaOtf from './assets/fonts/retrokia-caps-regular.otf'
import RetrokiaTtf from './assets/fonts/retrokia-caps-regular.ttf'

export default createGlobalStyle`    
    
    @font-face {
        font-family: 'Retrokia Caps';
        src: url(${RetrokiaTtf});
        src: url(${RetrokiaOtf});
    }

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
	}
`

export const Section = styled.section`
	padding: 6rem 0;
	width: 100%;
	align-content: center;
	background-color: '#E22F2F';
`;

export const Button = styled.button`
    font-size: .75rem;
    color: #fff;
    background-color: #E22F2F;
    border-radius: 6px;
    border: none;
    font-weight: 500;
    cursor: pointer;
`

export const Container = styled.div<{ extraPaddingTop?: string }>`
    width: 100%;
    height: calc(100vh - 60px);
    padding-top: 60px;
    z-index: -1;

    ${({ extraPaddingTop }) => {
        if (extraPaddingTop) return `padding-top: calc(60px + ${extraPaddingTop});`
    }}
`

export const LogoContainer = styled.div`
    height: 100%;
`

export const LogoLink = styled(Link)`
    text-decoration: none;
    height: 100%;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
`

export const LogoImage = styled.img`
    width: 30px;
    height: 30px;
    background-size: cover;
    background-position: center;
`

export const LogoText = styled.p<{ color?: string, story?: boolean }>`
    font-family: 'Retrokia Caps';
    font-size: 1.5rem;
    color: #000;
    padding-left: 1rem;

    ${({ color, story }) => {
        if (color && story) return `color: ${color}`
    }}
`