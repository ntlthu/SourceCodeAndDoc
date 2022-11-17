//rxslice

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getStringLocal, removeLocal } from '../../utils/config';

const initialState = {
    infoUser: {}
}

const userReducer = createSlice({
    name: "userreducer",
    initialState,
    reducers: {
        getProfile: (state, { type, payload }) => {
            state.infoUser = payload;
        }
    }
});

export const { getProfile } = userReducer.actions

export default userReducer.reducer

export const callGetProfile = async (dispatch) => {
    try {
        const token = getStringLocal("user");
        const apiGetProfile = await axios({
            method: "POST",
            url: "https://shop.cyberlearn.vn/api/Users/getProfile",
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
       
        dispatch(getProfile(apiGetProfile.data.content));
        
    }catch(err){
        //xóa localStorage
        removeLocal("user");
    }
}

//closure function
export const callSignUp = (userSignUp) => async (dispatch) => {
    try {
        const apiSignUp = await axios({
            method: "POST",
            url: "https://shop.cyberlearn.vn/api/Users/signup",
            data: userSignUp
        })
        console.log(apiSignUp);
        // alert("Đăng ký thành công");
        // đẩy qua trang login

    } catch (err) {
        alert("Không đăng ký được !");
    }
}