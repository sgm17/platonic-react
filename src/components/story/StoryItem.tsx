import { StoryImage } from './StoryImage';
import { StoryAccountName, StoryItemContainer, StoryItemLink } from "./StoryStyles"
import { FC } from 'react';
import { University } from '../../ts/interfaces/University';

export const StoryItem: FC<StoryItemProperties> = ({ first, last, university }) => {
    return <StoryItemLink to={`/story/${university.id}`}>
        <StoryItemContainer first={first} last={last}>
            <StoryImage university={university} />
            <StoryAccountName>{university.simple}</StoryAccountName>
        </StoryItemContainer>
    </StoryItemLink>
}

type StoryItemProperties = {
    university: University,
    first: boolean,
    last: boolean,
}
