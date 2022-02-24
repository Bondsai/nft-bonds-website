import {AppDispatch} from "../store";
import {batchRequest} from "../../API/common";
import {getNFT} from "../../API/solana/requests";
import {eventPreviewSlice} from "./preview";

export const fetchEventTokens = (tokenIDs: string[]) =>
    async (dispatch: AppDispatch) => {
        dispatch(eventPreviewSlice.actions.toggleFetching(true))
        batchRequest(tokenIDs, getNFT)
            .then(result => dispatch(eventPreviewSlice.actions.setTokens(result.values)))
            .finally(() => dispatch(eventPreviewSlice.actions.toggleFetching(false)))
    }

