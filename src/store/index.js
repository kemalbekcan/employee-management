import {configureStore} from '@reduxjs/toolkit'
import authSlice from "@/store/auth";

export const store = configureStore({
    reducer: {
        auth: authSlice,
    },
})