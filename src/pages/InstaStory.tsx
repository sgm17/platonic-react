import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { InstaStoryLoadingContainer, InstaStoryContainer } from "../components/instastory/InstaStoryStyles";
import { InstaStoryUniversity } from "../components/instastory/InstaStoryUniversity";
import { selectStoriesStateLoading, selectStoriesStateIdle, selectStoriesCreated, selectStoriesStateNoData, selectLastStoryIdsPerUniversity, selectStories, selectUniversity, retrieveStories } from "../features/story/storySlice";

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