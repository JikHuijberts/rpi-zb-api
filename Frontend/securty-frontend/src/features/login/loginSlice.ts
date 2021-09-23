import {createSlice, createAsyncThunk, PayloadAction, bindActionCreators} from "@reduxjs/toolkit"
import { RootState } from "../../app/store";
import { API_URL } from "../../constants";


interface Login {
    email:string;
    password:string;
}

export interface LoginState {
    firstName: string;
    email: string;
    logged_in: boolean;
    isFetching: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorMessage: string;
}

const initialState: LoginState = {
    firstName: "",
    email: "",
    logged_in: false,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
}
export const loginAsync = createAsyncThunk(
    'user/login',
    async ({email,password}:Login, thunkAPI) => {
        try{
            const enEmail = encodeURIComponent(email)
            const enPassword = encodeURIComponent(password)
            const response = await fetch(API_URL + `/loginusername="${enEmail}"password="${enPassword}"`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            });
            let data = await response.json()
            console.log('response', data)
            if (response.status === 200){
                return data
            } else {
                thunkAPI.rejectWithValue(data)
            }
        }catch(e) {
            debugger
            console.log('Error', e.response.data);
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

export const signUpAsync = createAsyncThunk(
    'user/signup',
    async ({input}:any, thunkAPI) => {
        try {
            const response = await fetch(API_URL + "",{
                method: 'POST',
                headers:{
                    "Content-type": 'application/json'
                },
                body:JSON.stringify(input)
            })
            let data = await response.json()
            console.log('response',data)
            if (response.status === 200){
                return data
            } else{
                thunkAPI.rejectWithValue(data)
            }
        } catch(e){
            console.log('Error', e.message);
            thunkAPI.rejectWithValue(e);
        }
    }
)
export const loginSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        changeLogin:(state, action:PayloadAction<boolean>) =>{
            state.logged_in = action.payload
            return state
        },
        logout:(state, action:PayloadAction<string>)=>{
            state.logged_in = false
            return state
        },
        clearState:(state) =>{
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
      
            return state;
        }
    },
    extraReducers:(builder) => {
        builder.addCase(loginAsync.fulfilled, (state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isSuccess = true;
            state.email = payload.email;
            return state;
        })
        .addCase(loginAsync.rejected, (state, {payload}:any)=>{
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        })
        .addCase(loginAsync.pending, (state)=>{
            state.isFetching = true;
        })
        .addCase(signUpAsync.fulfilled, (state, {payload})=>{
            state.isSuccess = true
        })
        .addCase(signUpAsync.rejected, (state, {payload}:any)=>{
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        })
        .addCase(signUpAsync.pending, (state)=>{
            state.isFetching = true
        })
    }
})
export const { clearState } = loginSlice.actions;

export const loginSelector = (state: RootState) => state.user