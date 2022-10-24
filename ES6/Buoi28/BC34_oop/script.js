// khai báo đối tượng 
// khi dùng trong những trường hợp tạm thời, lưu dữ liệu ít.
let sinhVien = {

    // thuộc tính (properties)
    hoTen: "Nguyễn Văn An",
    tuoiTac: 30,

    // phương thức (methods)
    getThongTin() {
        console.log(this.hoTen, this.tuoiTac)
    }
}


















// lớp đối tượng (class object)
// ES5 
// tạo lớp đối tượng
function SinhVien(hoTen, tuoiTac) {
    //thuộc tính
    this.hoTen = hoTen;
    this.tuoiTac = tuoiTac;

    let getName = () => {
        console.log("Hello");
    }

    //phương thức
    let getLop = () => {
        getName

    }

    getLop()
}

//phương thức
SinhVien.prototype.getThongTin = () => {
    console.log(this.hoTen, this.tuoiTac)
}

// gọi đối tượng
let sinhVienOne = new SinhVien("Nguyễn Văn A", 20);

// let sinhVienTwo = new SinhVien("", 0);
// sinhVienTwo.hoTen = "Trần Văn B";

// console.log("sinh viên thứ nhất: ", sinhVienOne);
// console.log("sinh viên thứ hai: ", sinhVienTwo)




// lớp đối tượng (class object)
// ES6 
// tạo lớp đối tượng
class SinhVienEs {

    //hàm khởi tạo giá trị ban đầu
    // thuộc tính
    constructor(maSinhVien, hoTen, tuoiTac) {
        this.maSinhVien = maSinhVien;
        this.hoTen = hoTen;
        this.tuoiTac = tuoiTac;

    }

    // let lopHoc = "1A";

    getName() {
        console.log(this.hoTen);
    }

    //phương thức
    getThongTin(thamSo) {
        this.getName();
    }

}

let sinhVienThree = new SinhVienEs(1, "Nguyễn Tèo", 20);
// sinhVienThree.tuoiTac = 100;
// sinhVienThree.getThongTin("Tham số");



//OOP 
// 1: Kế thừa
// 2: Ghi đè, đa hình
// 3: Trừu tượng
// 4: Đóng gói 

class HocVien extends SinhVienEs {

    constructor(maSinhVien, hoTen, tuoiTac, lopHoc) {
        // lấy lại tất cả thuộc tính của đối tượng cha về đối tượng con
        super(maSinhVien, hoTen, tuoiTac);
        this.lopHoc = lopHoc
    }

    // ghi đè phương thức từ hàm cha
    getThongTin() {
        console.log("Hello")
    }

    getTenHocVien() {
        console.log(this.hoTen);
    }
}

let hocVien = new HocVien(1, "tên học viên", 100, "lớp 12")
hocVien.getThongTin()



class HocVienHai extends SinhVienEs {

    constructor(maSinhVien, hoTen, tuoiTac, lopHoc) {
        // lấy lại tất cả thuộc tính của đối tượng cha về đối tượng con
        super(maSinhVien, hoTen, tuoiTac);
        this.lopHoc = lopHoc
    }

    // ghi đè phương thức từ hàm cha
    getThongTin() {
        console.log("cybersoft")
    }

    getTenHocVien() {
        console.log(this.hoTen);
    }
}

