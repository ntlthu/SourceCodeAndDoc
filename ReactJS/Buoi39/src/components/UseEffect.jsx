//rfc
import React, { useEffect, useState } from 'react';
import ConUseEffect from './ConUseEffect';

//useEffect đảm nhận chức năng lifecycle của bên class component
export default function UseEffect() {

  let [number, setNumber] = useState(0);
  let [title, setTitle] = useState("hello");

  // tham số thứ hai của hook useEffect nếu không truyền thì sẽ chạy như didUpdate của rcc
  // còn ta truyền một mảng rỗng thì nó chạy như didMount ở rcc

  useEffect(() => {
    console.log("Hello");
  }, [])

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Change number</button>
      <h1>{title}</h1>
      <button onClick={() => setTitle("React")}>Change title</button>

      {number == 0 && <ConUseEffect />}
    </div>
  )
}
