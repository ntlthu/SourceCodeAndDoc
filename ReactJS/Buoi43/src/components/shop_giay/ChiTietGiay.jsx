//rfc
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

// params => url/123/abc/456
// query  => url?number=123&hoTen=abc&tuoi=456
export default function ChiTietGiay() {
  const params = useParams();
  const navigate = useNavigate();

  const [chiTietGiay, setChiTietGiay] = useState({});
  const getApiChiTiet = async () => {
    const apiChiTiet = await axios({
      method: "GET",
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.id}`
    })

    setChiTietGiay(apiChiTiet.data.content);
  }

  // gọi api trả dữ liệu cho state
  // componentDidMount()
  useEffect(() => {
    getApiChiTiet();
  }, [params.id]);

  return (
    <div className='container'>
      <div className='row text-left mt-5'>
        <div className='col-5'>
          <img src={chiTietGiay.image} className='img-fluid' />
        </div>
        <div className='col-7 '>
          <h2>{chiTietGiay.name}</h2>
          <p>Giá tiền: {chiTietGiay.price}</p>
          <p>Mô tả: {chiTietGiay.description}</p>
        </div>
      </div>

      <div className='row'>
        {chiTietGiay.relatedProducts?.map(item => {
          return <div className="col-4 card " style={{ width: '18rem' }}>
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <button onClick={() => 
                navigate(`/chitietgiay/${item.id}`)}  className="btn btn-primary">Xem chi tiết</button>
            </div>
          </div>
        })
        }

      </div>


    </div>
  )
}
