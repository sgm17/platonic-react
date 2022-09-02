import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { Loading } from "../components/loading/Loading"
import { MeetScroll } from "../components/meet/MeetScroll"
import { StoryScroll } from "../components/story/StoryScroll"
import { retrieveMeets, selectMeetsStateLoading } from "../features/meet/meetSlice"
import { retrieveInitial, selectStoriesStateLoading } from "../features/story/storySlice"
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


    if (storiesLoading && meetsLoading)
        return <Loading loading={storiesLoading && meetsLoading} />

    return <Container extraPaddingTop={'2em'}>
        <StoryScroll />
        <MeetScroll />
    </Container>
}