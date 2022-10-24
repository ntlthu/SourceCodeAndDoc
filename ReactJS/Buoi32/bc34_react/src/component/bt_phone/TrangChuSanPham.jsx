import React, { Component } from 'react';
import DanhSachSanPham from './DanhSachSanPham';
import dataPhone from './dataPhone.json';
import SanPham from './SanPham';

export default class TrangChuSanPham extends Component {

  state = {
    statePhone: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./ImagePhone/vsphone.jpg",
    },
    gioHang: []
  }

  hanldeChiTiet = (phone) => {
    this.setState({
      statePhone: phone
    })
  }

  thongTinGioHangTam = () => {
    let { gioHang } = this.state;
    let soLuongSanPham = gioHang.length;

    let tongTien = 0;

    // gioHang.map(sanPham => {
    //   tongTien += sanPham.soLuong * sanPham.giaBan;
    // })

    tongTien = gioHang.reduce((tong, sanPham) => {
      return tong = sanPham.giaBan * sanPham.soLuong
    }, 0)

    return `(${soLuongSanPham} sp - ${tongTien.toLocaleString()} VNĐ)`;
  }

  themGioHang = (sanPham) => {
    let { gioHang } = this.state;
    let gioHangNew = [...gioHang];

    let sanPhamGH = gioHangNew.find(item => item.maSanPham == sanPham.maSP);
    //1 đã có trong giỏ hàng
    if (sanPhamGH) {

    } else {
      //2  chưa có trong giỏ hàng
      // let sanPhamThem = {
      //   maSP: sanPham.maSP,
      //   tenSP: sanPham.tenSP,
      //   ......,
      //   soLuong: 1
      // }

      let sanPhamThem = { ...sanPham, soLuong: 1 };

      gioHangNew.push(sanPhamThem);

      // gioHangNew = [...gioHangNew, sanPham]; // ES6
    }

    this.setState({
      gioHang: gioHangNew
    })

  }

  render() {

    let { statePhone, gioHang } = this.state;

    return (
      <div className='container'>

        <h3 className='text-danger p-5' data-toggle="modal" data-target="#exampleModal" style={{ cursor: "pointer" }}>Giỏ hàng {this.thongTinGioHangTam()}</h3>

        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Giỏ hàng
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                {/* nội dung giỏ hàng */}
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Số lượng đặt</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      gioHang.map(sanPham => {
                        return <tr>
                          <td>{sanPham.maSP}</td>
                          <td><img className='img-fluid' style={{ height: "50px" }} src={sanPham.hinhAnh} /></td>
                          <td>{sanPham.tenSP}</td>
                          <td>{sanPham.soLuong}</td>
                          <td>{sanPham.giaBan.toLocaleString()} VNĐ</td>
                          <td>{(sanPham.giaBan * sanPham.soLuong).toLocaleString()} VNĐ</td>
                          <td>
                            <button className='btn btn-danger'>Xóa</button>
                          </td>
                        </tr>
                      })
                    }

                  </tbody>
                </table>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>

              </div>
            </div>
          </div>
        </div>



        <DanhSachSanPham dataPhoneProps={dataPhone} hanldeChiTiet={this.hanldeChiTiet} themGioHang={this.themGioHang} />

        <SanPham statePhone={statePhone} />
      </div>
    )
  }
}
