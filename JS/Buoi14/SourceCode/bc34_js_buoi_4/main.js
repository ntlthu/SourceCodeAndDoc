//boolean
var isLogin = false;

// == (so sánh bằng giá trị)
var number1 = 5;
var number2 = "5";
console.log(number1 == number2);

// === (so sánh bằng giá trị & kiểu dữ liệu)
var number4 = 10;
var number5 = "10";
console.log(number4 === number5);

// != (so sánh khác giá trị)
var number6 = 10;
var number7 = 10;
console.log(number6 != number7);

// !== (so sánh khác giá trị & kiểu dự liệu)

// > (so sánh lớn)
var number8 = 20;
var number9 = 1;
console.log(number8 > number9);

// >= (so sánh lớn hơn bằng)
var number10 = 8;
var number11 = 10;
console.log(number10 >= number11);

// < (so sánh bé)
// <= (so sánh bé hơn bằng)

/**
 * Logic
 */
//&& (so sánh và): trong tất cả bt, có 1 bt là false => false hết
var bt1 = true;
var bt2 = false;
var bt3 = true;
console.log(bt1 && bt2 && bt3);
console.log(5 > 1 && 5 < 2); //F

// || (so sánh hoặc): trong tất cả bt, có 1 bt là true => true hết
var bt4 = false;
var bt5 = false;
console.log(bt4 || bt5);
console.log(5 != 5 || 10 > 1); //T

// ! (Phủ định)
var bt6 = false;
console.log(!bt6);

/**
 * Câu điều kiện
 * if
 */
var btdk = 5 > 1 && 20 < 10;
if (btdk) {
  //Hanh dong
  console.log("DK đúng");
}

console.log("Dinh Phuc Nguyen");

/**
 * Chuyển số âm sang số dương
 */
var d = 5;
if (d < 0) {
  d = -d;
}
console.log(d);

/**
 * Giả sử
 * - Mua quan ao: 10000
 * - Thanh toan: 10000
 * - No: 5000 * 0.015 = ?
 */
document.getElementById("thanhToan").onclick = function () {
  //Đầu vào
  var tienMuon = document.getElementById("tienMuon").value * 1;
  var tienTra = document.getElementById("tienTra").value * 1;
  var phat = 0;
  //Xử lý
  var balance = tienMuon - tienTra;
  if (balance > 0) {
    //hanh dong
    phat = balance * 0.015;
  }

  //Đầu ra
  document.getElementById("thongBaoTinDung").innerHTML = phat;
};

/**
 * Câu điều kiện
 * if else
 */
if (2 > 5) {
  //hanh dong 1
  console.log("DK dung");
} else {
  //hanh dong 2
  console.log("DK sai");
}

//Toan tu 3 ngoi
// dk ? "hanh dong 1" : "hanh dong 2";
10 > 5 ? console.log("DK dung") : console.log("DK sai");

/**
 * Tim SLN trong 2 so
 */
document.getElementById("btnSoSanh").onclick = function () {
  //Dau vao
  var soThu1 = document.getElementById("soThu1").value * 1;
  var soThu2 = document.getElementById("soThu2").value * 1;
  var soLonNhat;

  //Xu ly
  //   if (soThu1 > soThu2) {
  //     soLonNhat = soThu1;
  //   } else {
  //     soLonNhat = soThu2;
  //   }
  soLonNhat = soThu1 > soThu2 ? soThu1 : soThu2;

  //Dau ra
  var result = "SLN la: " + soLonNhat;
  document.getElementById("thongBaoSLN").innerHTML = result;
};

/**
 * Tinh luong NV
 * Giả sử:
 *  - tienLuong = 100000;
 *  - soGioLam = 45;
 *  - Nếu soGioLam lớn hơn 40 giờ
 *      => 40 * 100000 + (45 - 40) * 100000 * 1.5;
 *  - Ngược lại
 *      => 40 * 100000
 */
document.getElementById("btnTinhLuong").onclick = function () {
  //Dau vao
  var luongNgay = document.getElementById("luongNgay").value * 1;
  var soGioLam = document.getElementById("soGioLam").value * 1;
  var tongLuong = 0;

  //Xu ly
  if (soGioLam > 40) {
    tongLuong = 40 * luongNgay + (soGioLam - 40) * luongNgay * 1.5;
  } else {
    tongLuong = soGioLam * luongNgay;
  }

  //Dau ra
  var result = "Tong luong la: " + tongLuong;
  document.getElementById("thongBaoTinhLuong").innerHTML = result;
};

/**
 * if else if
 * Giả sử: Dạy bé đọc số
 * so = 3
 * so == 1 => "Day la so 1"
 * so == 2 => "Day la so 2"
 * so == 3 => "Day la so 3"
 */
var so = 102131232132131231232131232;
if (so === 1) {
  console.log("Day la so 1");
} else if (so === 2) {
  console.log("Day la so 2");
} else if (so === 3) {
  console.log("Day la so 3");
} else if (so === 4) {
  console.log("Day la so 4");
} else {
  console.log("K biet doc");
}

/**
 * Shop
 * Giả sử:
 *  - Ten mat hang: coca
 *  - soLuong: 40
 *  - donGia: 10000
 *
 *  - Nếu soLuong < 50
 *      => soLuong * donGia
 *  - Ngược lại, Nếu 50 <= soLuong && soLuong <= 100
 *      => 49 * donGia + (soLuong - 49) * donGia * 0.92
 *  - Ngược lại, soLuong > 100
 *      => 49 * donGia + 51 * donGia * 0.92 + (soLuong - 100) * donGia * 0.88
 */
var tenHang = "Coca";
var soLuong = -5;
var donGia = 10000;
var tongTien = 0;

if (0 < soLuong && soLuong < 50) {
  tongTien = soLuong * donGia;
} else if (50 <= soLuong && soLuong <= 100) {
  tongTien = 49 * donGia + (soLuong - 49) * donGia * 0.92;
} else if (soLuong > 100) {
  tongTien = 49 * donGia + 51 * donGia * 0.92 + (soLuong - 100) * donGia * 0.88;
} else {
  console.log("Vui long nhap SL > 0");
}

console.log("Tong tien la: " + tongTien);

/**
 * Xep loai SV
 *  - Toan, Ly, Hoa
 *  - DTB
 *  - XepLoai
 */
var toan = 8;
var ly = 9;
var hoa = 10;

var dtb = (toan + ly + hoa) / 3;
var xepLoai = "";

if (dtb >= 8.5) {
  xepLoai = "Gioi";
} else if (6.5 <= dtb && dtb < 8.5) {
  xepLoai = "Kha";
} else if (5 <= dtb && dtb < 6.5) {
  xepLoai = "TB";
} else {
  xepLoai = "Yeu";
}

console.log("SV co loai la: " + xepLoai);

/**
 * Switch case
 */
var number = 1;

switch (number) {
  case 1:
    console.log("Day la so 1");
    break;
  case 2:
    console.log("Day la so 2");
    break;
  case 3:
    console.log("Day la so 3");
    break;

  default:
    console.log("K biet doc");
}
