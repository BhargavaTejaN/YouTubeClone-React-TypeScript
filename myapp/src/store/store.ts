import { configureStore } from "@reduxjs/toolkit";
import youtubeSlice from './youtubeSlice'


export const store = configureStore({
    reducer:{
        youTubeApp : youtubeSlice,
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

// refer pointsToKnow.txt file for the above 2 lines explanation and use case
