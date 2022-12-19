import { createSlice, isFulfilled, isPending, isRejected, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

export interface loadingState {
    show: boolean;
}

const initialState: loadingState = {
    show: false,
};

export const isAxiosError = (error: any): error is AxiosError => {
    if (!error) return false; 
    return !!error.isAxiosError;
}

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        show: (state) => {
            state.show = true;
        },
        hide: (state) => {
            state.show = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(isPending, (state, action) => {
                state.show = true;
            })
            .addMatcher(isFulfilled, (state, action) => {
                const response: any = action.payload;
                console.log("fulfilled", action);
                if (isAxiosError(response)) {
                    alert(response.message);
                }
                state.show = false;
            })
            .addMatcher(isRejected, (state, action) => {
                console.log("rejected", action);
                const response: any = action.payload;
                if (isAxiosError(response)) {
                    alert(response.message);
                }
                else if (action?.error?.message) {
                    alert(action.error.message);
                }
                state.show = false;
            })
    }
});

export const { show, hide } = loadingSlice.actions;

export default loadingSlice.reducer;



