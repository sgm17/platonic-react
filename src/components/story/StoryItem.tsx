import { StoryImage } from './StoryImage';
import { StoryAccountName, StoryItemContainer, StoryItemLink } from "./StoryStyles"
import { FC } from 'react';
import { University } from '../../ts/interfaces/University';
import { LastStoryIdsPerUniversity } from '../../ts/interfaces/Story';

export const StoryItem: FC<StoryItemProperties> = ({ first, last, university, maskedUniversitiesWithContentToSeeByTheUser }) => {
    return <StoryItemLink to={`/story/${university.id}`}>
        <StoryItemContainer first={first} last={last}>
            <StoryImage university={university} maskedUniversitiesWithContentToSeeByTheUser={maskedUniversitiesWithContentToSeeByTheUser} />
            <StoryAccountName>{university.simple}</StoryAccountName>
        </StoryItemContainer>
    </StoryItemLink>
}

type StoryItemProperties = {
    university: University,
    maskedUniversitiesWithContentToSeeByTheUser: number[]
    first: boolean,
    last: boolean,
}
