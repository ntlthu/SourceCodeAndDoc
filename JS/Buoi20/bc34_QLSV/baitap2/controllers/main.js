//Khoi tao doi tuong dssv tu lop doi tuong DanhSachSinhVien
var dssv = new DanhSachSinhVien();

//lấy data từ LocalStorage
getLocalStorage();

function getEle(id) {
  return document.getElementById(id);
}

function layThongTinSV() {
  /**
   * Dom tới các thẻ input lấy value
   */
  var maSV = getEle("txtMaSV").value;
  var tenSV = getEle("txtTenSV").value;
  var email = getEle("txtEmail").value;
  var matKhau = getEle("txtPass").value;
  var ngaySinh = getEle("txtNgaySinh").value;
  var khoaHoc = getEle("khSV").value;
  var diemToan = getEle("txtDiemToan").value;
  var diemLy = getEle("txtDiemLy").value;
  var diemHoa = getEle("txtDiemHoa").value;

  //Tạo đối tượng sv từ lớp đối tượng SinhVien
  var sinhVien = new SinhVien(
    maSV,
    tenSV,
    email,
    matKhau,
    ngaySinh,
    khoaHoc,
    diemToan,
    diemLy,
    diemHoa
  );

  //tính DTB sv
  sinhVien.tinhDTB();

  return sinhVien;
}

/**
 * Add Student
 */
getEle("btnThemSV").addEventListener("click", function () {
  var sinhVien = layThongTinSV();

  //Thêm sv vào mảng arr
  dssv.themSV(sinhVien);

  //gọi hàm setLocalStorage để lưu data
  setLocalStorage();

  renderTable(dssv.arr);
});

// function renderTable(data) {
//   var content = "";

//   for (var i = 0; i < data.length; i++) {
//     var sv = data[i];
//     content += "<tr>";
//     content += "<td>" + sv.maSV + "</td>";
//     content += "<td>" + sv.tenSV + "</td>";
//     content += "<td>" + sv.email + "</td>";
//     content += "<td>" + sv.ngaySinh + "</td>";
//     content += "<td>" + sv.khoaHoc + "</td>";
//     content += "<td>" + sv.diemTB + "</td>";
//     content += "</tr>";
//   }

//   getEle("tbodySinhVien").innerHTML = content;
// }

function renderTable(data) {
  var content = "";

  data.forEach(function (sv) {
    content += `
            <tr>
                <td>${sv.maSV}</td>
                <td>${sv.tenSV}</td>
                <td>${sv.email}</td>
                <td>${sv.ngaySinh}</td>
                <td>${sv.khoaHoc}</td>
                <td>${sv.diemTB}</td>
                <td>
                    <button class="btn btn-info">Sửa</button>
                    <button class="btn btn-danger" onclick="xoaSV('${sv.maSV}')">Xoá</button>
                </td>
            </tr>
        `;
  });

  getEle("tbodySinhVien").innerHTML = content;
}

/**
 * Xoa SV
 */
function xoaSV(maSV) {
  dssv._xoaSV(maSV);
  renderTable(dssv.arr);
  setLocalStorage();
}

function setLocalStorage() {
  //Convert JSON => string
  var dataString = JSON.stringify(dssv.arr);
  //Luu xuong localStorage
  localStorage.setItem("DanhSachSinhVien", dataString);
}

function getLocalStorage() {
  if (localStorage.getItem("DanhSachSinhVien")) {
    var dataString = localStorage.getItem("DanhSachSinhVien");
    //Convet string => JSON
    var dataJson = JSON.parse(dataString);
    //backup lại dự liệu cho dssv.arr từ dataJson
    dssv.arr = dataJson;
    //hiển thị dssv ra ngoài table
    renderTable(dataJson);
  }
}
