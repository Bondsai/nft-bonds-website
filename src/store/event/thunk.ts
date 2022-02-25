import {AppDispatch} from "../store";
import {batchRequest} from "../../API/common";
import {getNFT} from "../../API/solana/requests";
import {eventPreviewSlice} from "./preview";
import {Network} from "../../API/solana/core";

export const fetchEventTokens = (tokenIDs: string[], network: Network = Network.Mainnet) =>
    async (dispatch: AppDispatch) => {
        dispatch(eventPreviewSlice.actions.toggleFetching(true))
        batchRequest(tokenIDs, tokenId => getNFT(tokenId, network))
            .then(result => dispatch(eventPreviewSlice.actions.setTokens(result.values)))
            .finally(() => dispatch(eventPreviewSlice.actions.toggleFetching(false)))
    }

