import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { Chat } from "../../ts/interfaces/Chat"
import { fetchChats } from "./chatAPI"

interface ChatState {
    chats: Chat[],
    status: 'idle' | 'loading' | 'failed'
}

const initialState: ChatState = {
    chats: [],
    status: "idle"
}

export const retrieveChats = createAsyncThunk(
    'chats/fetchChats',
    async (myId: number) => {
        const res = await fetchChats(myId)
        return res.data
    }
)

export const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(retrieveChats.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(retrieveChats.fulfilled, (state, action) => {
                state.status = 'idle'
                state.chats = action.payload
            })
            .addCase(retrieveChats.rejected, (state) => {
                state.status = 'failed'
            })
    },
})

export const selectChats = (state: RootState) => state.chats.chats
export const selectStateChatsLoading = (state: RootState) => state.chats.status === 'loading'

export default chatSlice.reducer