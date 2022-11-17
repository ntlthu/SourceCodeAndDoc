//rfc :react function component

import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import DemoLogin from '../components/demo_login/DemoLogin';
import SignUp from '../components/quan_ly_user/SignUp';
import ModalHoc from '../hoc/ModalHoc';

export default function Header() {
  const navigate = useNavigate();
  // const WrapLoginModal = ModalHoc(<DemoLogin />,"Đăng nhập");
  // const WrapSignUpModal = ModalHoc(<SignUp />,"Đăng ký");

  return (
    <div >
      {/* header */}
      <ul className="nav nav-pills bg-dark">
        <li>
          {/* {WrapLoginModal()} */}
          <ModalHoc lbButton="Đăng nhập"
            Component={<DemoLogin />}
          />
        </li>
        <li>
          {/* {WrapSignUpModal()} */}
          <ModalHoc lbButton="Đăng ký"
            Component={<SignUp />}
          />
        </li>
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
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Sign up</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/demologin">Login</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/info">Thông tin cá nhân</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/demoformik">Demo formik</NavLink>
        </li>
      </ul>

      {/* content */}
      <Outlet />

      {/* footer */}
      <h1>Đây là footer</h1>
    </div>
  )
}
