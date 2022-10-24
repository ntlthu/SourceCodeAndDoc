
const data = axios({
    method: 'GET',
    url: 'https://shop.cyberlearn.vn/api/Product',
});

const dataTwo = axios({
    method: 'GET',
    url: 'https://shop.ccyberlearn.vn/api/Product/getbyid?id=1',
});


let productId = 2;

// bất đồng bộ
// waitting...
// callback hell
data.then(result => {

    return result;

}).catch(err => { })


// async await
const fetchData = async () => {
    try {
        const result = await axios({
            method: 'GET',
            url: 'https://shop.cyberlearn.vn/api/Product',
        });

        // console.log(result.data.content);

    } catch (err) {
        console.log(err)
    }

}
fetchData()

Promise.all([data, dataTwo]).then(result =>
    console.log(result)).catch(err => { 
        console.log(err)
    })
