//rcc
import React, { Component } from 'react';

const axios = require('axios').default;

export default class DemoApi extends Component {

  state = {
    isLogin: false,
    dsShop: []
  }

  static getDerivedStateFromProps(newProps, currentState) {
    let login = localStorage.getItem("login");
    if (login && currentState.isLogin == false) {
      return { ...currentState, isLogin: true };
    }
  }

  componentDidMount() {

   let dsData = axios({
      method: 'GET',
      url: "https://shop.cyberlearn.vn/api/Product"
    }).then(result => this.setState({ dsShop: result.data.content }));
 
  }

  render() {
    let { isLogin, dsShop } = this.state;

    return (
      <div className='container flex flex-col items-center'>
        <div className=' w-80'>
          {isLogin == false ?
            <>
              {/* trạng thái chưa login */}
              <input id="email" className='form-control' placeholder='email' />
              <br />
              <input id="pass" className='form-control' placeholder='password' />
              <button className='btn btn-success' onClick={() => {
                let email = document.querySelector("#email").value;
                let password = document.querySelector("#pass").value;

                axios({
                  method: "POST",
                  url: "https://shop.cyberlearn.vn/api/Users/signin",
                  data: {
                    email,
                    password
                  }
                }).then(result => {
                  localStorage.setItem("login", JSON.stringify(result.data.content));
                  this.setState({ isLogin: true });
                }).catch(err => console.log(err))
              }}>Login</button>
            </>
            :
            <>
              {/* trạng thái đã login */}
              <button className='btn btn-danger' onClick={() => {
                localStorage.removeItem("login");
                this.setState({ isLogin: false });
              }}>Logout</button>
            </>

          }


        </div>
        <div className='col-12'>
          {isLogin == false ?
            <>
              {/* trạng thái chưa login */}
              <h1>Bạn phải login để xem sản phẩm</h1>
            </>
            :
            <>
              {/* trạng thái đã login */}
              <table className='table'>
                <tr>
                  <td>id</td>
                  <td>name</td>
                  <td>price</td>
                  <td>description</td>
                </tr>

                {
                  dsShop.map(item => {

                    return <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.description}</td>
                    </tr>
                  })
                }
              </table>
            </>

          }

        </div>
      </div >
    )
  }
}
