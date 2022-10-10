//Khai bao mang
var listNumber = [];

/**
 * Them so
 */
document.getElementById("btnThemSo").onclick = function () {
  //Lay thong tin user nhap
  var number = document.getElementById("number").value * 1;

  //Thêm number vào mảng listNumber
  listNumber.push(number);
};

/**
 * Xuat so
 */
document.getElementById("btnXuatSo").onclick = function () {
  var content = "";

  for (var i = 0; i < listNumber.length; i++) {
    content += listNumber[i] + " ";
  }

  document.getElementById("showInfo").innerHTML = content;
};

/**
 * Tinh tong chan
 * - Khai báo tong bằng 0
 * - Duyệt mảng listNumber
 *      + Nếu như listNumber[i] chia hết cho 2 === 0
 *          => Tính tổng chẵn
 * - Show kết quả
 */
document.getElementById("btnTinhTongChan").onclick = function () {
  if (listNumber.length === 0) {
    alert("Vui long them so!");
    return;
  }

  var tong = 0;

  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] % 2 === 0) {
      tong += listNumber[i];
    }
  }

  var result = "Tong so chan: " + tong;
  document.getElementById("showInfo").innerHTML = result;
};
