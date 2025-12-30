import {configureStore} from "@reduxjs/toolkit"
import BookReducer from "./BookSlice"

export const Store = configureStore(
    {
        devTools:true,
        reducer:{
            cart : BookReducer
        }
    }
)