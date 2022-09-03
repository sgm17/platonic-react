import styled from "styled-components";
import { Button, Container } from "../../GlobalStyles";

export const ProfileItemContainer = styled(Container)`
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    touch-action: pan-x pan-y;
    background: #E22F2F;

    position: fixed;

    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
`

export const ProfileItemContentWrapper = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    padding: 2rem 0;
`

export const ProfileItemContentContainer = styled.div`
    background-color: #fff;
    border-radius: 30px;

    height: 500px;
    aspect-ratio: .66;
    z-index: 10;

    -webkit-box-shadow: 5px 7px 20px 5px rgba(0,0,0,0.4);
    -moz-box-shadow: 5px 7px 20px 5px rgba(0,0,0,0.4);
    box-shadow: 5px 7px 20px 5px rgba(0,0,0,0.4);

    @media screen and (min-width: 1200px){
        height: 600px;
    }
`

export const ProfileItemContent = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 1rem;
    justify-items: center;
    align-items: center;
    padding: 100px 1rem 1rem 1rem;
`

export const ProfileItemImageContainer = styled.div`
    position: absolute;
    top: calc(60px + 1rem);
    width: 100px;
    height: 100px;
    z-index: 20;
    border-radius: 30px;

    -webkit-box-shadow: 2px 4px 15px 0px rgba(0,0,0,0.65);
    -moz-box-shadow: 2px 4px 15px 0px rgba(0,0,0,0.65);
    box-shadow: 2px 4px 15px 0px rgba(0,0,0,0.65);
`

export const ProfileItemEdit = styled.div`
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    background: rgba(0,0,0,.4);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 30px;
    z-index: 20;
    input[type=file]::-webkit-file-upload-button {
        visibility: hidden;
    }
`

export const ProfileItemEditInput = styled.input`
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    position: absolute;
    background: transparent;
    cursor: pointer;
   
`

export const ProfileItemImage = styled.img`
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    border-radius: 30px;
`

export const ProfileItemUsername = styled.p`
    text-align: center;
    font-weight: bold;
    font-size: 1.25rem;
    color: #3F4254;
`

export const ProfileItemUniversityContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #3F4254;
`

export const ProfileItemUniversityFacultyInput = styled.input`
    outline: none;
    border: none;
    background: transparent;
    font-weight: 500;
    text-align: center;
    font-size: .8rem;
`

export const ProfileItemUniversityText = styled.p`
    font-weight: 500;
    text-align: center;
    font-size: 1rem;
    padding-bottom: .5rem;
`

export const ProfileItemStatsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
`

export const ProfileItemStatsItem = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    grid-gap: .2rem;

    border: 1px solid #3F4254;
    padding: 1rem 0;
    border-radius: 6px;
`

export const ProfileItemStatsText = styled.p<{ stateNumber?: boolean }>`
    font-size: .8rem;
    text-align: center;
    color: #3F4254;
    font-weight: 400;

    ${({ stateNumber }) => {
        if (stateNumber) return `font-weight: bold; color: #000;`;
    }}
`
export const ProfileItemEditButton = styled(Button)`
    background-color: #3F4254;
    padding: .6rem 2.5rem;
    width: 100%;

    &:hover {
        background-color: gray;
    }
`

export const ProfileItemMessageButton = styled(Button)`
    padding: .6rem 2.5rem;
    width: 100%;
`