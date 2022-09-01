import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { HomeStory } from '../../ts/interfaces/Story'
import { fetchStories, postStory, PostStory } from './storyAPI'

interface StoryState {
    homeStory: HomeStory,
    status: 'idle' | 'loading' | 'failed' | 'stories' | 'nodata' | 'created'
}

const initialState: StoryState = {
    homeStory: {
        lastStoryIdsPerUniversity: [],
        stories: []
    },
    status: 'idle'
}

export const retrieveInitial = createAsyncThunk(
    'stories/fetchInitial',
    async () => {
        const res = await fetchStories()
        return res.data
    }
)
export const retrieveStories = createAsyncThunk(
    'stories/fetchStories',
    async (universityId: number) => {
        const res = await fetchStories(universityId)
        return res.data
    }
)

export const createStory = createAsyncThunk(
    'stories/postStory',
    async (story: PostStory) => {
        const res = await postStory(story)
        return res.data
    }
)

export const storySlice = createSlice({
    name: 'story',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(retrieveInitial.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(retrieveInitial.fulfilled, (state, action) => {
                state.homeStory.lastStoryIdsPerUniversity = action.payload.lastStoryIdsPerUniversity
                state.status = 'idle'
            })
            .addCase(retrieveInitial.rejected, (state) => {
                state.status = 'failed'
            })

            .addCase(retrieveStories.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(retrieveStories.fulfilled, (state, action) => {
                state.homeStory.lastStoryIdsPerUniversity = action.payload.lastStoryIdsPerUniversity
                state.homeStory.stories = action.payload.stories
                state.homeStory.university = action.payload.university

                if (state.homeStory.university === undefined &&
                    state.homeStory.stories.length === 0) {
                    state.status = 'nodata'
                    return
                }
                state.status = 'stories'
            })
            .addCase(retrieveStories.rejected, (state) => {
                state.status = 'failed'
            })

            .addCase(createStory.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(createStory.fulfilled, (state, action) => {
                state.homeStory.lastStoryIdsPerUniversity = [action.payload.lastStoryIdPerActualUniversity, ...state.homeStory.lastStoryIdsPerUniversity]
                state.homeStory.stories = [action.payload.story, ...state.homeStory.stories]
                state.status = 'created'
                console.log(state.status)
            })
            .addCase(createStory.rejected, (state) => {
                state.status = 'failed'
            })
    },
})

export const selectLastStoryIdsPerUniversity = (state: RootState) => state.stories.homeStory.lastStoryIdsPerUniversity
export const selectStories = (state: RootState) => state.stories.homeStory.stories
export const selectUniversity = (state: RootState) => state.stories.homeStory.university
export const selectStoriesStateLoading = (state: RootState) => state.stories.status === "loading"
export const selectStoriesStateIdle = (state: RootState) => state.stories.status === 'idle'
export const selectStoriesStateNoData = (state: RootState) => state.stories.status === "nodata"
export const selectStoriesCreated = (state: RootState) => state.stories.status === 'created'
export const selectStoriesStories = (state: RootState) => state.stories.status === 'stories'

export default storySlice.reducer