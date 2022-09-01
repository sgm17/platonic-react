import { Link } from "react-router-dom";
import styled from "styled-components";

export const StoryItemLink = styled(Link)`
  text-decoration: none;
  display: contents;
`

export const StoryItemContainer = styled.div<{ first: boolean, last: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 0 0.5em;

  ${({ first }) => {
    if (first) return `margin-left: 2em;`;
  }}

  ${({ last }) => {
    if (last) return `margin-right: 2em;`;
  }}
`

export const StoryImageContainer = styled.div<{ noContent: boolean }>`
  height: auto;
  width: 60px;
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

  ${({ noContent }) => {
    if (noContent) return `background: #ddd;`
  }}
`

export const StoryItemImage = styled.img<{ noContent: boolean }>`
  display: block;
  border-radius: 50%;
  border: 2px solid #fff;
  display: block;
  width: 100%;
  height: auto;
  background: #FCFCFC;
  aspect-ratio: 1;

  ${({ noContent }) => {
    if (noContent) return `border: 2px solid transparent; opacity: 70%;`
  }}
`

export const StoryProfileIconContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const StoryAccountName = styled.span`
  font-size: 0.65em;
  margin: 0.4em;
  text-align: center;
  color: #000;
`