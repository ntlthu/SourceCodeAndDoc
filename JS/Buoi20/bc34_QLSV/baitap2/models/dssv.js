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
}
