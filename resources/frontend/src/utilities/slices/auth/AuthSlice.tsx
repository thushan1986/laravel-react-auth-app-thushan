import { createSlice } from "@reduxjs/toolkit";
import type { IAuthInitialState } from "../../types/slices/authSlice";
import { UserSignIn } from "../../api/auth/UserSignIn.ts";

const initialState: IAuthInitialState = {
    token: "",
    user_id: "",
    isAuthenticated: false,
    isLoading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(UserSignIn.pending, (state: IAuthInitialState) => {
            state.isLoading = true
        })
            .addCase(UserSignIn.fulfilled, (state:IAuthInitialState, payload) => {
                console.log(payload)
            })

        
    },
});

export default authSlice.reducer;
