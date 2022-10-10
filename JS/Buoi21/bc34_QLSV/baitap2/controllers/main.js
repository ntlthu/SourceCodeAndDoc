//Khoi tao doi tuong dssv tu lop doi tuong DanhSachSinhVien
var dssv = new DanhSachSinhVien();
var validation = new Validation();

//lấy data từ LocalStorage
getLocalStorage();

function getEle(id) {
  return document.getElementById(id);
}

function layThongTinSV(isAdd) {
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

  //isValid la true => form hop le
  var isValid = true;

  //MaSV
  if (isAdd) {
    isValid &=
      validation.kiemTraRong(maSV, "errorMaSV", "(*)  Vui lòng nhập maSV") &&
      validation.kiemTraDoDaiKiTu(
        maSV,
        "errorMaSV",
        "(*)  Vui lòng nhập ki tu 4 - 10",
        4,
        10
      ) &&
      validation.checkMaSVTonTai(
        maSV,
        "errorMaSV",
        "(*) MaSV da ton tai!",
        dssv.arr
      );
  }

  //TenSV
  isValid &=
    validation.kiemTraRong(tenSV, "errorTenSV", "(*)  Vui lòng nhập tenSV") &&
    validation.kiemTraKiTuChuoi(
      tenSV,
      "errorTenSV",
      "(*)  Vui lòng nhập chuỗi ki tự"
    );

  //Email
  isValid &=
    validation.kiemTraRong(email, "errorEmail", "(*)  Vui lòng nhập email") &&
    validation.checkEmail(
      email,
      "errorEmail",
      "(*)  Vui lòng nhập email dung dinh dang!"
    );

  //Mat khau
  isValid &= validation.kiemTraRong(
    matKhau,
    "errorPass",
    "(*)  Vui lòng nhập pass"
  );

  //Ngay sinh
  isValid &= validation.kiemTraRong(
    ngaySinh,
    "errorNgaySinh",
    "(*)  Vui lòng nhập NS"
  );

  //Khoa Hoc
  isValid &= validation.checkKhoaHoc(
    "khSV",
    "errorKH",
    "(*) Vui long chon KH!"
  );

  //Toan
  isValid &= validation.kiemTraRong(
    diemToan,
    "errorToan",
    "(*)  Vui lòng nhập toan"
  );

  //Ly
  isValid &= validation.kiemTraRong(diemLy, "errorLy", "(*)  Vui lòng nhập ly");

  //Hoa
  isValid &= validation.kiemTraRong(
    diemHoa,
    "errorHoa",
    "(*)  Vui lòng nhập hoa"
  );

  if (!isValid) return null;

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
  var sinhVien = layThongTinSV(true);

  if (sinhVien) {
    //Thêm sv vào mảng arr
    dssv.themSV(sinhVien);

    //gọi hàm setLocalStorage để lưu data
    setLocalStorage();

    renderTable(dssv.arr);
  }
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
                    <button class="btn btn-info" onclick="suaSV('${sv.maSV}')">Sửa</button>
                    <button class="btn btn-danger" onclick="xoaSV('${sv.maSV}')">Xoá</button>
                </td>
            </tr>
        `;
  });

  getEle("tbodySinhVien").innerHTML = content;
}

/**
 * Cập nhật SV
 */
getEle("btnCapNhatSV").addEventListener("click", function () {
  //lấy value từ các thẻ input
  var sinhVien = layThongTinSV(false);

  dssv._capNhatSinhVien(sinhVien);
  renderTable(dssv.arr);
  setLocalStorage();
});

/**
 * Sua SV
 */
function suaSV(maSV) {
  var sv = dssv._layThongTinSV(maSV);
  if (sv) {
    //Dom tới các thẻ input show value
    getEle("txtMaSV").value = sv.maSV;
    //disabled #txtMaSV
    getEle("txtMaSV").disabled = true;
    getEle("txtTenSV").value = sv.tenSV;
    getEle("txtEmail").value = sv.email;
    getEle("txtPass").value = sv.matKhau;
    getEle("txtNgaySinh").value = sv.ngaySinh;
    getEle("khSV").value = sv.khoaHoc;
    getEle("txtDiemToan").value = sv.diemToan;
    getEle("txtDiemLy").value = sv.diemLy;
    getEle("txtDiemHoa").value = sv.diemHoa;
  }
}

/**
 * Xoa SV
 */
function xoaSV(maSV) {
  dssv._xoaSV(maSV);
  renderTable(dssv.arr);
  setLocalStorage();
}

/**
 * Tim kiem sinh vien
 */
getEle("txtKeyword").addEventListener("keyup", function () {
  //dom lấy value input#txtKeyword
  var keyword = getEle("txtKeyword").value;

  var mangTimKiem = dssv._timKiemSinhVien(keyword);
  renderTable(mangTimKiem);
});

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
