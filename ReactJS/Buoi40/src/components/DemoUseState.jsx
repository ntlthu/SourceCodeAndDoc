//rfc: react function component
import React, { useState } from 'react';
import FuntionCon from './FuntionCon';

// Hook: state, lifecycle,...
export default function DemoUseState() {
  //state = {number : 0}

  //useState

  let [number, setNumber] = useState(0); // number, string, array, object, list object,...

  return (
    <div>
      <button onClick={() => setNumber(number - 1)} > - </button>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)} > + </button>

      <FuntionCon number={number} />
    </div>
  )
}
