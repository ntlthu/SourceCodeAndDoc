function thayDoiNoiDung() {
  /*
  document.getElementById(): là lệnh dùng để truy xuất đến thẻ html thông qua id.
*/
  var tagContent = document.getElementById('content');
  //.innerHTML: Thay đổi nội dung giữa 2 thẻ đóng mở <div>innerHTML</div>
  tagContent.innerHTML = 'Hello bc34';

  //.value: Thay đổi nội dung của thẻ input (text)
  var tagInput = document.getElementById('text');
  tagInput.value = 'Xin chào các đồng minh !';

  //.src: Thuộc tính qui định source của hình
  var tagImg = document.getElementById('hinhAnh');
  //option + esc 
  tagImg.src = './img/img2.jpeg';
  //.className: Thay đổi tên class
  tagImg.className = 'mt-2';
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
  var thePNoiDung = document.getElementById('noiDung');
  thePNoiDung.innerHTML = 'Đã thay đổi rồi nhé !';
  //.style.[thuoc_tinh_css] Thay đổi css
  thePNoiDung.style.color = 'red';
  thePNoiDung.style.border = '1px solid red';
  //thẻ có thuộc tính 2 từ => từ 2 trở đi viết hoa ký tự đầu tiên
  thePNoiDung.style.borderRadius = '5px';
  thePNoiDung.style.paddingLeft = '15px';
}

//Bài tập 2: Thay đổi màu sắc của ngôi nhà
function changeColor() {
  //input: màu mà người dùng chọn: string
  // var tagSelect = document.getElementById('color');
  // tagSelect.value
  var color = document.getElementById('color').value;
  //output: màu của ngôi nhà: string
  var output = '';
  //process: Xử lý 
  output = color;
  //Hiển thị output lên giao diện
  document.getElementById('home').style.color = output;

}

//Bài tập 3: Xây dựng ứng dụng khi người dùng bấm vào nút bật đèn thì hiển thị đèn sáng và ngược lại
// var hoTen = ''; //biến toàn cục (global variable)
// function A() { //function scope
//    hoTen = 'ABC'
// }
// function B() {
//    hoTen = 'xyz';
// }

var imgDen = document.getElementById('imgDen');
var btnBatDen = document.getElementById('btnBatDen');
var btnTatDen = document.getElementById('btnTatDen');
function batDen() {
  //input: thẻ đèn 
  //output: hình đèn sáng
  imgDen.src = './img/pic_bulbon.gif';
  //Bấm vào nút bật đèn thì button bật đèn sẽ được add class btn btn-success
  btnBatDen.className = 'btn btn-success';
  btnTatDen.className = '';
}

function tatDen() {
  //input: thẻ đèn 
  //output: hình đèn sáng
  imgDen.src = './img/pic_bulboff.gif';
  //Dom đến nút button tắt đèn
  btnTatDen.className = 'btn btn-success';
  btnBatDen.className = '';
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
document.getElementById('btnClick').onclick = function() {
  var btn = document.getElementById('btn');
  btn.disabled = true;
}

//Bài 5: Xây dựng form đăng nhập hiển thị thông tin người dùng nhập vào, và thay đổi màu nền div#thongBao

document.getElementById('btnDangNhap').onclick = function () {
  //Xử lý
  //input: taiKhoan: string, matKhau:string
  var taiKhoan = document.getElementById('taiKhoan').value;
  var matKhau = document.getElementById('matKhau').value;
  //output: ketQua:string
  var ketQua = '';
  //process:
  // Tài khoản: nguyen van a - Mật khẩu: 1234
  ketQua = 'Tài khoản: ' + taiKhoan + ' - ' + 'Mật khẩu: ' + matKhau;
  //Hiển thị output ra giao diện
  document.getElementById('thongBao').innerHTML = ketQua;
  document.getElementById('thongBao').className = 'bg-success text-white p-2 rounded mt-2';

}