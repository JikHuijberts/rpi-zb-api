import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"
// import { API_URL } from "../../constants";


// export interface Login {
//     email: string;
//     password: string;
// }

// export interface LoginState {
//     email: string;
//     password: string;
//     status: 'idle' | 'loading' | 'failed' | 'error';
// }
// const initialState: LoginState = {
//     email: "",
//     password: "",
//     status: 'idle'
// }

// export const loginAsync = createAsyncThunk<Login>(
//     'user/login',
//     async (login:Login) => {
//         const enEmail = encodeURIComponent(login.email)
//         const enPassword = encodeURIComponent(login.password)
//         const response = await fetch(API_URL + `loginusername="${enEmail}"password="${enPassword}"`, {
//             method: 'POST',
//             headers:{
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         });
//         return response
//     }
// )

// export const loginSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers:{
//         changeEmail:(state, action: PayloadAction<string>) =>{
//             state.email = action.payload
//         },
//         changePassword:(state, action: PayloadAction<string>) =>{
//             state.password = action.payload
//         }
//     },
//     extraReducers: (builder) =>{
//         builder
//         .addCase(loginAsync.pending, (state) => {
//             state.status = 'loading';
//         })
//         .addCase(loginAsync.fulfilled, (state,action)=>{

//         })
//     },
// })

// export const {changeEmail, changePassword} = loginSlice.actions

