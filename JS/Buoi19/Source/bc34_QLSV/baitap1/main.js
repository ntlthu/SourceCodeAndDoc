function getEle(id) {
  return document.getElementById(id);
}

function hienThiThongTin() {
  //Dau vao
  var maSV = getEle("txtMaSV").value;
  var tenSV = getEle("txtTenSV").value;
  var loaiSV = getEle("loaiSV").value;
  var diemToan = getEle("txtDiemToan").value * 1;
  var diemVan = getEle("txtDiemVan").value * 1;

  //Xu ly
  var dtb = tinhDTB(diemToan, diemVan);
  var xepLoai = xepLoaiSV(dtb);

  //Dau ra
  getEle("spanTenSV").innerHTML = tenSV;
  getEle("spanMaSV").innerHTML = maSV;
  getEle("spanLoaiSV").innerHTML = loaiSV;
  getEle("spanDTB").innerHTML = dtb;
  getEle("spanXepLoai").innerHTML = xepLoai;
}

function tinhDTB(diemToan, diemVan) {
  var result = (diemToan + diemVan) / 2;
  return result;
}

function xepLoaiSV(dtb) {
  var result = "";

  if (8 <= dtb && dtb <= 10) {
    result = "Gioi";
  } else if (6 <= dtb && dtb < 8) {
    result = "Kha";
  } else if (5 <= dtb && dtb < 6) {
    result = "TB";
  } else {
    result = "Yeu";
  }

  return result;
}
