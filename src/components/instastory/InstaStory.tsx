import { FC, useEffect, useState } from 'react';
import { InstaStoryContainer, InstaStoryLoadingContainer, InstaStoryUniversityContainer } from './InstaStoryStyles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { retrieveStories, selectLastStoryIdsPerUniversity, selectStories, selectStoriesCreated, selectStoriesStateIdle, selectStoriesStateLoading, selectStoriesStateNoData, selectUniversity } from '../../features/story/storySlice';
import Stories from 'react-insta-stories'
import { useNavigate, useParams } from 'react-router-dom';
import { maskUniversitiesWithContentToSeeByTheUser, nextUniversityId } from '../story/StoryScroll';
import { HomeStory, LastStoryIdsPerUniversity } from '../../ts/interfaces/Story'
import { myLatestStoriesIds } from '../../features/story/storyAPI';
import { ClipLoader } from 'react-spinners'
import { InstaSeeMore } from './InstaSeeMore';
import { InstaSeeMoreCollapsed } from './InstaSeeMoreCollapsed';
import { InstaStoryItem } from './InstaStoryItem';

type InstaStoryUniversity = {
    actualUniversityId: number,
    homeStory: HomeStory,
    setActualUniversityId: Function
}

export const myId = 1
export const myUniversityId = 35


export const InstaStoryUniversity: FC<InstaStoryUniversity> = ({ actualUniversityId, homeStory, setActualUniversityId }) => {
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
                const nextUniId = nextUniversityId(actualUniversityId, maskedActiveContent)

                setActualUniversityId(nextUniId)
            }}
            stories={
                homeStory.stories?.map((story) => {
                    const timestamp = new Date(story.createdAt)
                    const { university } = homeStory

                    return {
                        content: (props) => <InstaStoryItem props={props} universityStory={story} university={university} />,
                        seeMoreCollapsed: ({ toggleMore, action }) => <InstaSeeMoreCollapsed action={action} toggleMore={toggleMore} storyUserId={story.userId} />,
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

export const InstaStory = () => {
    const { universityId } = useParams()
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    var initialUniversityId = Number(universityId)

    const [actualUniversityId, setActualUniversityId] = useState<number>(universityId !== undefined ? (isNaN(initialUniversityId) ? -1 : initialUniversityId) : -1)

    const loading = useAppSelector(selectStoriesStateLoading)
    const idle = useAppSelector(selectStoriesStateIdle)
    const created = useAppSelector(selectStoriesCreated)
    const nodata = useAppSelector(selectStoriesStateNoData)
    const lastStoryIdsPerUniversity = useAppSelector(selectLastStoryIdsPerUniversity)
    const stories = useAppSelector(selectStories)
    const university = useAppSelector(selectUniversity)

    if (actualUniversityId === -1) navigate('/home', { replace: true })

    useEffect(() => {
        dispatch(retrieveStories(actualUniversityId))
    }, [dispatch, actualUniversityId])


    if (loading || idle)
        return <InstaStoryLoadingContainer>
            <ClipLoader loading={loading} color='#fff' size={'150px'} />
        </InstaStoryLoadingContainer>

    if (nodata)
        return <p style={{ paddingTop: '60px', color: '#000' }}>no data lol</p>


    return <InstaStoryContainer>
        <InstaStoryUniversity
            actualUniversityId={actualUniversityId}
            homeStory={{
                lastStoryIdsPerUniversity: lastStoryIdsPerUniversity,
                stories: stories,
                university: university
            }}
            setActualUniversityId={setActualUniversityId}
        />
    </InstaStoryContainer>
}