//rfc
import React, { useRef, useState } from 'react';

/*
  useRef: để cache giá trị của form không có validate và không load lại giá trị component
*/
export default function UseRef() {
  const [number, setNumber] = useState(0);
  // const [nhanVien, setNhanVien] = useState({ hoTen: "", email: "" });
  let nhanVien = useRef({ hoTen: "", email: "" });

  const handlChange = (event) => {
    let { id, value } = event.target;

    nhanVien.current[id] = value
    // setNhanVien({ ...nhanVien, [id]: value });

    console.log("onchange", nhanVien.current);
  }

  console.log("function", nhanVien.current);
  return (
    <div>
      họ tên: <input id="hoTen" onChange={handlChange} />
      <br />
      email: <input id="email" onChange={handlChange} />
      <br />
      <button onClick={() => setNumber(number + 1)}>Change number</button>
    </div>
  )
}
