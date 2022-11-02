import React, { useState } from 'react';
import { useCookie, useDebounce } from 'react-use';

export default function DemoCustomHook() {
    const [state, setState] = useState('Typing stopped');
    const [val, setVal] = useState('');
    const [debouncedValue, setDebouncedValue] = useState('');
  
    const [, cancel] = useDebounce(
      () => {
        setState('Typing stopped');
        setDebouncedValue(val);
      },
    500,
      [val]
    );
  
    return (
      <div>
        <input
          type="text"
          value={val}
          placeholder="Debounced input"
          onChange={({ currentTarget }) => {
            setState('Waiting for typing to stop...');
            setVal(currentTarget.value);
          }}
        />
        <div>{state}</div>
        <div>
          Debounced value: {debouncedValue}
          <button onClick={cancel}>Cancel debounce</button>
        </div>
      </div>
    );
}
