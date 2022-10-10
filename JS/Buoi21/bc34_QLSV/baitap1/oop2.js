function getEle(id) {
  return document.getElementById(id);
}

function hienThiThongTin() {
  //Dau vao
  var _maSV = getEle("txtMaSV").value;
  var _tenSV = getEle("txtTenSV").value;
  var _loaiSV = getEle("loaiSV").value;
  var _diemToan = getEle("txtDiemToan").value * 1;
  var _diemVan = getEle("txtDiemVan").value * 1;

  /**
   * Tạo đối tượng (Object)
   * Tạo đối tượng sinhVien từ lớp đối tượng SinhVien
   */
  var sinhVien = new SinhVien(_maSV, _tenSV, _loaiSV, _diemToan, _diemVan);

  //Tinh DTB
  sinhVien.tinhDTB();

  //Xep loai SV
  var xepLoai = sinhVien.xepLoaiSV();

  getEle("spanTenSV").innerHTML = sinhVien.tenSV;
  getEle("spanMaSV").innerHTML = sinhVien.maSV;
  getEle("spanLoaiSV").innerHTML = sinhVien.loaiSV;
  getEle("spanDTB").innerHTML = sinhVien.diemTB;
  getEle("spanXepLoai").innerHTML = xepLoai;
}
