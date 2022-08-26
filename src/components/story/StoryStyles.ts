import styled from "styled-components";

export const StoriesContainer = styled.div`
  display: flex;
  align-content: center;
  background-color: #fff;
  height: 7.4em;

  @media screen and (max-width: 768px){
    justify-content: center;
  }
`

export const StoryContainer = styled.div<{ first: boolean, last: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 1em 0.5em;
  justify-content: center;
  align-items: center;

  ${({ first }) => {
    if (first) return `margin-left: 2em;`;
  }}

${({ last }) => {
    if (last) return `margin-right: 2em;`;
  }}
`


export const StoryProfileContainer = styled.div`
  height: auto;
  width:60px;
  background: linear-gradient(
  200deg,
  #da3394 25%,
  #e03c67 50%,
  #f3753b 75%,
  #f99b4a 100%
  );
  padding: 2px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
`

export const StoryProfileIcon = styled.img`
  display: block;
  border-radius: 50%;
  border: 2px solid #fff;
  display: block;
  cursor: pointer;
  width: 100%;
  height: auto;
`

export const StoryAccountName = styled.span`
  font-size: 0.65em;
  margin: 0.4em;
  text-align: center;
`