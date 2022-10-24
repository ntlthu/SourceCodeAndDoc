// 1: let , const   ====>   var  **xài nhiều
// 2: arrow function             ** xài nhiều
// 3: Default parameter
// 4: Rest parameter             
// 5: Spread oparator            ** xài nhiều
// 6: Destructuring              ** xài nhiều
// 7: String template            ** xài nhiều
// 8: Object literal : gán nhánh những biến trùng tên với thuộc tính object       

/* 
    1: cơ chế hoisting
        + var:  tự động đưa các biến được khai báo lên phía trên
        + let, const: không có cơ chế như var, đưa vào (vùng nhớ chết)
    2: khai báo lại
        + var: cho phép khai báo trùng tên biến
        + let, const: không có phép khai báo trùng tên biến
    3: phạm vi hoạt động
        + var:  global scope
        + let, const: block scope
*/
//var title;

// function getNumber() {
//     // let number = 1;

//     if (true) {
//         let number = 2;
//     }

//     console.log(number);
// }

//const không cho phép gán lại giá trị
const title = "Cybersoft";

// đối tượng => thuộc tính id
// const có thể thay đổi được giá trị trong một thuộc tính của đối tượng
// const object = {
//     id: 1,
//     userName: "Nguyễn Văn A"
// };

// object = { id : 2}

// object.id = 2;



//khai báo function ES5
// closure function
function getNumber(number) {

    function sumNumber(numberTwo) {

        return number + numberTwo
    }

    return sumNumber;
}

// khai báo arrow function ES6
// const getNumberArrow = number = numberTwo => {

//     let title = "hello";
//     return number + numberTwo;
// }


let number = getNumber(10);

// console.log(number(20));


let object = {
    id: 1,
    userName: "Nguyễn Văn A",
    getNumber() {
        console.log("get object")
    },


    getName() {
        // thiS = this;
        // function getNameTwo() {
        //     console.log(this)
        //     console.log(thiS.userName)

        // }
        // getNameTwo();

        const getNumber = () => {
            console.log("get function")

        }

        console.log(getNumber());
    }
}


/// ============== bài tập đổi màu
//cách 1
// document.getElementById('span-color').addEventListener("click", () => {
//     document.getElementById('txt-h1').style.color = "pink";
// })

//cách 2
// let arrSpan = document.querySelectorAll('.span-color');

// for (let index = 0; index < arrSpan.length; index++) {

//     arrSpan[index].onclick = () => {
//         document.getElementById('txt-h1').style.color = arrSpan[index].id;
//     }

// }

// document.querySelector('.span-color')[0].onclick = () => {
//     document.getElementById('txt-h1').style.color = "pink";
// }

// cách 3
// const changeColor = (color) => {
//     document.querySelector('#txt-h1').style.color = color;
// }


// const getTitle = (title = "Hello") =>{

//     console.log(title);

// }



let toan = 5;
let hoa = 6;
let ly = 7;
let van = 10;
let theduc = 1;

// rest parameter: nhận vào tham số bất kỳ 
// trả ra danh sách mảng tham số nhận vào không giới hạn độ dài
const getSum = (...rest) => {

    let tinhTong = 0;
    for (let index = 0; index < rest.length; index++) {
        tinhTong += rest[index];
    }
    console.log(rest)
    console.log(tinhTong)
}

let dia = 100;

// spread operator
// gán tất cả thuộc tính và giá trị của một biến hoặc đối tượng A sang biến hoặc đối tượng B (tách ra vùng nhớ độc lập)


// array
let arrNum = [2, 5, 7, 8];
let arrNumTwo = [...arrNum, 6, 7]


//array object
let arrA = [
    { id: 1, hoTen: "Sang", lopHoc: "2A" },
    { id: 2, hoTen: "Nam", lopHoc: "3A" }
]
let arrB = [...arrA];

// let arrB = [];

// for (let index = 0; index < arrA.length; index++) {

//     arrB.push(arrA)
// }

// có thể thêm thuộc tính mới cho đối tượng B
let a = { id: 1, hoTen: "Sang", lopHoc: "2A" };
let b = { id: 2 };

// a ={...a, bietDanh:"John Cena"}
let tuoi = 30;

b = { ...a, tuoi }; // ES6

 //ES5
// b = {
//     id: a.id,
//     hoTen: a.hoTen,
//     lopHoc: a.lopHoc,
//     tuoiTac
// }

//======= Destructuring

let { hoTen, id, lopHoc } = a;

// let hoTen = a.hoTen;
// let id = a.id;
// let lopHoc = a.lopHoc;

console.log(b);

