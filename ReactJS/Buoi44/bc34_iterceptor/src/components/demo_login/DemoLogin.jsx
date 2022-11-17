//rfc
import React, { useState } from 'react';
import { Button, Form, Input, notification } from 'antd';
import axios from 'axios';
import useRoute from '../../hooks/useRoute';
import { saveStringLocal } from '../../utils/config';
import { history } from '../../utils/history';
import { useDispatch } from 'react-redux';
import { callLogin } from '../../redux/reducers/userReducer';
import { USER_LOGIN } from '../../utils/constant';

export default function DemoLogin() {
    const { params, navigate, searchParams: [searchParams, setSearchParams] } = useRoute();

    let isLogin = localStorage.getItem(USER_LOGIN);
    let [reset, setReset] = useState(0);

    let dispatch = useDispatch();
    const onFinish = async (values) => {
        try {

            //destructering form
            let { email, password } = values;

            //dispatch redux thunk
            const result = await dispatch(callLogin({ email, password }));

            if (result.isError == true) {
                openNotificationWithIcon(result.message);
            }

        } catch {

        }
    };
    //useState handler 

    //notification login antd function
    const openNotificationWithIcon = (message) => {
        notification['error']({
            message: 'Thông báo !',
            description: message,
        });
    };

    return (
        <div className='container mt-5 text-left'>



            {isLogin ?
                <button className='btn btn-danger' onClick={() => {
                    setReset(reset + 1);
                    localStorage.removeItem(USER_LOGIN);
                }}>Logout</button>
                :
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 8,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy nhập ô này!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Hãy nhập ô này!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 8,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>}
        </div>
    );
}
