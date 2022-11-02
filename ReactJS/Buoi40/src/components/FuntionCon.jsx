//rfc
import React, { useState } from 'react'

// truyền props ở tham số của hàm component
export default function FuntionCon(props) {

  let [color, setColor] = useState("./CarBasic/products/black-car.jpg");
  
  return (
    <div>
      <img width="500px" src={color} />
      <p></p>
      <img
        onClick={() => setColor("./CarBasic/products/black-car.jpg")} width="150px" src="./CarBasic/icons/icon-black.jpg" />

      <img onClick={() => setColor("./CarBasic/products/red-car.jpg")} width="150px" src="./CarBasic/icons/icon-red.jpg" />

      <img onClick={() => setColor("./CarBasic/products/silver-car.jpg")} width="150px" src="./CarBasic/icons/icon-silver.jpg" />

      <img onClick={() => setColor("./CarBasic/products/steel-car.jpg")} width="150px" src="./CarBasic/icons/icon-steel.jpg" />

    </div>
  )
}
