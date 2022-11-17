import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//lớp trừu tượng
export interface SanPham {
    id: number
    nameProduct: string
}

type typeState = {
    danhSach: SanPham[]
}

const initialState: typeState = {
    danhSach: [{ id: 1,nameProduct:"" }, { id: 2,nameProduct:"" }]
}

const rootReducer = createSlice({
    name: "rootReducer",
    initialState,
    reducers: {
        createSanPham: (state: typeState, { type, payload }: PayloadAction<SanPham>) => {
            
            state.danhSach.push(payload);
        }
    }
});

export const { createSanPham } = rootReducer.actions

export default rootReducer.reducer


