import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {eventPreviewReducer} from "./event/preview";
import {eventOffersReducer} from "./offers/offers";

export const rootReducer = combineReducers({
    eventPreview: eventPreviewReducer,
    offers: eventOffersReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']