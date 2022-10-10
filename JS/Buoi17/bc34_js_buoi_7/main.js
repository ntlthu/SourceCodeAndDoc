// var u1 = "Nguyen";
// var u2 = "Tung";
// var u3 = "Thien";
// var u4 = "Van";
// var u5 = "Tuan";

/**
 * Array (mảng) - danh sach
 */
var listUser = ["Nguyen", "Tung", "Thien", "Van", "Tuan", "Buoi"];
console.log(listUser);
console.log("Do dai mang: " + listUser.length);

// console.log(listUser[0]);
// console.log(listUser[1]);
// console.log(listUser[2]);
// console.log(listUser[3]);
// console.log(listUser[4]);

//listUser[0]: Nguyen
//listUser[1]: Tung
//listUser[2]: Thien
for (var i = 0; i < listUser.length; i++) {
  console.log("listUser[" + i + "]: " + listUser[i]);
}

var listNumber = [];
listNumber.push(10);
listNumber.push(50);
listNumber.push(100);
console.log(listNumber);

for (var i = 0; i < listNumber.length; i++) {
  console.log(listNumber[i]);
}
