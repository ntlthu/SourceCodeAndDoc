//rfc 
import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteChat, saveChat } from '../../redux/reducers/chatReducer';

export default function ChatApp() {

  let danhSachChat = useSelector(state => state.chatReducer.danhSachChat);
  let dispatch = useDispatch();

  let userChat = useRef({ hoTen: "", noiDung: "" })

  let setChat = (event) => {
    let { id, value } = event.target;
    userChat.current[id] = value;

  }
  const sendChat = () => {
    //dispath lên store redux
    dispatch(saveChat(userChat.current));
  }
  const removeChat = (id) => {
    dispatch(deleteChat(id));
  }
  return (
    <div className='container text-left mt-5'>
      <div className='row'>
        {danhSachChat.map(user => {
          return <div className='col-12 row'>
            <img className='img-fluid col-1' src="https://picsum.photos/200" />
            <div className='col-9'>
              <span>{user.hoTen}</span>
              <br />
              <span>{user.noiDung}</span>
            </div>
            <div className='col-2'>
              <button onClick={() => removeChat(user.id)} className='btn btn-danger'>delete</button>
            </div>

          </div>
        })}

        <div className='col-12'>
          <label>Họ tên</label>

          <input id="hoTen" onChange={setChat} className='form-control' />

          <label>Nội dung</label>

          <input id="noiDung" onChange={setChat} className='form-control' />

          <button className='btn btn-success' onClick={sendChat}>Send chat</button>
        </div>
      </div>

    </div>
  )
}
