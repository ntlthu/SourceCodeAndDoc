import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callGetProfile } from '../../redux/reducers/userReducer';
import { getStringLocal } from '../../utils/config';
import { USER_LOGIN } from '../../utils/constant';

export default function () {
    let dispatch = useDispatch();
    let infoUser = useSelector(state => state.userReducer.infoUser);
    
    let userLocalStorage = getStringLocal(USER_LOGIN);

    useEffect(() => {

        //redux thunk
        dispatch(callGetProfile);
    }, [])


    return (
        <div>
            {userLocalStorage ?
                <h1>{infoUser.name}</h1>
                :
                <h1>Chưa đăng nhập</h1>
            }
        </div>
    )
}
