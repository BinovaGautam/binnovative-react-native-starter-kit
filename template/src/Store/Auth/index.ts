import { SignInResponse } from '@/ApiServices';
import { createSlice } from '@reduxjs/toolkit'

export interface AuthReducerProps {
    isLoggedIn: boolean;
    user : SignInResponse | null;
}

const initialObj : AuthReducerProps = {
    isLoggedIn: false,
    user: null
}

const slice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: false, user: null },
    reducers: {
        loginReducer: (state, { payload }) => {
            state.isLoggedIn = true;
            state.user = payload;
        },
        updateProfileReducer: (state, { payload }) => {
            state.user = { ...state.user, ...payload, isFirstLogin: false }
        },
        logoutReducer: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        }
    }


})

export const { loginReducer, logoutReducer, updateProfileReducer } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: any) => state.auth.user
export const selectCurrentToken = (state: any) => state.auth.user?.access_token

