import React, { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { callSignUp } from '../../redux/reducers/userReducer';


const { Option } = Select;

export default function SignUp(props) {
   
    const dispatch = useDispatch();

    const onFinish = (values) => {

        dispatch(callSignUp(values));
        
    }

    return (
        <div className='container text-left mt-5'>
          
            <Form
                name="register"
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'Email không đúng định dạng !',
                        },
                        {
                            required: true,
                            message: 'Hãy nhập Email !',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Mật khẩu"
                    rules={[
                        {
                            required: true,
                            message: 'Hãy nhập mật khẩu !',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Nhập lại mật khẩu"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Mật khẩu không khớp',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Mật khẩu không khớp !'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="name"
                    label="Họ tên"
                    rules={[
                        {
                            required: true,
                            message: 'Hãy nhập họ tên',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="gender"
                    label="Giới tính"
                    rules={[
                        {
                            required: true,
                            message: 'Please select gender!',
                        },
                    ]}
                >
                    <Select placeholder="select your gender">
                        <Option value={1}>Nam</Option>
                        <Option value={0}>Nữ</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Điện thoại"
                    rules={[
                        {
                            required: true,
                            message: 'Hãy nhập số điện thoại',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Đăng ký
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
