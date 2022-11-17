//rfc
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeNumber } from '../../redux/reducers/DemoReducer';


export default function DemoRedux() {

  //mapStateToProps: return { number: state.DemoReducer}
  let number = useSelector(state => state.DemoReducer);
  let dispatch = useDispatch();

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() =>
        // dispatch({
        //   type: "demoReducer/changeNumber",
        //   payload: 1
        // })
        dispatch(changeNumber(1))
        
      }>change number</button>
    </div >
  )
}
