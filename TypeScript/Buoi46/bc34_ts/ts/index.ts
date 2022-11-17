//tsc -w
//ES10
// [khai báo biến] [tên biến]: [kiểu dữ liệu]
// primitive value
let title: string = "hello";
let number: number = 123;
let dungsai: boolean = true;
// array value
let mangSo: number[] = [1, 10, 3, 4];
let mangChuoi: string[] = ["a", "hello", "b"];
let mangBool: boolean[] = [true, false];

let empty: null = null;
let undefine: undefined = undefined;

// string title = "hello"; => c#, java

// reference value: object
type nhanVien = {
    id: number;
    hoTen: string;
    tuoi: number;
    lopHoc: string;
    ketHon?: boolean; // cho phép không cần truyền giá trị khi gọi
}

let nv: nhanVien = { id: 1, hoTen: "Nguyen Van A", tuoi: 1, lopHoc: "1A" };
//let nv = {id: 1, hoTen: "Nguyen Van A", tuoi: 1,lopHoc: "1A"}

//tuple
let state: [number, string] = [1, "setState"];

// number , string, boolean => 1 biến duy nhất
//union type, utili type
let responseData: string | number | boolean = "true";

// any nhận bất kỳ giá trị gì
// dev khoái xài, lead ko vui 
let random: any = 123;
// check datatype để sử dụng
let randomUn: unknown = 123;
//symbol: string, number, boolean, null và undefined
if (typeof randomUn == "symbol") {
    console.log(randomUn)
}

//function 
// có giá trị trả về
const getNumber = (a: number, b: number): number => {
    return a + b;
}
// không có giá trị trả về
const getTitle = (): void => {
    console.log("hello")
}

//HOF
const tinhTong = (hamTinhTong: (a: number, b: number) => number): void => {

}

tinhTong(getNumber);

//interface
interface hocSinh {
    id: number;
    hoTen: string;
    tuoi: number;
}

interface sinhVien extends hocSinh {
    maSinhVien: number
}

let hs: hocSinh = { id: 1, hoTen: "A", tuoi: 10 };
let sv: sinhVien = { id: 1, hoTen: "A", tuoi: 10, maSinhVien: 123 };
// 4 tính chất của lớp đối tượng
// 1: kế thừa
// 2: đa hình
// 3: trừu tượng
// 4: đóng gói

// tính trừu tượng
interface TinhLuong {
    tinhLuong: () => number
}

// lớp đối tượng
// tính kế thừa implements của interface
class NhanVien implements TinhLuong {
    constructor() {
    }
    public id: number | string;
    public hoTen: number | string;
    protected heSoLuong: number = 10; // tính đóng gói
    public luong: number;

    tinhLuong = (): number => {
        return this.luong * this.heSoLuong;
    }
}

let newNhanVien = new NhanVien();
// newNhanVien.heSoLuong = 100;

// tính đa hình
class GiaoVien extends NhanVien {
    constructor() {
        super()
    }
    // hoTen: string;
    // luong: number;
    // luongThuong: number;
    tinhLuong = (): number => {
        return this.heSoLuong + this.luong;
    }
}

interface User {
    id: number;
    hoTen: string;
}


interface Product {
    id: number;
    nameProduct: string;
}
// generic
class List<T> {
    constructor() { }
    lstData: T[] = [];

    create = (item: T): void => {
        this.lstData.push(item)
    }
    delete = (id: any): void => {
        this.lstData = this.lstData.filter(n => n != id);
    }
}

let nguoiDung: User = {id:1,hoTen:"A"};
let danhSachNguoiDung = new List<User>();
danhSachNguoiDung.create(nguoiDung);

let sanPham: Product = {id:1,nameProduct:"B"};
let danhSachSanPham = new List<Product>();
danhSachSanPham.create(sanPham)