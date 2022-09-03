import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { Loading } from "../components/loading/Loading"
import { MeetScroll } from "../components/meet/MeetScroll"
import { StoryScroll } from "../components/story/StoryScroll"
import { retrieveMeets, selectMeetsStateLoading } from "../features/meet/meetSlice"
import { retrieveInitial, selectLastStoryIdsPerUniversity, selectStoriesStateLoading } from "../features/story/storySlice"
import { selectMyLastStoryIdsPerUniversity, selectOrderedUniversities } from "../features/user/userSlice"
import { Container } from "../GlobalStyles"

const myId = 1

export const Home = () => {

    const dispatch = useAppDispatch()

    const storiesLoading = useAppSelector(selectStoriesStateLoading)
    const meetsLoading = useAppSelector(selectMeetsStateLoading)

    useEffect(() => {
        dispatch(retrieveInitial())
    }, [dispatch])

    useEffect(() => {
        dispatch(retrieveMeets(myId))
    }, [dispatch])

    const orderedUniversities = useAppSelector(selectOrderedUniversities)
    const myLatestStoriesIds = useAppSelector(selectMyLastStoryIdsPerUniversity)
    const apiLatestStoriesIds = useAppSelector(selectLastStoryIdsPerUniversity)

    if (storiesLoading && meetsLoading)
        return <Loading loading={storiesLoading && meetsLoading} />

    return <Container extraPaddingTop={'2em'}>
        <StoryScroll
            orderedUniversities={orderedUniversities}
            myLatestStoriesIds={myLatestStoriesIds}
            apiLatestStoriesIds={apiLatestStoriesIds} />
        <MeetScroll />
    </Container>
}