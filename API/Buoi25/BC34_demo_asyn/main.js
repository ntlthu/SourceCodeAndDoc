/**
 * Tinh dien tich hinh thang: (a + b) * h / 2 = ?
 *
 * API Cong
 * API Nhan
 * API Chia
 *
 * => callback function; promise; asyn await
 */

function theFirst(callback) {
  setTimeout(function () {
    console.log("theFirst");
    callback();
  }, 5000);
}

function theSecond() {
  console.log("theSecond");
}

theFirst(theSecond);
