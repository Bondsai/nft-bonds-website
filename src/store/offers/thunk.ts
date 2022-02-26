import {AppDispatch} from "../store";
import {batchRequest} from "../../API/common";
import {getEventOfferWithNFT} from "../../solana/rpc/getEventOffer";
import {eventOffersSlice} from "./offers";

export const fetchOffers = (eventAccount: string, indices: number[]) =>
    async (dispatch: AppDispatch) => {
        dispatch(eventOffersSlice.actions.toggleFetching(true))
        batchRequest(indices, (index) => getEventOfferWithNFT(eventAccount, index))
            .then(result => dispatch(eventOffersSlice.actions.setOffers(result.values)))
            .finally(() => dispatch(eventOffersSlice.actions.toggleFetching(false)))
    }