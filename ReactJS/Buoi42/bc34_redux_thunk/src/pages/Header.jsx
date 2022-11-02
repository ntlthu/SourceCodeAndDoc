//rfc :react function component

import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

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
        <li className="nav-item">
          <NavLink className="nav-link" to="/danhsachgiay">Danh sách giày</NavLink>
        </li>
        <li>
          <div className="form-inline">
            <input id="text-search" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => {
              let textSearch = document.querySelector("#text-search").value;
              return navigate(`/danhsachgiay?word=${textSearch}`);
            }}>Search</button>
          </div>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/democustom">Demo custom hook</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/demologin">Login</NavLink>
        </li>
      </ul>


    </div>
  )
}
