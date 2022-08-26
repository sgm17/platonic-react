import styled from "styled-components";

export const HomebarHeader = styled.header`
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 3.75rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
`

export const HomebarItems = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;

    align-items: center;
    height: 100%;
    justify-content: center;
    padding: 0 2rem;
    width: 100%;
    z-index: 10001;

    @media screen and (max-width: 768px) {
        display: flex;
        grid-gap: 1rem;
        padding: 0 1rem;
    }
`

export const LogoContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
`

export const LogoImage = styled.img`
    width: 30px;
    height: 30px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export const LogoText = styled.p`
    font-family: 'Retrokia';
    font-size: 1.5rem;
    color: #000;
    padding-left: 1rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const HomebarContainer = styled.div`
    position: relative;
    width: 100%;
    height: 40px;
    cursor: pointer;
`

export const HomebarSearch = styled.button`
    height: 100%;
    width: 100%;

    border-radius: 10px;
    border: none;

    font-size: 1rem;
    color: #1c1e21;
    font-weight: 400;
    text-align: left;
    padding-left: 1rem;
    cursor: pointer;

`

export const HomebarSearchArrowDown = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    height: 40px;
    width: 40px;
    color: #1c1e21;
    right: 0;
    z-index: 1001;
`