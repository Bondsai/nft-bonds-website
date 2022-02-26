import {AppDispatch} from "../store";
import {batchRequest} from "../../API/common";
import {getEventOfferWithNFT} from "../../solana/rpc/getEventOffer";
import {eventOffersSlice} from "./offers";
import {PublicKey} from "@solana/web3.js";

export const fetchOffers = (authority:  PublicKey,  indices: number[]) =>
    async (dispatch: AppDispatch) => {
        dispatch(eventOffersSlice.actions.toggleFetching(true))
        batchRequest(indices, (index) => getEventOfferWithNFT(authority, index))
            .then(result => dispatch(eventOffersSlice.actions.setOffers(result.values)))
            .finally(() => dispatch(eventOffersSlice.actions.toggleFetching(false)))
    }