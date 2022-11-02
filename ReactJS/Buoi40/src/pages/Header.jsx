//rfc :react function component

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div >
      <ul className="nav nav-pills bg-dark">
        <li className="nav-item">
          <NavLink className="nav-link" to="/usestate">Demo useState</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/useeffect">Demo useEffect</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/usecallback">Demo useCallback</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/useref">Demo useRef</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/demoredux">Demo redux</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/chatapp">Chat app</NavLink>
        </li>
      </ul>

    </div>
  )
}
