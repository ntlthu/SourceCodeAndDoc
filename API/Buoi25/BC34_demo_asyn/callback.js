function cong(a, b, callback) {
  setTimeout(function () {
    callback(a + b);
  }, 1000);
}

// cong(1, 3, function (result) {
//   console.log(result);
// });

function nhan(a, b, callback) {
  setTimeout(function () {
    callback(a * b);
  }, 1000);
}

function chia(a, b, callback) {
  setTimeout(function () {
    callback(a / b);
  }, 1000);
}

function tinhDTHT(a, b, h, callback) {
  cong(a, b, function (result) {
    nhan(result, h, function (result) {
      chia(result, 2, function (result) {
        callback(result);
      });
    });
  });
}

tinhDTHT(2, 3, 2, function (result) {
  console.log("DTHT la: " + result);
});
