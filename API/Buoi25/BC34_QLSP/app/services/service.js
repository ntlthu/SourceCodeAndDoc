function Service() {
  this.getListProduct = function () {
    return axios({
      url: "https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/products",
      method: "GET",
    });
  };

  this.deleteProductApi = function (id) {
    return axios({
      url: `https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/products/${id}`,
      method: "DELETE",
    });
  };

  this.addProductApi = function (product) {
    return axios({
      url: "https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/products",
      method: "POST",
      data: product,
    });
  };

  this.getProductById = function (id) {
    return axios({
      url: `https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/products/${id}`,
      method: "GET",
    });
  };

  this.updateProductApi = function (product) {
    return axios({
      url: `https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/products/${product.id}`,
      method: "PUT",
      data: product,
    });
  };
}
