import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NftOfferResponse} from "../../solana/rpc/getEventOffer";

export interface EventOffersState {
    offers: NftOfferResponse[]
    fetching: boolean,
    hasMore: boolean
    from: number,
    limit: number
}

const initialState: EventOffersState = {
    offers: [],
    fetching: true,
    hasMore: true,
    from: 0,
    limit: 12
}

export const eventOffersSlice = createSlice({
    name: "/event/offers",
    initialState,
    reducers: {
        toggleFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },

        setOffers: (state, action: PayloadAction<NftOfferResponse[]>) => {
            state.offers = state.offers.concat(action.payload)
            if (action.payload.length < state.limit) {
                state.hasMore = false
            } else {
                state.from += state.limit
            }
        },
        reset: () => initialState
    }
})

export const eventOffersReducer = eventOffersSlice.reducer