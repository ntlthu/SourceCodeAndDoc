//tsc -w
//ES10
// [khai báo biến] [tên biến]: [kiểu dữ liệu]
// primitive value
let title = "hello";
let number = 123;
let dungsai = true;
// array value
let mangSo = [1, 10, 3, 4];
let mangChuoi = ["a", "hello", "b"];
let mangBool = [true, false];
let empty = null;
let undefine = undefined;
let nv = { id: 1, hoTen: "Nguyen Van A", tuoi: 1, lopHoc: "1A" };
//let nv = {id: 1, hoTen: "Nguyen Van A", tuoi: 1,lopHoc: "1A"}
//tuple
let state = [1, "setState"];
// number , string, boolean => 1 biến duy nhất
//union type, utili type
let responseData = "true";
// any nhận bất kỳ giá trị gì
// dev khoái xài, lead ko vui 
let random = 123;
// check datatype để sử dụng
let randomUn = 123;
//symbol: string, number, boolean, null và undefined
if (typeof randomUn == "symbol") {
    console.log(randomUn);
}
//function 
// có giá trị trả về
const getNumber = (a, b) => {
    return a + b;
};
// không có giá trị trả về
const getTitle = () => {
    console.log("hello");
};
//HOF
const tinhTong = (hamTinhTong) => {
};
tinhTong(getNumber);
let hs = { id: 1, hoTen: "A", tuoi: 10 };
let sv = { id: 1, hoTen: "A", tuoi: 10, maSinhVien: 123 };
// lớp đối tượng
// tính kế thừa implements của interface
class NhanVien {
    constructor() {
        this.heSoLuong = 10; // tính đóng gói
        this.tinhLuong = () => {
            return this.luong * this.heSoLuong;
        };
    }
}
let newNhanVien = new NhanVien();
// newNhanVien.heSoLuong = 100;
// tính đa hình
class GiaoVien extends NhanVien {
    constructor() {
        super();
        // hoTen: string;
        // luong: number;
        // luongThuong: number;
        this.tinhLuong = () => {
            return this.heSoLuong + this.luong;
        };
    }
}
// generic
class List {
    constructor() {
        this.lstData = [];
        this.create = (item) => {
            this.lstData.push(item);
        };
        this.delete = (id) => {
            this.lstData = this.lstData.filter(n => n != id);
        };
    }
}
let nguoiDung = { id: 1, hoTen: "A" };
let danhSachNguoiDung = new List();
danhSachNguoiDung.create(nguoiDung);
let sanPham = { id: 1, nameProduct: "B" };
let danhSachSanPham = new List();
danhSachSanPham.create(sanPham);
