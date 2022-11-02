const stateDefault = {
  gioHang: []
}

export const GioHangReducer = (state = stateDefault, action) => {

  const { type, payload } = action;
  switch (type) {
    case "THEM_GIO_HANG":
      let gioHangNew = [...state.gioHang];

      //kiểm tra sản phẩm đã có trong giỏ hàng chưa
      let sanPham = gioHangNew.find(sanPham => sanPham.maSP == payload.maSP);

      if (sanPham) {
        //TH 2 sản phẩm đã có trong giỏ hàng
        sanPham.soLuong += 1;
      } else {
        //TH 1 là sản phẩm chưa có trong giỏ hàng
        gioHangNew.push({ ...payload, soLuong: 1 });
      }
      // state.gioHang = gioHangNew;
      return { ...state, gioHang: gioHangNew };
      
    default:
      return { ...state };
  }
}