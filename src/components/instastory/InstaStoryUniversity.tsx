import { FC, useEffect, useState } from 'react';
import { InstaStoryUniversityContainer } from './InstaStoryStyles';
import Stories from 'react-insta-stories'
import { maskUniversitiesWithContentToSeeByTheUser } from '../story/StoryScroll';
import { HomeStory, LastStoryIdsPerUniversity } from '../../ts/interfaces/Story'
import { InstaSeeMore } from './InstaSeeMore';
import { InstaSeeMoreCollapsed } from './InstaSeeMoreCollapsed';
import { InstaStoryItem } from './InstaStoryItem';
import { University } from '../../ts/interfaces/University';

type InstaStoryUniversity = {
    actualUniversityId: number,
    homeStory: HomeStory,
    setActualUniversityId: Function,
    orderedUniversities: University[],
    myLatestStoriesIds: LastStoryIdsPerUniversity[],
    myId: number
}

export const InstaStoryUniversity: FC<InstaStoryUniversity> = ({ actualUniversityId, homeStory, setActualUniversityId, orderedUniversities, myLatestStoriesIds, myId }) => {
    const [width, setWidth] = useState<number>(window.innerWidth)
    const isMobile = width <= 768

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const [myLastUniversitiesPerId, setMyLastUniversitiesPerId] = useState<LastStoryIdsPerUniversity[]>(myLatestStoriesIds)

    const uniId = homeStory.university?.id

    return <InstaStoryUniversityContainer>
        <Stories
            height={'100%'}
            width={isMobile ? '100%' : undefined}
            defaultInterval={1000}
            onStoryStart={(s: any, st: any) => {

                if (uniId === undefined) return
                const { id } = homeStory.stories[s]

                setMyLastUniversitiesPerId((pastState: LastStoryIdsPerUniversity[]) => {
                    const index = pastState.findIndex(({ universityId }) => universityId === uniId)

                    if (index === -1) {
                        return [{ universityId: uniId, lastStoryIdPerUniversity: id }]
                    } else {
                        return [{ universityId: uniId, lastStoryIdPerUniversity: id > pastState[index].lastStoryIdPerUniversity ? id : pastState[index].lastStoryIdPerUniversity }, ...pastState]
                    }

                })
            }}
            onAllStoriesEnd={(s: any, st: any) => {
                const maskedActiveContent = maskUniversitiesWithContentToSeeByTheUser(myLastUniversitiesPerId, homeStory.lastStoryIdsPerUniversity, actualUniversityId)
                const nextUniId = nextUniversityId(actualUniversityId, maskedActiveContent, orderedUniversities)

                setActualUniversityId(nextUniId)
            }}
            stories={
                homeStory.stories?.map((story) => {
                    const timestamp = new Date(story.createdAt)
                    const { university } = homeStory

                    return {
                        content: (props) => <InstaStoryItem props={props} universityStory={story} university={university} myId={myId} />,
                        seeMoreCollapsed: ({ toggleMore, action }) => <InstaSeeMoreCollapsed action={action} toggleMore={toggleMore} storyUserId={story.userId} myId={myId} />,
                        seeMore: () => <InstaSeeMore />,
                        header: {
                            heading: `${story.username} ${timestamp.getDate().toTimeDigit()}/${timestamp.getMonth().toTimeDigit()} ${timestamp.getHours().toTimeDigit()}:${timestamp.getMinutes().toTimeDigit()}`,
                            subheading: `${university?.parentName ? `${university?.parentName}, ${university?.name}` : university?.name} ${university?.acronym ? `(${university?.acronym})` : ''}`,
                            profileImage: story.profileImage
                        },
                    }
                })
            }

        />
    </InstaStoryUniversityContainer>
}

const nextUniversityId = (
    actualUniversityId: number,
    maskedUniversityWithContent: number[],
    orderedUniversities: University[]) => {

    if (!maskedUniversityWithContent.includes(actualUniversityId)) return -1 // a university with all seen)

    const actualUniversityIndex = orderedUniversities.findIndex(({ id }) => id === actualUniversityId)

    return orderedUniversities.find((university, index) => {
        return index > actualUniversityIndex && maskedUniversityWithContent.includes(university.id)
    })?.id ?? -1
}
