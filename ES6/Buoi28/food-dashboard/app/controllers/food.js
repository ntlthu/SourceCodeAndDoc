class Food {
    constructor(maMon, tenMon, loaiMon, giaMon, khuyenMai, tinhTrang, hinhMonAn, moTa) {
        this.maMon = maMon;
        this.tenMon = tenMon;
        this.loaiMon = loaiMon;
        this.giaMon = giaMon;
        this.khuyenMai = khuyenMai;
        this.tinhTrang = tinhTrang;
        this.hinhMonAn = hinhMonAn;
        this.moTa = moTa;
    }
}

// danh sách dữ liệu thức ăn để hiển thị ra màn hình.
let listFood = [];
// method POST
document.querySelector("#btnThemMon").onclick = () => {

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
    listFood = [...listFood, food];

    // gọi hàm lưu data lên localstorage
    saveData(listFood)

    //gọi data từ localstorage
    showData();
}

//tạo hàm get data từ localstorge
let showData = () => {

    let getListFood = JSON.parse(localStorage.getItem("foodList"));

    let ketQua = "";

    if (getListFood) {
        getListFood.map(item => {
            ketQua += `
        <tr>
            <td>${item.maMon}</td>
            <td>${item.tenMon}</td>
            <td>${item.loaiMon}</td>
            <td>${item.giaMon}</td>
            <td>${item.khuyenMai} %</td>
            <td>${(item.giaMon * (100 - item.khuyenMai) / 100)}</td>
            <td>${item.tinhTrang}</td>
            <td>
            <button class="btn btn-success" data-toggle="modal"
          data-target="#exampleModal" >Sửa</button>
            <button class="btn btn-danger">Xóa</button>
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

window.onload = showData();
