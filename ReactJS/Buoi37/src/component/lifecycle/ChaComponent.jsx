//rcc
import React, { Component } from 'react'
import ConComponent from './ConComponent';

export default class ChaComponent extends Component {

  // constructor() {
  //   super()
  //   console.log("constructor");
  // }

  // // giá trị props mới
  // // giá trị state hiện tại của component
  // static getDerivedStateFromProps(newProps, currentState) {
  //   console.log("getDerivedStateFromProps");

  // }

  // //giá trị props mới 
  // //giá trị state mới
  // shouldComponentUpdate(newProps, newState) {
  //   console.log("shouldComponentUpdate");
  //   return true;
  // }

  state = {
    number: 1,
    sub: 1
  }

  render() {
    //console.log("render");
    return (
      <div>
        <h1>Number: {this.state.number}</h1>

        <button className='btn btn-primary' onClick={() => this.setState({ number: this.state.number + 1 })}>Updating</button>

        <h1>Sub: {this.state.sub}</h1>
        <button className='btn btn-primary' onClick={() => this.setState({ sub: this.state.sub + 1 })}>Updating</button>

        <ConComponent sub={this.state.sub} />
      </div>
    )
  }

  // // giá trị cũ props
  // // giá trị cũ state
  // getSnapshotBeforeUpdate(prevProp, prevState) {
  //   console.log("getSnapshotBeforeUpdate");
  // }

  // //lưu ý không nên setstate trong DidUpdate
  // componentDidUpdate() {

  //   console.log("componentDidUpdate");
  // }

  // // gọi API lấy data
  // componentDidMount() {
  //   console.log("componentDidMount");
  // }
}
