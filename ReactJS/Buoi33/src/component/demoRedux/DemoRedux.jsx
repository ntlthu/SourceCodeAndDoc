import React, { Component } from 'react'
import { connect } from 'react-redux'

class DemoRedux extends Component {

  render() {
    return (
      <div>
        <h1>
          {this.props.dataRedux.hoTen}
        </h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //dataRedux = {
  //           data: 1
  //      }
  return {
    dataRedux: state.DemoReducer
  }
}

export default connect(mapStateToProps, null)(DemoRedux)
