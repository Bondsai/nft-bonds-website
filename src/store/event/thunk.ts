import {AppDispatch} from "../store";
import {batchRequest} from "../../API/common";
import {getNFT} from "../../solana/requests";
import {eventPreviewSlice} from "./preview";
import {Network} from "../../solana/core/program";
import {getEvent} from "../../solana/rpc/getEvent";

export const fetchEventData = (userAccount: string) =>
    async (dispatch: AppDispatch) => {
        dispatch(eventPreviewSlice.actions.toggleFetching(true))
        getEvent(userAccount)
            .then(e => dispatch(eventPreviewSlice.actions.setEvent(e)))
            .finally(() => dispatch(eventPreviewSlice.actions.toggleFetching(false)))
    }

