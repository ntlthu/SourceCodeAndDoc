//rcc
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DemoRouter extends Component {
  render() {
    return (
      <div>
        <NavLink className="text-3xl" to="/">Demo car</NavLink>
        <NavLink className="text-3xl" to="/xucxac">Demo xuc xac</NavLink>
        <NavLink className="text-3xl" to="/quanly">Demo quan ly nhan vien</NavLink>
      </div>
    )
  }
}
