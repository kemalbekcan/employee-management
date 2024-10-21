import {configureStore} from '@reduxjs/toolkit'
import authSlice from "@/store/auth";
import modalSlice from "@/store/modal"

export const store = configureStore({
    reducer: {
        auth: authSlice,
        modal: modalSlice
    },
})