//jsDoc
/**
 * Hàm nhận vào 1 mảng điểm [1,2,3,4,5] và diemGioi = 8
 * @param {*} arrDiem arrDiem: là mảng number người dùng truyền vào [1,2,3,4,5]
 * @param {*} diemGioi diemGioi: là giá trị định nghĩa giỏi. Ví dụ: 8
 * @returns Kết quả trả về là số lượng sinh viên giỏi trong mảng
 */

function demSinhVienGioi(arrDiem, diemGioi) { //input? arrDiem = [1,2,3,4,8,9,10], diemGioi = 10 
    //output: soLuongSVGioi: number
    var soLuongSVGioi = 0;
    for (var index = 0; index < arrDiem.length; index++) {
        if (arrDiem[index] >= diemGioi) { //Nếu điểm trong mảng lớn hơn hoặc = chuẩn diemGioi => giỏi => tăng số lượng
            soLuongSVGioi += 1;
        }
    }
    return soLuongSVGioi;
}

/**
 * Hàm nhận vào arrDiem = [1,2,5,7,8] và arrTen = ['a','b','c','d','e']
 * @param {*} arrDiem arrDiem: mảng chứa các điểm sinh viên [1,2,5,7,8]
 * @param {*} arrTen arrTen: mảng chứa các tên sinh viên ['a','b','c','d','e']
 * @returns trả về html các thẻ p nối tiếp nhau <p>a</p> <p>b</p> <p>c</p>
 */

function layDanhSachSinhVienHon5(arrDiem, arrTen) { // input : [1,2,3,4,8,9] - ['a','b','c','d','e','f']
    //output: html = '<p>A</p> <p>B</p>....':string
    var html = '';

    for (var index = 0; index < arrDiem.length; index++) {
        //Mỗi lần duyệt lấy điểm của các phần tử ra kiểm tra so với 5
        if (arrDiem[index] > 5) {
            //Nếu vị trí index đó hợp lệ thì lấy tên tại vị trí đó đưa vào output
            html += '<p>' + arrTen[index] + '</p>'
        }
    }
    return html;
}

function sortTheoTen(arrTen) {
    var result = arrTen.sort(function (ten, tenTruoc) {
        //Biến đổi tên thành chữ thường: 'NAm' => nam
        ten = ten.toLowerCase();
        tenTruoc = tenTruoc.toLowerCase();
        if (ten < tenTruoc) {
            return -1;
        }
        return 1;
        //return về số âm => hoán đổi vị trí 
        //return về số dương sẽ giữ nguyên
    })
    return result;
}

function sortTheoSo(arrNumber) {
    var result = arrNumber.sort(function (num, numTruoc) {
        return num - numTruoc
    })
    return result;
}