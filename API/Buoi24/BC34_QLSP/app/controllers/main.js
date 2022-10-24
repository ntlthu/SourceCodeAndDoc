var service = new Service();

function getEle(id) {
  return document.getElementById(id);
}

function fetchData() {
  service
    .getListProduct()
    .then(function (result) {
      renderHTML(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

fetchData();

function renderHTML(data) {
  var content = ``;

  data.forEach(function (product, index) {
    content += `
        <tr>
            <td>${index + 1}</td>
            <td>${product.tenSP}</td>
            <td>${product.gia}</td>
            <td>
                <img width="50px" src="./../../assets/img/${product.hinhAnh}" />
            </td>
            <td>${product.moTa}</td>
            <td>
              <button class="btn btn-danger" onclick="deleteProduct(${
                product.id
              })">Delete</button>
            </td>
        </tr>
    `;
  });

  getEle("tblDanhSachSP").innerHTML = content;
}

/**
 * Delete
 */
function deleteProduct(id) {
  service
    .deleteProductApi(id)
    .then(function () {
      //render list data
      fetchData();
    })
    .catch(function (error) {
      console.log(error);
    });
}

getEle("btnThemSP").addEventListener("click", function () {
  //Sửa Title
  document.getElementsByClassName("modal-title")[0].innerHTML = "Thêm SP";

  //Tạo nút "Add"
  var btnAdd = `<button class="btn btn-success" onclick="addProduct()">Add</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = btnAdd;
});

/**
 * Add Product
 */
function addProduct() {
  console.log(123);
}
