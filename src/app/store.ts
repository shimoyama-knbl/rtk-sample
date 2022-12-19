import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { save, load } from 'redux-sessionstorage-simple';
import loadingReducer from '~/features/loading/loadingSlice';
import youtubeReducer from '~/features/youtube/youtubeSlice';

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    youtube: youtubeReducer,
  },
  preloadedState: load(),
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }).concat(save()),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
