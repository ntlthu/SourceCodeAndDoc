//rfc: react function component
import React, { useState } from 'react';
import FuntionCon from './FuntionCon';
import { useFormik } from 'formik';

// Hook: state, lifecycle,...
export default function DemoUseState() {
  //state = {number : 0}

  //useState

  let [number, setNumber] = useState(0); // number, string, array, object, list object,...

  const formik = useFormik({
    initialValues: {
      email: ''
    }, onSubmit: (values) => {

    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
