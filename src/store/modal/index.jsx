import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        modal: true,
    },
    reducers: {
        open(state) {
            state.modal = true;
        },
        _remove(state) {
            state.modal = false;
        },
    }
})

export const { open, _remove } = modalSlice.actions
export default modalSlice.reducer