import styled from "styled-components";

export const HomePopupContainer = styled.div`
    position: absolute;
    height: 375px;
    width: 100%;
    border-radius: 6px;
    border: 0;
    top: 60px;
    transform: translateX(-50%);
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 32px;

    @media screen and (max-width: 768px){
        padding: 0 1rem;
    }
`

export const HomePopupBody = styled.div`
    background-color: whitesmoke;
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    overflow: auto;
`

export const HomePopupTriangle = styled.div`
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid whitesmoke;
    z-index: 1000;
`

export const HomePopupHeader = styled.p`
    font-size: 1.25rem;
    line-height: 1.25rem;
    font-weight: 600;
`

export const HomePopupTable = styled.table`
        margin-top: 1rem;
        text-align: left;
        border-collapse: collapse;
        width: 100%;
        font-size: .75rem;

        @media screen and (max-width: 768px){
        font-size: .6rem;
    }
`

export const HomePopupTableHeader = styled.th`
    padding: .75rem .75rem;
    text-align: left;
    background-color: #04AA6D;
    color: white;
    border: none;

    @media screen and (max-width: 768px){
        padding: .5rem .5rem;
    }
`

export const HomePopupTableElement = styled.td`
    padding: .75rem .75rem;
    border: none;
    text-align: left;
    color: #000;

    @media screen and (max-width: 768px){
        padding: .5rem .5rem;
    }
`

export const HomePopupTableRow = styled.tr`
    background-color: #fff;

    &:nth-child(odd){
        background-color: #f2f2f2;
    }

    &:hover {
        background-color: #04AA6D;
    }
`