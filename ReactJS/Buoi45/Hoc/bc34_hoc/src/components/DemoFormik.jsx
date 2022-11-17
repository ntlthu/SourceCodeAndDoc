import React from 'react';
import { useFormik } from 'formik';
export default function DemoFormik() {

    const formik = useFormik({
        initialValues: {
            email:"",
            hoTen:""
        },

        onSubmit: (values) => {
            console.log(values)
        }
    });
    //nhanVien[name] = event.target.value
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input name="email" onChange={formik.handleChange} />
                <br />
                <input name="hoTen" onChange={formik.handleChange} />
                <br />
                <button >Submit</button>
            </form>
        </div>
    )
}
