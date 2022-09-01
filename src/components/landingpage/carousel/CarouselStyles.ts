import styled from "styled-components";

export const CarouselWrapper = styled.div`
    padding-top: 4rem;

`

export const CarouselImage = styled.img`
    background-size: cover;
    height: 100%;

    @media screen and (max-width: 768px) {
        max-height: 190px;
        width: auto;
    }
`

export const CarouselCard = styled.div`
    height: auto;
    padding: 2rem;
    align-items: center;
    background-color: #fff;
    text-align: left;
`

export const CarouselCardHeader = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
`

export const CarouselCardUniversity = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.5rem;
`

export const CarouselCardAcronym = styled.h2`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.2rem;
    color: grey;
`

export const CarouselCardCampus = styled.h2`
    display: block;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.2rem;
    padding-top: 1rem;
    color: grey;
`

export const CarouselCardBody = styled.span`
    display: block;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;
    padding: 1rem 0;
`

export const CarouselItem = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;

    @media screen and (max-width: 768px) {
        height: auto;
        display: block;
    }
`

export const CarouselMap = styled.img`
    display: flex;
    width: 100%;
    margin: 1rem 0;
    background-size: cover;
`