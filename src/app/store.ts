import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import chatsReducer from '../features/chat/chatSlice';
import { meetsReducer } from '../features/meet/meetSlice';
import storiesReducer from '../features/story/storySlice';

export const store = configureStore({
  reducer: {
    chats: chatsReducer,
    stories: storiesReducer,
    meets: meetsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
