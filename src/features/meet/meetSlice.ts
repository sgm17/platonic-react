import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Meet } from "../../ts/interfaces/MeetItem";
import { fetchMeets } from "./meetAPI";

interface MeetState {
    meets: Meet[]
    status: 'idle' | 'loading' | 'failed' | 'nodata'
}

const initialState: MeetState = {
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
    },
})

export const selectMeets = (state: RootState) => state.meets.meets
export const selectMeetsStateLoading = (state: RootState) => state.meets.status === "loading"
export const selectMeetsStateNoData = (state: RootState) => state.meets.status === 'nodata'

export const meetsReducer = meetSlice.reducer