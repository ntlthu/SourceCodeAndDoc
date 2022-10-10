//input:
var arrDiem = [];
var arrTen = [];

//primitive value: string,number,boolean, undefined 
//reference value: object, array ,...

//IIFE
(function getInputValue() {
    //Dom đến tất cả các thẻ tdTen
    var arrTdTen = document.querySelectorAll('#tblBody td:nth-child(3)');
    console.log(arrTdTen);
    //Duyệt qua các thẻ td để đưa các giá trị innerHTML vào mảng Tên
    //  0   1  2 ...
    // [td,td,td,...]
    for (var index = 0; index < arrTdTen.length; index++) {
        var td = arrTdTen[index];
        var hoTen = td.innerHTML;
        arrTen.push(hoTen);
    }
    console.log(arrTen)

    //Điểm => lấy danh sách điểm
    var arrTdDiem = document.querySelectorAll('#tblBody td:nth-child(4)');

    for (var index = 0; index < arrTdDiem.length; index++) {

        var diem = Number(arrTdDiem[index].innerHTML);
        arrDiem.push(diem);
    }
    console.log(arrDiem);
})()

// getInputValue();

document.querySelector('#btnSVCaoDiemNhat').onclick = function () {
    //Tìm sinh viên có điểm cao nhất
    //input: arrDiem[], arrTen []
    //arrTen = ['Nguyễn Văn A', 'Đỗ Văn Nhơn', 'Vin Thị Liên', 'Đen Thị Giàu', 'Ngô Văn Mạnh', 'Văn Sỹ Lâm', 'Bùi Đình Sen']
    // arrDiem = [6.4, 8.2, 3.4, 9.8, 2.4, 1.4, 9.4]
    //output: index (Vị trí của người có điểm cao nhất)
    var indexMax = 0; //Mặc định vị trí đầu tiên có điểm cao nhất
    var maxScore = arrDiem[indexMax];
    //process: Xử lý
    for (var index = 0; index < arrDiem.length; index++) {
        if (arrDiem[index] > maxScore) {
            //Tìm thấy đứa có điểm lớn maxScore (Gán lại indexMax và maxScore)
            maxScore = arrDiem[index];
            indexMax = index;
        }
    }
    //Hiển thị dữ liệu ra giao diện
    document.querySelector('#svGioiNhat').innerHTML = arrTen[indexMax] + ' - ' + arrDiem[indexMax];

}


document.querySelector('#btnSVThapDiemNhat').onclick = function () {
    //xác định input output 
    //input: arrDiem[], arrTen []
    //arrTen = ['Nguyễn Văn A', 'Đỗ Văn Nhơn', 'Vin Thị Liên', 'Đen Thị Giàu', 'Ngô Văn Mạnh', 'Văn Sỹ Lâm', 'Bùi Đình Sen']
    // arrDiem = [6.4, 8.2, 3.4, 9.8, 2.4, 1.4, 9.4]
    //output: index của sinh viên điểm thấp nhất
    var minScore = arrDiem[0];
    var indexMin = 0;
    //process
    for (var index = 0; index < arrDiem.length; index++) {
        if (arrDiem[index] < minScore) {
            //Nếu có điểm thấp hơn minScore
            minScore = arrDiem[index];
            indexMin = index;
        }
    }

    //In sinh viên yếu nhất ra giao diện
    document.querySelector('#svYeuNhat').innerHTML = arrTen[indexMin] + ' - ' + arrDiem[indexMin];
}


document.querySelector('#btnSoSVGioi').onclick = function () {
    //input: arrDiem, diemGioi = 8
    // arrDiem = [6.4, 8.2, 3.4, 9.8, 2.4, 1.4, 9.4]
    //output: soluong: number
    var output = 0;
    //process: 
    output = demSinhVienGioi(arrDiem, 8);
    console.log(output);
    //Hiện output ra giao diện
    document.querySelector('#soSVGioi').innerHTML = output + 'sinh viên giỏi';
}

document.querySelector('#btnSVDiemHon5').onclick = function () {
    //input: arrDiem[], arrTen []
    //arrTen = ['Nguyễn Văn A', 'Đỗ Văn Nhơn', 'Vin Thị Liên', 'Đen Thị Giàu', 'Ngô Văn Mạnh', 'Văn Sỹ Lâm', 'Bùi Đình Sen']
    // arrDiem = [6.4, 8.2, 3.4, 9.8, 2.4, 1.4, 9.4]

    //output: ['sinh vien 1','sinh vien2'], string =  <p>Sinh vien 1</p> <p>Sinh vien 2</p>
    var output = '';
    output = layDanhSachSinhVienHon5(arrDiem,arrTen);

    document.querySelector('#dsDiemHon5').innerHTML = output;
}


document.querySelector('#btnSapXepTang').onclick = function () {
    //input:  // arrDiem = [6.4, 8.2, 3.4, 9.8, 2.4, 1.4, 9.4]
    //output: Danh sách điểm tăng dần []
    var output = sortTheoSo(arrDiem);
    [1,2,3,4,5]
    for(var index = 0 ;index < output.length ;index++){
        document.querySelector('#dtbTang').innerHTML += '<p>'+output[index]+'</p>'
    }


}


// b = 98
//Giả sử a  = 97

// c = 99

//Học cách sử dụng hàm sort
// var arrTen = ['Nguyen' , 'nam', 'Minh', 'Tung', 'Khai']
// function sortTheoTen () {
//     var result = arrTen.sort(function(ten,tenTruoc) {
//         //Biến đổi tên thành chữ thường: 'NAm' => nam
//         ten = ten.toLowerCase();
//         tenTruoc = tenTruoc.toLowerCase();
//         if(ten < tenTruoc) {
//             return -1;
//         }
//         return 1;
//         //return về số âm => hoán đổi vị trí 
//         //return về số dương sẽ giữ nguyên
//     })
//     console.log(result);
// }

// sortTheoTen();



console.log(_);

var arrNumber = [5,3,5,6,2,4,5,6];

var result = _.sortBy(arrNumber);

console.log('result',result);

//Tìm max
var max = _.max(arrNumber);

console.log('max',max);