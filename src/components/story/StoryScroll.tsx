import { Scroll } from "../scroll/Scroll";
import { University } from "../../ts/interfaces/University";
import { StoryItem } from "./StoryItem";
import { LastStoryIdsPerUniversity } from "../../ts/interfaces/Story";
import { FC } from "react";

export const maskUniversitiesWithContentToSeeByTheUser = (myLastStoryIdsPerUniversity: LastStoryIdsPerUniversity[], apiLastStoryIdsPerUniversity: LastStoryIdsPerUniversity[], actualUniversityId?: number) => {
    const condition = apiLastStoryIdsPerUniversity.filter(({ lastStoryIdPerUniversity, universityId }) => {
        const myLastStoryId = myLastStoryIdsPerUniversity.find((lastStory) => lastStory.universityId === universityId)

        if (actualUniversityId === universityId) return true

        return myLastStoryId === undefined ? true : myLastStoryId.lastStoryIdPerUniversity < lastStoryIdPerUniversity
    })

    return condition.map((last) => last.universityId)
}

type StoryScrollPoperties = {
    orderedUniversities: University[],
    myLatestStoriesIds: LastStoryIdsPerUniversity[],
    apiLatestStoriesIds: LastStoryIdsPerUniversity[]
}

export const StoryScroll: FC<StoryScrollPoperties> = ({ orderedUniversities, myLatestStoriesIds, apiLatestStoriesIds }) => {

    const maskedUniversitiesWithContentToSeeByTheUser = maskUniversitiesWithContentToSeeByTheUser(myLatestStoriesIds, apiLatestStoriesIds)

    return (
        <Scroll height={'7.4em'}>
            {orderedUniversities.map((university, i) => {
                const first = i === 0
                const last = i === orderedUniversities.length - 1

                return <StoryItem
                    university={university}
                    first={first}
                    last={last}
                    maskedUniversitiesWithContentToSeeByTheUser={maskedUniversitiesWithContentToSeeByTheUser}
                />
            })}
        </Scroll>
    )
}
