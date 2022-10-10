console.log("Hello world!");
console.log("Hello world!");
console.log("Hello world!");

// ax + by + c = 0; a =2, b =3 ,c =5

var name = "Oliver Đặng";
var age = 27;

age = 28;

console.log(name);
console.log(name);

console.log(age);

// camel case

var phoneNumber = "0334643124";
var dateOfBirth = "9/6/1995";
var fullName = "";

// snake case
// var phone_number;

// window, document, Math, Object, String

/**
 * ád
 * ấdads
 * ádasd
 * ádjklasd]ád]ádla]
 * ạdklasjdl
 */

// data types
var num = 5;
var email = "hieu@gmail.com";
var isLogin = true;

//undefined
var a;
var b = null;

// toán tử

var res1 = 5 + 6; // 11
var res2 = 5 - 6; // -1
var res3 = 5 * 6; // 30
var res4 = 5 / 6; // 0.83
var res5 = 5 % 6; // 5

// res1 = res1 + 10;
// res1 + 10;

res1++; // 12
// res1 = res1 + 1

res1--; // 11
// res1 = res1 - 1

console.log(res1, res5);

// phép gán

res2 += 2; // 1
// res2 = res2 + 2
res2 -= 5; // -4
// res2 = res2 - 5
res2 *= 3; // -12
res2 /= 6; // -2
res2 %= 3; // -2

// var res6 = (res3++) + 2; // 32
// res6 = 33
var res7 = ++res3 + 2; // 33

res5 = res5++ + 3; // 8
//res5 = 8

res5 = res7++;
// res5 = 33

console.log(res7, res5);

/**
 * a=3; b=5, c = 14.1, sum = 22.1
 *
 * c = 4.7;
 * b = 6.7
 *
 * a = 40.2
 * sum = 22.1
 */

// Sơ đồ 3 khối

/**
 * INPUT: số ngày làm, lương 1 ngày
 *
 * PROCESS:
 *      1. tìm cách lấy đc input (hardcode)
 *      2. tính lương : số ngày làm * lương 1 ngày
 *      3. In lương tính đc ra màn hình
 *
 * OUTPUT: tính tổng lương
 */

// hàm
function calcSalary() {
  var input = document.getElementById("txtWorkingDays");

  //   console.log(input.type, input.placeholder, input.value);

  var workingDays = input.value;
  var salaryPerDay = 100;

  var totalSalary = workingDays * salaryPerDay;

  console.log("Tổng lương tính được là: ", totalSalary);
}

// events: click, mouseover, mouseout, keyup, keydown, keypress...

// var n = 42;

// var num1 = n % 10; // 2
// var num2 = Math.floor(n / 10); // 4

// Math.ceil()
// Math.round()
