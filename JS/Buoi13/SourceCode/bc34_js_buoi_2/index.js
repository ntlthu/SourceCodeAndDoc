function thayDoiNoiDung() {
  /*
  document.getElementById(): là lệnh dùng để truy xuất đến thẻ html thông qua id.
*/
  var tagContent = document.getElementById("content");
  //.innerHTML: Thay đổi nội dung giữa 2 thẻ đóng mở <div>innerHTML</div>
  tagContent.innerHTML = "Hello bc34";

  //.value: Thay đổi nội dung của thẻ input (text)
  var tagInput = document.getElementById("text");
  tagInput.value = "Xin chào các đồng minh !";

  //.src: Thuộc tính qui định source của hình
  var tagImg = document.getElementById("hinhAnh");
  //option + esc
  tagImg.src = "./img/img2.jpeg";
  //.className: Thay đổi tên class
  tagImg.className = "mt-2";
}
/*
  Các bước khi làm bài tập:
  + Dàn layout hoàn chỉnh (code html, css)
  + Xác định xử lý của người dùng
  + Xây dựng hàm xử lý và cài đặt
*/

//Bài tập 1: Viết chương trình khi người dùng click vào nút button#btnThayDoi thì nội dung thẻ p sẽ thay đổi

function thayDoiNoiDungTheP() {
  // alert(123);
  var thePNoiDung = document.getElementById("noiDung");
  thePNoiDung.innerHTML = "Đã thay đổi rồi nhé !";
  //.style.[thuoc_tinh_css] Thay đổi css
  thePNoiDung.style.color = "red";
  thePNoiDung.style.border = "1px solid red";
  //thẻ có thuộc tính 2 từ => từ 2 trở đi viết hoa ký tự đầu tiên
  thePNoiDung.style.borderRadius = "5px";
  thePNoiDung.style.paddingLeft = "15px";
}

//Bài tập 2: Thay đổi màu sắc của ngôi nhà
function changeColor() {
  //input: màu mà người dùng chọn: string
  // var tagSelect = document.getElementById('color');
  // tagSelect.value
  var color = document.getElementById("color").value;
  //output: màu của ngôi nhà: string
  var output = "";
  //process: Xử lý
  output = color;
  //Hiển thị output lên giao diện
  document.getElementById("home").style.color = output;
}

//Bài tập 3: Xây dựng ứng dụng khi người dùng bấm vào nút bật đèn thì hiển thị đèn sáng và ngược lại
// var hoTen = ''; //biến toàn cục (global variable)
// function A() { //function scope
//    hoTen = 'ABC'
// }
// function B() {
//    hoTen = 'xyz';
// }

var imgDen = document.getElementById("imgDen");
var btnBatDen = document.getElementById("btnBatDen");
var btnTatDen = document.getElementById("btnTatDen");
function batDen() {
  //input: thẻ đèn
  //output: hình đèn sáng
  imgDen.src = "./img/pic_bulbon.gif";
  //Bấm vào nút bật đèn thì button bật đèn sẽ được add class btn btn-success
  btnBatDen.className = "btn btn-success";
  btnTatDen.className = "";
}

function tatDen() {
  //input: thẻ đèn
  //output: hình đèn sáng
  imgDen.src = "./img/pic_bulboff.gif";
  //Dom đến nút button tắt đèn
  btnTatDen.className = "btn btn-success";
  btnBatDen.className = "";
}

//Bài tập 4: Xây dựng ứng dụng để disabled xử lý của 1 button

// function handleDisabledButton () {
//     var btn = document.getElementById('btn');
//     btn.disabled = true;
// }
// //.onclick: Định nghĩa sự kiện click cho thẻ button. Lưu ý giá trị nhận là 1 hàm chưa gọi (không có ())
// var btnClick = document.getElementById('btnClick');
// btnClick.onclick = handleDisabledButton;

//Viết tắt:
document.getElementById("btnClick").onclick = function () {
  var btn = document.getElementById("btn");
  btn.disabled = true;
};

//Bài 5: Xây dựng form đăng nhập hiển thị thông tin người dùng nhập vào, và thay đổi màu nền div#thongBao

document.getElementById("btnDangNhap").onclick = function () {
  //Xử lý
  //input: taiKhoan: string, matKhau:string
  var taiKhoan = document.getElementById("taiKhoan").value;
  var matKhau = document.getElementById("matKhau").value;
  //output: ketQua:string
  var ketQua = "";
  //process:
  // Tài khoản: nguyen van a - Mật khẩu: 1234
  // ketQua = "Tài khoản: " + taiKhoan + " - " + "Mật khẩu: " + matKhau;
  ketQua += "<p>Tài khoản: " + taiKhoan + "</p>";
  ketQua += "<p>Mật khẩu: " + matKhau + "</p>";
  //Hiển thị output ra giao diện
  document.getElementById("thongBao").innerHTML = ketQua;
  document.getElementById("thongBao").className =
    "bg-success text-white p-2 rounded mt-2";
};

function taoTheP() {
  //Tạo thẻ p
  // var tagP = "<p>The p</p>";
  //gán thẻ p mới tạo vào thẻ div#myDiv
  // document.getElementById("myDiv").innerHTML = tagP;

  //Tạo thẻ p
  var tagP = document.createElement("p");
  //Tao noi dung cho the p
  tagP.innerHTML = "The p";
  //gán thẻ p mới tạo vào thẻ div#myDiv
  document.getElementById("myDiv").appendChild(tagP);
}

/**
 * Tinh tien tip
 */
document.getElementById("btnTinhNao").onclick = function () {
  //đầu vào - dom lấy value từ người nhập
  var tienThanhToan = document.getElementById("tienThanhToan").value;
  var phanTramTip = document.getElementById("slTip").value;
  var soNguoi = document.getElementById("share").value;

  //xử lý: 100 * 30/100 / 3
  var total = (tienThanhToan * phanTramTip) / 100 / soNguoi;

  //đầu ra
  var showInfo = "";
  showInfo += "<p>Tip Amount<p>";
  showInfo += "<p>" + total + "</p>";
  showInfo += "<p>mỗi người</p>";

  document.getElementById("thongBaoTienTip").innerHTML = showInfo;
  //style cho the div#thongBaoTienTip
  document.getElementById("thongBaoTienTip").classList.add("bg-success");
  document.getElementById("thongBaoTienTip").classList.add("text-white");
  document.getElementById("thongBaoTienTip").classList.add("p-2");
  document.getElementById("thongBaoTienTip").classList.add("rounded");
};

/**
 * Tinh luong NV
 */
document.getElementById("btnTinhLuong").onclick = function () {
  //Đầu vào
  const luongNgay = 100000;
  var soNgayLam = document.getElementById("soNgayLam").value;

  //Xử lý
  var total = luongNgay * soNgayLam;

  //format vnd
  var format = new Intl.NumberFormat("vn-VN");
  var totalVND = format.format(total) + " vnd";

  //Đầu ra
  document.getElementById("thongBaoTinhLuong").innerHTML = totalVND;
};

/**
 * Movie
 */
document.getElementById("btnSubmit").onclick = function () {
  //Đầu vào
  var tenPhim = document.getElementById("tenPhim").value;
  var giaVeNL = document.getElementById("giaVeNL").value * 1;
  var slVeNL = document.getElementById("slVeNL").value * 1;
  var giaVeTE = document.getElementById("giaVeTE").value * 1;
  var slVeTE = document.getElementById("slVeTE").value * 1;
  var phanTramTuThien = document.getElementById("phanTramTuThien").value;

  //Xử lý
  var soVeDaBan = slVeNL + slVeTE;
  var doanhThu = giaVeNL * slVeNL + giaVeTE * slVeTE;
  var tongTienTrichTuThien = (doanhThu * 10) / 100;
  var loiNhuan = doanhThu - tongTienTrichTuThien;

  //format VND
  var format = new Intl.NumberFormat("vn-VN");

  //Đầu ra
  var showInfo = "";
  showInfo += "<div class='bg-success'>";
  showInfo += "<p>Tên phim: .................." + tenPhim + "</p>";
  showInfo += "<p>Số vé đã bán: .................." + soVeDaBan + "</p>";
  showInfo +=
    "<p>Doanh thu: .................." + format.format(doanhThu) + " vnd</p>";
  showInfo +=
    "<p>Trích % từ thiện: .................." + phanTramTuThien + "%</p>";
  showInfo +=
    "<p>Tổng tiền trích từ thiện: .................." +
    format.format(tongTienTrichTuThien) +
    " vnd</p>";
  showInfo +=
    "<p>Lợi nhuận: .................." + format.format(loiNhuan) + " vnd</p>";
  showInfo += "</div>";

  document.getElementById("thongBaoMovie").innerHTML = showInfo;
};
