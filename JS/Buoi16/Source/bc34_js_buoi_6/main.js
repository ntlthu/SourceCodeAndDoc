/**
 * Vòng lặp
 * while
 * do while
 * for
 */
var n = 0;

while (n < 3) {
  //hanh dong
  console.log("Hello Cybersoft");
  //Buoc nhay
  n++;
}

/**
 * . n = 0; n < 3 => "Hello Cybersoft"; n = 1
 * . n = 1; n < 3 => "Hello Cybersoft"; n = 2
 * . n = 2; n < 3 => "Hello Cybersoft"; n = 3
 * . n = 3; n < 3 => false => stop
 */

/**
 * Chia cho 2
 */
document.getElementById("btnSubmit").onclick = function () {
  var number = document.getElementById("number").value;
  var content = "";

  while (number > 1) {
    number = Math.floor(number / 2);
    content += "<p>Number: " + number + "</p>";
  }

  document.getElementById("thongBao").innerHTML = content;
};

//do while
var m = 0;

do {
  //hanh dong
  console.log("Hello Cybersoft");
  m++;
} while (m < 3);

/**
 * . m = 0 => "Hello Cybersoft"; m = 1
 * . m = 1; m < 3 => "Hello Cybersoft"; m = 2;
 * . m = 2; m < 3 => "Hello Cybersoft"; m = 3;
 * . m = 3; m < 3 => false => stop
 */

/**
 * Tinh tong
 */
document.getElementById("btnSubmit2").onclick = function () {
  var number = document.getElementById("number2").value;
  var total = 0;
  var count = 0;

  do {
    total += count;
    count++;
  } while (count <= number);

  console.log(total);
};

//for
// for (var i = 0; i < 3; i++) {
//   console.log("Hello Cybersoft");
// }

/**
 * i = 0; i < 3 => "Hello Cybersoft"; i = 1
 * i = 1; i < 3 => "Hello Cybersoft"; i = 2
 * i = 2; i < 3 => "Hello Cybersoft"; i = 3
 * i = 3; i < 3 => false => stop
 */

/**
 * Tim so chan le
 */

document.getElementById("btnSubmit3").onclick = function () {
  var number = document.getElementById("number3").value;
  var soChan = "";
  var soLe = "";

  for (var i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      //so chan
      soChan += i + " ";
    } else {
      //so le
      soLe += i + " ";
    }
  }

  console.log(soChan);
  console.log(soLe);
};

demoVongLapLong();

function demoVongLapLong() {
  var content = "";

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      content += "* ";
    }
    content += "\n";
  }

  console.log(content);
}

/**
 * .i = 0; i < 5
 *      .j = 0; j < 5 => * ; j = 1
 *      .j = 1; j < 5 => * * ; j = 2
 *      .j = 2; j < 5 => * * * ; j = 3
 *      .j = 3; j < 5 => * * * * ; j = 4
 *      .j = 4; j < 5 => * * * * * ; j = 5
 *      .j = 5; j < 5 => false => stop
 * .i = 1; i < 5
 *      .j = 0; j < 5 => * ; j = 1
 *      .j = 1; j < 5 => * * ; j = 2
 *      .j = 2; j < 5 => * * * ; j = 3
 *      .j = 3; j < 5 => * * * * ; j = 4
 *      .j = 4; j < 5 => * * * * * ; j = 5
 *      .j = 5; j < 5 => false => stop
 */

//Break
function demoBreak() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
    if (i === 3) {
      console.log("Tim thay so 3");
      break;
    }
  }
}

demoBreak();

//Continue
function demoContinue() {
  for (var i = 0; i < 10; i++) {
    if (i === 3) {
      continue;
    }
    console.log(i);
  }
}

demoContinue();

//Return
function demoReturn() {
  //   console.log("Hello Cybersoft");
  //   return; //ctr ket thuc
  //   console.log("Dinh Phuc Nguyen");

  if (2 === 3) {
    console.log("Hello Cybersoft");
    return;
  }

  console.log("Dinh Phuc Nguyen");
}

demoReturn();
