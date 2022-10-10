

document.getElementById("cal").addEventListener("click", function () {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  var imgOutput = document.getElementById("outputIMG");
  var result = document.getElementById("output");

  var heightStatus = false;
  var weightStatus = false;

  if (height == "" || isNaN(height) || height <= 0) {
    alert("Please provide a valid height");
  } else {

    heightStatus = true;
  }

  if (weight == "" || isNaN(weight) || weight <= 0) {
    alert("Please provide a valid weight");

  } else {

    weightStatus = true;
  }

  if (heightStatus && weightStatus) {
    const bmi = (weight / (height * height / 10000)).toFixed(2);

    document.getElementById("result").style.display = "none";

    if (bmi < 18.5) {
      result.innerHTML = "Under weight : " + bmi;
      imgOutput.src = "./img/body-1.png";
    } else if (bmi >= 18.5 && bmi < 24) {
      result.innerHTML = "Normal : " + bmi;
      imgOutput.src = "./img/body-2.png";
    } else if (bmi >= 24 && bmi < 30) {
      result.innerHTML = "Over weight : " + bmi;
      imgOutput.src = "./img/body-3.png";
    } else if (bmi >= 30 && bmi < 35) {
      result.innerHTML = "Severe obesity : " + bmi;
      imgOutput.src = "./img/body-4.png";
    } else if (bmi >= 35 && bmi < 40) {
      result.innerHTML = "Morbid obesity : " + bmi;
      imgOutput.src = "./img/body-5.png";
    } else {
      result.innerHTML = "Super obesity : " + bmi;
      imgOutput.src = "./img/body-6.png";
    }

    setTimeout(function () {
      document.getElementById("result").style.display = "block";
    }, 500)



  }


});

