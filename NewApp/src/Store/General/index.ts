import { GeneralReducerProps } from '@/Types/Generaltypes';
import { createSlice } from '@reduxjs/toolkit'

const initialObj: GeneralReducerProps = {
    alertObj : null,
    imagesObj: null,
    isLoading : false,
    
}

const slice = createSlice({
    name: 'general',
    initialState: initialObj,
    reducers: {
        showImgsPreview : (state, { payload }) => {
            state.imagesObj = payload;
        },
        showAlert : (state, { payload }) => {
            state.alertObj = payload;
        },
        hideAlert : (state) => {
            state.alertObj = null;
        },
        hideImgsPreview : (state) => {
            state.imagesObj = null;
        },
        setLoading : (state, { payload }) => {
            state.isLoading = payload;
        },
        setDashData : (state, { payload }) => {
            state.dashData = payload;
        },
        clearDashData : (state) => {
            state.dashData = undefined;
        }
    }


})

export const { showImgsPreview, showAlert, hideImgsPreview , hideAlert ,setLoading,setDashData , clearDashData } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: any) => state.auth.user
export const selectCurrentToken = (state: any) => state.auth.user?.access_token

