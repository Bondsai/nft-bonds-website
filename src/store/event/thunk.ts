import {AppDispatch} from "../store";
import {eventPreviewSlice} from "./preview";
import {getEvent} from "../../solana/rpc/getEvent";

export const fetchEventData = (userAccount: string) =>
    async (dispatch: AppDispatch) => {
        dispatch(eventPreviewSlice.actions.toggleFetching(true))
        getEvent(userAccount)
            .then(e => dispatch(eventPreviewSlice.actions.setEvent(e)))
            .finally(() => dispatch(eventPreviewSlice.actions.toggleFetching(false)))
    }

