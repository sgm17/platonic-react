import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { sortUniversityStories } from "../../components/leaflet/Leaflet";
import { LastStoryIdsPerUniversity } from "../../ts/interfaces/Story";
import { University } from "../../ts/interfaces/University";
import { User } from "../../ts/interfaces/User";
import { fetchProfile } from "./userAPI";

interface UserState {
    myLastStoryIdsPerUniversity: LastStoryIdsPerUniversity[],
    myGivenLikes: number[],
    myGivenReports: number[]

    user?: User,

    orderedUniversities: University[],

    status: 'idle' | 'loading' | 'failed'
}

const initialState: UserState = {
    myLastStoryIdsPerUniversity: [],
    myGivenLikes: [],
    myGivenReports: [],
    orderedUniversities: [],
    status: 'idle'
}

export const retrieveProfile = createAsyncThunk(
    'user/fetchProfile',
    async (token: string) => {
        const res = await fetchProfile(token)
        return res.data
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(retrieveProfile.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(retrieveProfile.fulfilled, (state, action) => {
                state.myLastStoryIdsPerUniversity = myLatestStoriesIds
                state.myGivenLikes = myGivenLikes
                state.myGivenReports = myGivenReports

                state.user = action.payload.user

                state.orderedUniversities = sortUniversityStories({
                    userUniversity: action.payload.user.center
                })

                state.status = 'idle'
            })
            .addCase(retrieveProfile.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

const myGivenLikes = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const myGivenReports = [12, 14, 16, 18, 20]

const myLatestStoriesIds: LastStoryIdsPerUniversity[] = [
    {
        universityId: 35,
        lastStoryIdPerUniversity: 4
    }
]


export const selectProfile = (state: RootState) => state.user.user
export const selectProfileNotUndefined = (state: RootState) => state.user.user !== undefined
export const selectUserStateLoading = (state: RootState) => state.user.status === "loading"
export const selectOrderedUniversities = (state: RootState) => state.user.orderedUniversities
export const selectMyLastStoryIdsPerUniversity = (state: RootState) => state.user.myLastStoryIdsPerUniversity
export default userSlice.reducer