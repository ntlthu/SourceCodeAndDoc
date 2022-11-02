//rfc
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useRoute from '../../hooks/useRoute';
import { Result } from 'antd';

let timeout = null;
export default function DanhSachGiay() {
  let isLogin = localStorage.getItem("user");
  const { params, navigate, searchParams: [searchParams, setSearchParams] } = useRoute();

  // const navigate = useNavigate();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const params = useParams();

  const [listGiay, setListGiay] = useState([]);

  const keyWord = searchParams.has("word") ? searchParams.get("word") : "";

  const getApiGiay = async () => {
    try {
      const apiGiay = await axios({
        method: "GET",
        url: `https://shop.cyberlearn.vn/api/Product?keyword=${keyWord}`
      })

    
      setListGiay(apiGiay.data.content);

    } catch (err) {
      console.log(err)
    }

  }

  if (timeout != null) {
    clearTimeout(timeout);
  }

  useEffect(() => {
    timeout = setTimeout(() => {
      getApiGiay();

    }, 1000);

  }, [keyWord])

  return (
    <div className='container'>
      <input className='form-control my-5' placeholder='Nhập tên sản phẩm' value={keyWord} onChange={(event) => {
        let { value } = event.target;

        setSearchParams({ word: value });

      }} />

      {isLogin ?
        <div className='row'>
          {listGiay.map(item => {
            return <div className="col-3 card " style={{ width: '18rem' }}>
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <button onClick={() => navigate(`/chitietgiay/${item.id}`)}
                  className="btn btn-primary">Xem chi tiết</button>
              </div>
            </div>
          })}

        </div>
        :
        <Result
          status="warning"
          title="Bạn phải đăng nhập để thấy sản phẩm"
        />
      }

    </div>
  )
}
