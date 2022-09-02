import { FC, useEffect } from "react"
import ClipLoader from "react-spinners/ClipLoader"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { MeetScroll } from "../components/meet/MeetScroll"
import { StoryScroll } from "../components/story/StoryScroll"
import { retrieveMeets, selectMeetsStateLoading } from "../features/meet/meetSlice"
import { retrieveInitial, retrieveStories, selectStoriesStateLoading } from "../features/story/storySlice"
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
        return <div style={{ height: '100vh', width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
            <ClipLoader loading={storiesLoading && meetsLoading} color='#000' size={'150px'} />
        </div>

    return <Container extraPaddingTop={'2em'}>
        <StoryScroll />
        <MeetScroll />
    </Container>
}