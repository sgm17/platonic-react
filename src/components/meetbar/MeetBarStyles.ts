import styled from "styled-components";

export const MeetBarContainer = styled.div`
    display: flex;
    align-content: center;
    background-color: #fff;
    height: 100%;
    bottom: 0;

    @media screen and (max-width: 768px){
        justify-content: center;
    }
`

export const MeetBarItem = styled.div<{ first: boolean, last: boolean }>`
    width: 200px;
    height: 200px;
    background-color: whitesmoke;
    border-radius: 10px;
    box-shadow: 1px 2px rgba(0, 0, 0, 0.3);
    margin: 1em 0.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;

    ${({ first }) => {
        if (first) return `margin-left: 2em;`;
    }}

    ${({ last }) => {
        if (last) return `margin-right: 2em;`;
    }}
`

export const MeetBarImage = styled.img`
    display: block;
    width: 100%;
    height: auto;
    border-radius: 50%;
    border: 2px solid whitesmoke;
    background-color: #000;
    margin: 2px;
`

export const MeetBarBorder = styled.div`
    background: linear-gradient(
    200deg,
    #da3394 25%,
    #e03c67 50%,
    #f3753b 75%,
    #f99b4a 100%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

export const MeetBarText = styled.p`
    font-weight: 500;
    text-align: center;
    font-size: 1rem;
`

export const MeetBarFinish = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const MeetBarStatusText = styled.div<{ active: boolean }>`
    display: flex;
    font-size: 1rem;
    text-align: left;
    padding-left: 4px;
    color: red;

    ${({ active }) => {
        if (active) return 'color: green;'
    }}
`

export const MeetBarStatusCircle = styled.div<{ active: boolean }>`
    display: flex;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: red;

    ${({ active }) => {
        if (active) return 'background: green;'
    }}
`

export const MeetBarEndDate = styled.p`
    font-size: .75rem;
    font-weight: 500;
    color: gray;
    padding-right: .5rem;
    
`