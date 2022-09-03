import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { InstaStoryContainer } from "../components/instastory/InstaStoryStyles";
import { InstaStoryUniversity } from "../components/instastory/InstaStoryUniversity";
import { Loading } from "../components/loading/Loading";
import { selectStoriesStateLoading, selectStoriesStateIdle, selectStoriesCreated, selectStoriesStateNoData, selectLastStoryIdsPerUniversity, selectStories, selectUniversity, retrieveStories } from "../features/story/storySlice";
import { selectMyLastStoryIdsPerUniversity, selectOrderedUniversities, selectProfile } from "../features/user/userSlice";

export const InstaStory = () => {
    const { universityId } = useParams()
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    var initialUniversityId = Number(universityId)

    const [actualUniversityId, setActualUniversityId] = useState<number>(universityId !== undefined ? (isNaN(initialUniversityId) ? -1 : initialUniversityId) : -1)

    const loading = useAppSelector(selectStoriesStateLoading)
    const idle = useAppSelector(selectStoriesStateIdle)
    const nodata = useAppSelector(selectStoriesStateNoData)
    const lastStoryIdsPerUniversity = useAppSelector(selectLastStoryIdsPerUniversity)
    const stories = useAppSelector(selectStories)
    const university = useAppSelector(selectUniversity)

    const myId = useAppSelector(selectProfile)?.id
    const orderedUniversities = useAppSelector(selectOrderedUniversities)
    const myLatestStoriesId = useAppSelector(selectMyLastStoryIdsPerUniversity)

    if (actualUniversityId === -1) navigate('/home', { replace: true })

    useEffect(() => {
        dispatch(retrieveStories(actualUniversityId))
    }, [dispatch, actualUniversityId])


    if (loading || idle)
        return <Loading color="#fff" loading={loading || idle} backgroundColor="#000" />

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
            orderedUniversities={orderedUniversities}
            myLatestStoriesIds={myLatestStoriesId}
            myId={myId!}
        />
    </InstaStoryContainer>
}