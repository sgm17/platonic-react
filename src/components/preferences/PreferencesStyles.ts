import styled from "styled-components";

export const PreferencesSection = styled.div`
    padding-top: 60px;
`

export const PreferencesPopup = styled.div`
    background-color: rgba(0, 0, 0, .7);
    width: 100%;
    height: 100%;
    padding: 2rem;
    position: fixed;
    justify-content: center;
    align-items: center;
    z-index: 1002;
`

export const PreferencesPopupBody = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 100%;
    width: 100%;
    background-color: #fff;
`

export const PreferencesPopupTable = styled.table`
    height: 100%;
    width: 100%;
    z-index: 1001;
    text-align: left;
    border-collapse: collapse;
    font-size: .75rem;

    

    @media screen and (max-width: 768px){
        font-size: .6rem;
    }
`

export const PreferencesPopupTableHeader = styled.th`
    padding: .75rem .75rem;
    text-align: left;
    color: white;
    background-color: #04AA6D;
    border: none;

    @media screen and (max-width: 768px){
        padding: .5rem .5rem;
    }
`

export const PreferencesPopupTableElement = styled.td`
    padding: .75rem .75rem;
    border: none;
    text-align: left;
    color: #000;

    @media screen and (max-width: 768px){
        padding: .5rem .5rem;
    }
`

export const PreferencesPopupClose = styled.div`
    position: absolute;
    top: calc(2rem + 4px);
    right: calc(2rem + 4px);
    height: 30px;
    width: 30px;
    z-index: 1001;

    cursor: pointer;
`

export const PreferencesPopupTableRow = styled.tr`
    background-color: #fff;

    &:nth-child(odd){
        background-color: #f2f2f2;
    }

    &:hover {
        background-color: #04AA6D;
    }
`


export const PreferencesContainer = styled.div`
    display: grid ;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    padding: 1rem;
    justify-items: center;

    @media screen and (max-width: 768px){
        grid-gap: 0;
        display: flex;
        justify-items: center;
    }
`

export const PreferencesContent = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    align-items: center;

    @media screen and (max-width: 768px){
        grid-gap: 2rem;
    }
`

export const PreferencesHeader = styled.h1`
    text-align: left;
    font-weight: bold;
    color: #3F4254;
    font-size: 2rem;

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`

export const PrefernecesSubheader = styled.h2`
    text-align: left;
    font-weight: 500;
    color: #3F4254;
    font-size: 1.5rem;

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`

export const PreferencesSelectionText = styled.p`
    font-size: 1.5rem;
    text-align: left;
    font-weight: 500;
    padding-right: .5rem;
    
    @media screen and (max-width: 768px){
        font-size: 1rem;
    }
`

export const PreferencesSelectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const PreferencesSelect = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #EAEAEA;
    width: 100%;
    height: 55px;
    border-radius: 6px;
    padding: 1rem;

    cursor: pointer;
`

export const PreferencesSelectText = styled.p`
    font-size: 1rem;
    text-align: left;
    color: #000;
    font-weight: 500;
`

export const PreferencesArrowDown = styled.div`
    width: 30px;
    height: 30px;
`

export const PreferencesImage = styled.img`
    height: calc(100vh - 60px - 2rem);
    width: auto;
    border-radius: 10px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const PreferencesStart = styled.button`
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

export const PreferencesSexPopup = styled.div`
    width: 300px;
    background-color: rgba(0,0,0, .7);
    position: fixed;
    align-items: center;
    justify-content: center;

    padding: 1rem;
`

export const PreferencesSexContainer = styled.div`
    width: 100%;
    padding: 1rem;
    background-color: gray;
    
    &:hover {
        background-color: transparent;
    }
`

export const PreferencesSexText = styled.p`
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
`