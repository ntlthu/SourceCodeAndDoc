//rxslice
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    danhSachGiay: []
}

const productReducer = createSlice({
    name: "productReducer",
    initialState,
    reducers: {
        addProduct: (state, { type, payload }) => {
            // let danhSachGiay = [...state.danhSachGiay]
            state.danhSachGiay = payload;
            //return {...state, danhSachGiay}
        }
    }
});

export const { addProduct } = productReducer.actions

export default productReducer.reducer

//closure function
export const callApiGiay = (keyWord) => async (dispatch) => {
    const apiGiay = await axios({
        method: "GET",
        url: `https://shop.cyberlearn.vn/api/Product?keyword=${keyWord}`
    })

    dispatch(addProduct(apiGiay.data.content));
}