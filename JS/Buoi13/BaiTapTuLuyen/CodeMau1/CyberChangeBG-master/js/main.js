var clickMe = document.getElementById('clickMe')
var reset = document.getElementById('resetForm')
var body = document.getElementById('main')
var content = document.getElementById("content");
body.style.backgroundColor = '#000000'

clickMe.addEventListener('click', function () {
    // The maximum value: FFFFFF 
    //In JavaScript, add 0x before a hexadecimal number
    var maxVal = 0xFFFFFF; // 16777215

    var randomNumber = Math.random() * maxVal;
    // convert the floating number to an integer 
    randomNumber = Math.floor(randomNumber);

    //convert integer to hex
    var randomColor = randomNumber.toString(16);

    body.style.backgroundColor = "#" + randomColor;
    body.style.transition = '1s'
    reset.classList.remove('none')
    content.style.justifyContent = "space-between"
})

reset.addEventListener('click', function () {
    body.style.backgroundColor = '#000000'
    body.style.transition = '1s'
    reset.classList.add('none')
    content.style.justifyContent = "center"
})