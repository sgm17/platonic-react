import { Scroll } from "../scroll/Scroll";
import { University } from "../../ts/interfaces/University";
import { sortUniversityStories } from '../leaflet/Leaflet'
import { StoryItem } from "./StoryItem";
import { LastStoryIdsPerUniversity } from "../../ts/interfaces/Story";


export const userUniversityCenter = [41.50613010080779, 2.103939945863225]

export const orderedUniversities: University[] = sortUniversityStories({
    userUniversity: userUniversityCenter,
})

export const nextUniversityId = (
    actualUniversityId: number,
    maskedUniversityWithContent: number[]) => {


    if (!maskedUniversityWithContent.includes(actualUniversityId)) return -1 // a university with all seen)

    const actualUniversityIndex = orderedUniversities.findIndex(({ id }) => id === actualUniversityId)

    return orderedUniversities.find((university, index) => {
        return index > actualUniversityIndex && maskedUniversityWithContent.includes(university.id)
    })?.id ?? -1
}

export const maskUniversitiesWithContentToSeeByTheUser = (myLastStoryIdsPerUniversity: LastStoryIdsPerUniversity[], apiLastStoryIdsPerUniversity: LastStoryIdsPerUniversity[], actualUniversityId?: number) => {
    const condition = apiLastStoryIdsPerUniversity.filter(({ lastStoryIdPerUniversity, universityId }) => {
        const myLastStoryId = myLastStoryIdsPerUniversity.find((lastStory) => lastStory.universityId === universityId)

        if (actualUniversityId === universityId) return true

        return myLastStoryId === undefined ? true : myLastStoryId.lastStoryIdPerUniversity < lastStoryIdPerUniversity
    })

    return condition.map((last) => last.universityId)
}

export const StoryScroll = () => {
    return (
        <Scroll height={'7.4em'}>
            {orderedUniversities.map((university, i) => {
                const first = i === 0
                const last = i === orderedUniversities.length - 1

                return <StoryItem
                    university={university}
                    first={first}
                    last={last} />
            })}
        </Scroll>
    )
}
