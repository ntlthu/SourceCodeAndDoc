function DanhSachSinhVien() {
  this.arr = [];

  this.themSV = function (sv) {
    this.arr.push(sv);
  };

  this._timViTriSV = function (maSV) {
    /**
     * Tìm vị trí
     * - Tạo 1 biến index = -1;
     * - Duyệt mảng arr, i
     * - Kiểm tra sv.maSV trùng maSV?
     * => True: Cập nhật index = i
     */
    var index = -1;

    this.arr.forEach(function (sv, i) {
      if (sv.maSV === maSV) {
        index = i;
      }
    });

    return index;
  };

  this._xoaSV = function (maSV) {
    var index = this._timViTriSV(maSV);

    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };

  this._layThongTinSV = function (maSV) {
    var sv = null;
    //tìm vị trí sinh viên
    var index = this._timViTriSV(maSV);

    if (index !== -1) {
      sv = this.arr[index];
    }

    return sv;
  };

  this._capNhatSinhVien = function (sv) {
    //tim vi tri
    var index = this._timViTriSV(sv.maSV);

    if (index !== -1) {
      this.arr[index] = sv;
    }
  };

  this._timKiemSinhVien = function (keyword) {
    /**
     * 0. tạo mangTimKiem = []
     * 1. Duyệt mảng this.arr => sv
     * 2. Kiểm tra sv.tenSV trùng với lại keyword?
     *      => true => thêm sv vào mangTimKiem;
     * 3. trả về mangTimKiem;
     */
    var mangTimKiem = [];

    this.arr.forEach(function (sv) {
      //chuyen tenSV => chu thuong
      var nameLowerCase = sv.tenSV.toLowerCase();
      var keywordLowerCase = keyword.toLowerCase();
      if (nameLowerCase.indexOf(keywordLowerCase) !== -1) {
        mangTimKiem.push(sv);
      }
    });

    return mangTimKiem;
  };
}
