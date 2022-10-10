
var DateNewYear = new Date("Jan 1, 2023 00:00:00").getTime();
var DateChristmas = new Date("Dec 25, 2022 00:00:00").getTime();
var DateHalloween = new Date("Oct 1, 2022 00:00:00").getTime();
var DateValentine = new Date("Feb 14, 2022 00:00:00").getTime();
var countDownDate = new Date().getTime();
var titleDate ="";
var body = document.getElementById('main');


var day = document.getElementById('day');
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

var select_time = document.getElementById('selectTime');

function handleChange() {
    var value = select_time.value;
    if (value == 0) {
        countDownDate = DateNewYear;
        titleDate = 'HAPPY NEW YEAR 2023'
        body.style.backgroundImage = "url('./img/new-year.jpg')"
    } else if (value == 1) {
        countDownDate = DateChristmas;
        titleDate = 'HAPPY CHRISTMAS'
        body.style.backgroundImage = "url('./img/christmas.jpeg')"
    } else if (value == 2) {
        countDownDate = DateHalloween;
        titleDate = 'HAPPY HALLOWEEN'
        body.style.backgroundImage = "url('./img/halloween.jpeg')"
    } else if (value == 3) {
        countDownDate = DateValentine
        titleDate = 'HAPPY VALENTINE'
        body.style.backgroundImage = "url('./img/valenteen.jpeg')"
    } else {
        alert("Please select event!")
    }

    countDown()

}


function countDown(){
    var x = setInterval(function () {

        // get current day
        var now = new Date().getTime();


        var distance = countDownDate - now;

        //check event expired
        if (distance < 0) {
            document.getElementById("timer").innerHTML = "event expired";
            day.innerHTML = "---";
            hour.innerHTML = "---";
            minute.innerHTML = "---";
            second.innerHTML = "---";
        } else {
            document.getElementById("timer").innerHTML = "";

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);


            day.innerHTML = days + "d";
            hour.innerHTML = hours + "h";
            minute.innerHTML = minutes + "m";
            second.innerHTML = seconds + "s";


            // Reset
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = titleDate;
                day.innerHTML = "---";
                hour.innerHTML = "---";
                minute.innerHTML = "---";
                second.innerHTML = "---";
            }
        }


    }, 1000);
}