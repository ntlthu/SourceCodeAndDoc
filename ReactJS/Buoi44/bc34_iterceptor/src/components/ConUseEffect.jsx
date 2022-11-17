//rfc
import React, { useEffect, useState } from 'react';

export default function ConUseEffect() {

  // trả return trong hook useEffect thì tương ứng với hàm willUnmount của rcc

  let [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("con didmount")
    return (() => {
      console.log("con will unmount")
    })
  }, [number])

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Change number</button>
    </div>
  )
}
