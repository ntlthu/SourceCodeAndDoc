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
}
