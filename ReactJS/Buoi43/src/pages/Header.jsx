//rfc :react function component

import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <div >
      <ul className="nav nav-pills bg-dark">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
            Demo hook
          </a>
          <div className="dropdown-menu">
            <NavLink className="dropdown-item" to="/usestate">Demo useState</NavLink>
            <NavLink className="dropdown-item" to="/useeffect">Demo useEffect</NavLink>
            <NavLink className="dropdown-item" to="/usecallback">Demo useCallback</NavLink>
            <NavLink className="dropdown-item" to="/useref">Demo useRef</NavLink>
            <NavLink className="dropdown-item" to="/demoredux">Demo redux</NavLink>

            <NavLink className="dropdown-item" to="/chatapp">Chat app</NavLink>
            <NavLink className="dropdown-item" to="/democustom">Demo custom hook</NavLink>
          </div>
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
          <NavLink className="nav-link" to="/signup">Sign up</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/demologin">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/info">Thông tin cá nhân</NavLink>
        </li>

      </ul>


    </div>
  )
}
