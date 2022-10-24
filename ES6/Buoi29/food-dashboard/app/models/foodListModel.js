
class FoodList {
    constructor(foodList) {

        //danh sách món ăn dc lưu trong localStorage
        this.foodList = foodList;
    }

    themMonAn(food) {
        this.foodList = [...this.foodList, food];
    }

    suaMonAn(foodId, tenMon, loai, giaMon, khuyenMai, tinhTrang, hinhMon, moTa) {
        let food = this.foodList.find(item => item.maMon == foodId);

        food.tenMon = tenMon;
        food.loaiMon = loai;
        food.giaMon = giaMon;
        food.khuyenMai = khuyenMai;
        food.tinhTrang = tinhTrang;
        food.hinhMonAn = hinhMon;
        food.moTa = moTa;
    }

    xoaMonAn(maMon) {
        //C1 xóa bằng splice
        let foodIndex = this.foodList.findIndex(item => item.maMon == maMon);
        this.foodList.splice(foodIndex, 1);


        //C2 filter ngược
        //let arrayFood = foodList.filter(item => item.maMon != maMon);
    }

    timMonAn(valueSel) {
        let arrayFood = valueSel == "all" ? this.foodList : this.foodList.filter(item => item.loaiMon == valueSel);

        return arrayFood;
    }
}


export default FoodList
