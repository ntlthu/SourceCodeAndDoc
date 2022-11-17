import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SanPham {
    id: number
}

type typeState = {
    danhSach: SanPham[]
}

const initialState: typeState = { 
    danhSach: [{ id: 1 }, { id: 2 }] 
};

const rootReducer = createSlice({
    name: "rootReducer",
    initialState,
    reducers: {
        getData: (state: typeState, { type, payload }: PayloadAction<SanPham>)  => {
            let data: SanPham[] = state.danhSach;
            data.push(payload);
        }
    }
});

export const { getData } = rootReducer.actions

export default rootReducer.reducer