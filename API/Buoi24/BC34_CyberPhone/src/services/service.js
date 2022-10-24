function Service() {
  this.getListProduct = function () {
    /**
     * Promise (lời hứa) - ES6
     *    - Pending (chờ)
     *    - Resolve (Thành công)
     *    - Reject (Thất hứa)
     */

    //request
    return axios({
      url: "https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/products",
      method: "GET",
    });
  };
}
