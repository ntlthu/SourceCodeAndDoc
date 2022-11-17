import React, { useState, useCallback, useMemo } from 'react';
import ConUseCallback from './ConUseCallback';

export default function UseCallback() {

  // giá trị cơ bản number, string, null, true, false
  let [like, setLike] = useState(1);
  let [number, setNumber] = useState(1);

  let getTitle = () => {
    return <h1>Hello react</h1>
  }
  let object = {
    id: 1,
    hoTen: "a"
  }

  const getTitleCallback = useCallback(getTitle, []);
  const getUseMemo = useMemo(() => object, []);

  return (
    <div className="m-5">
      Like: {like} ♥
      <br />
      <button style={{ cursor: 'pointer', color: 'red', fontSize: 35 }} onClick={() => {
        setLike(like + 1)
      }}>♥</button>
      <br />
      <br />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>number</button>
      <ConUseCallback like={like} getTitle={getTitleCallback} object={getUseMemo} />
    </div>
  )

}
