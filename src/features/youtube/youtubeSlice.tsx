import { createAsyncThunk, createSlice, isFulfilled } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import * as ApiClient from '~/app/apiClient';
const axiosJsonpAdapter = require('axios-jsonp');

export interface youtubeState {
  get: boolean;
  items: ModelYtbItems[];
}

export interface ModelYtbItems {
  kind: string;
  etag: string;
  id: {
    kind: string;
    channelId?: string;
    videoId?: string;
  };
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: ModelThumbnail;
      medium: ModelThumbnail;
      high: ModelThumbnail;
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: Date;
  };
}

interface ModelThumbnail {
  url: string;
  width?: number;
  height?: number;
}

const initialState: youtubeState = {
  get: false,
  items: [],
};

export const getSearchAsync = createAsyncThunk(
  '/get/youtube',
  async (query: string) => {
    const { data } = await ApiClient.json.get(
      'https://www.googleapis.com/youtube/v3/search',
      {
        adapter: axiosJsonpAdapter,
        params: {
          part: 'snippet',
          q: query,
          maxResults: '10',
          key: 'AIzaSyD9t7HtC-DkvAEMJQ7b2CqAt9wfEvjQeTM',
          // sortOrder: 'DESC'
        },
      }
    );
    return data;
  }
);

export const youtubeSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(isFulfilled, (state, action) => {
      const response: any = action.payload;
      state.get = true;
      if (response?.items) {
        state.items = response.items;
      }
    });
  },
});

// export const { show, hide } = youtubeSlice.actions;

export default youtubeSlice.reducer;
