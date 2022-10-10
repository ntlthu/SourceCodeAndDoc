//global
var demo = "";

/**
 * Function (hàm)
 *  - Hàm không có tham số
 *  - Hàm có tham số
 *  - Hàm không có giá trị trả về
 *  - Hàm có giá trị trả về (return)
 */

//Khai bao function
function xuatThongTin() {
  console.log("Hom la thu 2");
  console.log("Hello Cybersoft");
  console.log("Dinh Phuc Nguyen");
}

//goi lai ham xuatThongTin
xuatThongTin();
xuatThongTin();

// function tinhTong() {
//   //scope - local
//   var a = 10;
//   var b = 5;
//   var tong = a + b;
//   console.log(tong);
// }

// tinhTong();

function tinhTong(a, b) {
  var tong = a + b;
  return tong;
}

var sum = tinhTong(10, 5);
console.log(sum);

var number3 = 20;
var result = number3 + sum;
console.log(result);

function tinhLuong(soNgayLam, luongNgay) {
  var luong = soNgayLam * luongNgay;
  return luong;
}

var tongLuong = tinhLuong(5, 100000);
console.log(tongLuong);

/**
 * Literal
 */
var demoFnc = function () {
  console.log("Demo Function Literal");
};

demoFnc();

/**
 * Tìm số lớn nhất trong 3 số
 */
function timSLN(a, b, c) {
  var max = a;

  if (b > max) {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  return max;
}

document.getElementById("btnSLN").onclick = function () {
  //Đầu vào
  var sothu1 = document.getElementById("soThu1").value * 1;
  var sothu2 = document.getElementById("soThu2").value * 1;
  var sothu3 = document.getElementById("soThu3").value * 1;

  //Xử lý
  var sln = timSLN(sothu1, sothu2, sothu3);

  //Đầu ra
  document.getElementById("thongBaoSLN").innerHTML = "SLN: " + sln;
};

/**
 * Kiem tra so chan/le
 */
function kiemTraSo(a) {
  if (a % 2 === 0) {
    //chan
    return true;
  } else {
    //le
    return false;
  }
}

document.getElementById("btnKiemTraSo").onclick = function () {
  //Đầu vào
  var number = document.getElementById("number").value * 1;

  //Xử lý
  var res = kiemTraSo(number);
  var text = "";

  if (res) {
    text = "Day la so chan";
  } else {
    text = "Day la so le";
  }

  //Đầu ra
  document.getElementById("thongBaoSo").innerHTML = text;
};
