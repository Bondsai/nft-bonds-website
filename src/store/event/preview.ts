import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ImageTokenMetadata} from "../../API/solana/requests";

export interface EventPreviewState {
    tokens: ImageTokenMetadata[],
    fetching: boolean,
    from: number,
    limit: number
}


const initialState: EventPreviewState = {
    tokens: [],
    fetching: true,
    from: 0,
    limit: 12
}

export const eventPreviewSlice = createSlice({
    name: "/event/preview",
    initialState,
    reducers: {
        toggleFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },

        setTokens: (state, action: PayloadAction<ImageTokenMetadata[]>) => {
            state.tokens = state.tokens.concat(action.payload)
            state.from += state.limit
        },
        reset: () => initialState
    }
})

export const eventPreviewReducer = eventPreviewSlice.reducer