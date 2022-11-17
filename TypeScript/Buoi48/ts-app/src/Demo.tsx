//rcc
//rfc
//tsrcc
//tsrfc
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import { createSanPham, SanPham } from './redux/reducers/rootReducer';
import FacebookLogin from 'react-facebook-login';

type Props = {
    number?: number
}

export default function Demo({ number }: Props) {

    let [like, setLike] = useState<number>(0);

    let sanPham: SanPham[] = useSelector((state: RootState) => state.rootReducer.danhSach);

    // let sanPham: SanPham[] = useSelector((state: RootState) => state.rootReducer.danhSach);

    let dispatch: ReturnType<typeof useDispatch> = useDispatch();

    const responseFacebook = (response: any): void => {
        console.log(response);
    }

    return (
        <div>
            {sanPham.map(item => <h1>{item.id}</h1>)}

            <button onClick={(): void => {
                dispatch(createSanPham({ id: 3, nameProduct: "hello" }))
            }}>CLick</button>

            <FacebookLogin
                appId="917988649581251"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook} />
        </div>
    )
}