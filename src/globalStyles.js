import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
	}
	body {
    min-height: 100vh;
    min-height: fill-available;
    min-height: -webkit-fill-available;
}
html {
    height: fill-available;
    height: -webkit-fill-available;
}
`

export const Section = styled.section`
	padding: 6rem 0;
	width: 100%;
	align-content: center;
	background-color: '#E22F2F';
`;

export const Button = styled.button`
	background-color: #E22F2F;
	text-decoration: none;
	cursor: pointer;
`

export default GlobalStyle