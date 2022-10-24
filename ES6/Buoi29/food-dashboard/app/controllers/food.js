import Food from '../models/foodModel.js';
import FoodList from '../models/foodListModel.js';

window.DangXuat = () => {
    alert('đã thoát');
}

let loadData = () => {
    return JSON.parse(localStorage.getItem("foodList"));
}


// danh sách dữ liệu thức ăn để hiển thị ra màn hình.
let dsMonAn = new FoodList(loadData());

// method POST
document.querySelector("#btnThemMon").onclick = () => {

    //listFood = loadData();

    //DOM tới input lấy giá trị
    let foodId = document.querySelector("#foodID").value;
    let tenMon = document.querySelector("#tenMon").value;
    let loai = document.querySelector("#loai").value;
    let giaMon = document.querySelector("#giaMon").value;
    let khuyenMai = document.querySelector("#khuyenMai").value;
    let tinhTrang = document.querySelector("#tinhTrang").value;
    let hinhMon = document.querySelector("#hinhMon").value;
    let moTa = document.querySelector("#moTa").value;

    //khai báo và gán dữ liệu cho đối tượng food
    let food = new Food(foodId, tenMon, loai, giaMon, khuyenMai, tinhTrang, hinhMon, moTa);
    // cách viết es5
    // listFood.push(food);

    // cách viết es6
    // listFood = [...listFood, food];
    dsMonAn.themMonAn(food)

    // gọi hàm lưu data lên localstorage
    saveData(dsMonAn.foodList)

    //gọi data từ localstorage
    showData(dsMonAn.foodList);
}

//tạo hàm get data từ localstorge
let showData = (getListFood) => {

    //let getListFood = JSON.parse(localStorage.getItem("foodList"));

    let ketQua = "";

    if (getListFood) {
        getListFood.map(item => {
            ketQua += `
        <tr>
            <td>${item.maMon}</td>
            <td>${item.tenMon}</td>
            <td>${item.loaiMon === "loai1" ? "Chay" : "Mặn"}</td>
            <td>${item.giaMon}</td>
            <td>${item.khuyenMai} %</td>
            <td>${(item.giaMon * (100 - item.khuyenMai) / 100)}</td>
            <td>${item.tinhTrang === 0 ? "Hết" : "Còn"}</td>
            <td>
            <button class="btn btn-success" data-toggle="modal"
          data-target="#exampleModal" onclick="layThongTinMonAn(${item.maMon})" >Sửa</button>
            <button class="btn btn-danger" onclick="xoaMonAn(${item.maMon})">Xóa</button>
            </td>
        </tr>
        `
        })
    }

    document.querySelector("#tbodyFood").innerHTML = ketQua;

}

let saveData = (data) => {
    localStorage.setItem("foodList", JSON.stringify(data));
}

window.layThongTinMonAn = (maMon) => {
    document.querySelector('#btnThemMon').style.display = 'none';
    document.querySelector('#btnCapNhat').style.display = 'inline';
    document.querySelector("#foodID").disabled = "disabled";

    //listFood = loadData();

    //C1: tìm bằng index 
    // let foodIndex = listFood.findIndex(item => item.maMon == maMon);
    // listFood[foodIndex]

    //C2: tìm đối tượng
    let food = dsMonAn.foodList.find(item => item.maMon == maMon);

    //destructuring
    let { tenMon, loaiMon, giaMon, khuyenMai, tinhTrang, hinhMonAn, moTa } = food;

    document.querySelector("#foodID").value = maMon;
    document.querySelector("#tenMon").value = tenMon;
    document.querySelector("#loai").value = loaiMon;
    document.querySelector("#giaMon").value = giaMon;
    document.querySelector("#khuyenMai").value = khuyenMai;
    document.querySelector("#tinhTrang").value = tinhTrang;
    document.querySelector("#hinhMon").value = hinhMonAn;
    document.querySelector("#moTa").value = moTa;
}

document.querySelector("#btnCapNhat").onclick = () => {
    // listFood = loadData();

    //DOM tới input lấy giá trị
    let foodId = document.querySelector("#foodID").value;
    let tenMon = document.querySelector("#tenMon").value;
    let loai = document.querySelector("#loai").value;
    let giaMon = document.querySelector("#giaMon").value;
    let khuyenMai = document.querySelector("#khuyenMai").value;
    let tinhTrang = document.querySelector("#tinhTrang").value;
    let hinhMon = document.querySelector("#hinhMon").value;
    let moTa = document.querySelector("#moTa").value;

    //ES5
    //tìm đến đối tượng food
    // let food = listFood.find(item => item.maMon == foodId);

    // food.tenMon = tenMon;
    // food.loaiMon = loai;
    // food.giaMon = giaMon;
    // food.khuyenMai = khuyenMai;
    // food.tinhTrang = tinhTrang;
    // food.hinhMonAn = hinhMon;
    // food.moTa = moTa;

    dsMonAn.suaMonAn(foodId, tenMon, loai, giaMon, khuyenMai, tinhTrang, hinhMon, moTa)

    //===============================

    // let foodIndex = listFood.findIndex(item => item.maMon == maMon);
    // listFood[foodIndex].tenMon = tenMon;
    // listFood[foodIndex].loaiMon = loai;
    // listFood[foodIndex].giaMon = giaMon;
    // listFood[foodIndex].khuyenMai = khuyenMai;
    // listFood[foodIndex].tinhTrang = tinhTrang;
    // listFood[foodIndex].hinhMonAn = hinhMon;
    // listFood[foodIndex].moTa = moTa;


    // gọi hàm lưu data lên localstorage
    saveData(dsMonAn.foodList)

    //gọi data từ localstorage
    showData(dsMonAn.foodList);

}

window.xoaMonAn = (maMon) => {
    // lấy dữ liệu từ localStorage
    //listFood = loadData();

    //C1 xóa bằng splice
    // let foodIndex = listFood.findIndex(item => item.maMon == maMon);
    //listFood.splice(foodIndex, 1);

    //C2 filter ngược
    // let arrayFood = listFood.filter(item => item.maMon != maMon);

    dsMonAn.xoaMonAn(maMon);

    // gọi hàm lưu data lên localstorage
    saveData(dsMonAn.foodList)

    //gọi data từ localstorage
    showData(dsMonAn.foodList);
}

document.querySelector("#selLoai").onchange = () => {
    let valueSel = document.querySelector("#selLoai").value;

    //=========================
    //listFood = loadData();
    // if (valueSel == "all") {
    //     arrayFood = listFood;
    // } else {
    //     arrayFood = listFood.filter(item => item.loaiMon == valueSel);
    // }

    //===============
    // let arrayFood = [];

    // arrayFood = listFood.filter(item => item.loaiMon == valueSel);

    // if (valueSel == "all") {
    //     arrayFood = listFood;
    // }

    //======================
    // let arrayFood = valueSel == "all" ? listFood : listFood.filter(item => item.loaiMon == valueSel);

    let arrayFood = dsMonAn.timMonAn(valueSel);
    showData(arrayFood);

}

window.onload = showData(dsMonAn.foodList);
