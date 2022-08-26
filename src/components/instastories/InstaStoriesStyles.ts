import styled from "styled-components";
import Stories from 'react-insta-stories'
import { ReactInstaStoriesProps } from "react-insta-stories/dist/interfaces";

export const InstaStoriesContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000;
    background-color: rgba(0,0,0,.5);
    touch-action: pan-x pan-y;

    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InstaStoriesWrapper = styled(Stories)`
`