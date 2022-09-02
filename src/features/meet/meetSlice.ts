import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { PreferencesType } from "../../components/meet/MeetPreferences";
import { Meet } from "../../ts/interfaces/MeetItem";
import { createSearch, fetchMeets } from "./meetAPI";

interface MeetState {
    searching: boolean
    meets: Meet[]
    status: 'idle' | 'loading' | 'failed' | 'nodata'
}

const initialState: MeetState = {
    searching: false,
    meets: [],
    status: 'loading'
}

export const retrieveMeets = createAsyncThunk(
    'meets/fetchMeets',
    async (userId: number) => {
        const res = await fetchMeets(userId)
        return res.data
    }
)

export const postSearching = createAsyncThunk(
    'meets/createSearch',
    async (preferences: PreferencesType) => {
        const res = await createSearch(preferences)
        return res
    }
)

export const meetSlice = createSlice({
    name: 'meets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(retrieveMeets.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(retrieveMeets.fulfilled, (state, action) => {
                state.meets = action.payload

                if (action.payload.length === 0) {
                    state.status = 'nodata'
                    return
                }
                state.status = 'idle'
            })
            .addCase(retrieveMeets.rejected, (state) => {
                state.status = 'failed'
            })

            .addCase(postSearching.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(postSearching.fulfilled, (state, action) => {
                state.searching = true
                state.status = 'idle'
            })
    },
})

export const selectMeets = (state: RootState) => state.meets.meets
export const selectMeetsStateLoading = (state: RootState) => state.meets.status === "loading"
export const selectMeetsStateNoData = (state: RootState) => state.meets.status === "nodata"
export const selectMeetsStateSearching = (state: RootState) => state.meets.searching

export const meetsReducer = meetSlice.reducer