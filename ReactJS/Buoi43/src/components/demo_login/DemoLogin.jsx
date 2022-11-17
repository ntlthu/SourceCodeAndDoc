//rfc
import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import useRoute from '../../hooks/useRoute';
import { saveStringLocal } from '../../utils/config';

export default function DemoLogin() {
    const { params, navigate, searchParams: [searchParams, setSearchParams] } = useRoute();

    let isLogin = localStorage.getItem("user");
    let [reset, setReset] = useState(0);
    const onFinish = (values) => {
        //destructering form
        let { email, password } = values;

        axios({
            method: "POST",
            url: "https://shop.cyberlearn.vn/api/Users/signin",
            data: {
                email,
                password
            }
        }).then(result => {

            saveStringLocal("user", result.data.content.accessToken);

            // setReset(reset + 1);
            // history.push("/danhsachgiay")
            // this.props.history.push("/danhsachgiay")

            return navigate("/danhsachgiay");
        });
    };
    //useState handler 
    return (
        <div className='container mt-5 text-left'>
            {isLogin ?
                <button className='btn btn-danger' onClick={() => {
                    setReset(reset + 1);
                    localStorage.removeItem("user");
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
