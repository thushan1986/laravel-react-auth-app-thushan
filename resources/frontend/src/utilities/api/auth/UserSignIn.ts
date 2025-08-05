import axios from "axios";
import type { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ISignInState } from "../../types/signin/SignIn";

interface IUserSignInPayload {
    signDetails: ISignInState;
}

export const UserSignIn = createAsyncThunk<
    AxiosResponse<any> | undefined,
    IUserSignInPayload
>("auth/signIn", async ({signDetails}) => {
    console.log(signDetails)
    return axios.get("/sanctum/csrf-cookie").then(async () => {
        try {
           const response = await axios.post("api/sign-in", signDetails);

           return response

        } catch (error) {
            console.log(error);
        }
    });
});

// return await axios.get('/sanctum/csrf-cookie').then(res => {
//     const response = axios.post('api/sign-in', signDetails)
//
//     console.log(response)
//
// });
