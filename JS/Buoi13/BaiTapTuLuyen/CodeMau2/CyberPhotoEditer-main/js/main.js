const brightness = document.getElementById("brightness-slider");
const contrast = document.getElementById("contrast-slider");
const hue = document.getElementById("hue-slider");
const blur = document.getElementById("blur-slider");
const saturation = document.getElementById("saturation-slider");
const sepia = document.getElementById("sepia-slider");
const img = document.getElementById("img");
const inputURL = document.getElementById("search-box");
const searchBtn = document.getElementById("submit-button");

function searchImg() {
  img.src = inputURL.value;
  setDefaultValue();
  setTimeout(function(){
    inputURL.value = "";
  }, 10);
}
searchBtn.addEventListener("click", searchImg);

function updateImage() {
  var filtered =
    " brightness("+brightness.value+ "%) " +
    " contrast("+contrast.value +"%) "+
    " blur("+blur.value+"px) "+
    " hue-rotate("+hue.value+"deg) " +
    " saturate("+saturation.value+"%) " +
    " sepia("+sepia.value+"%) ";
  img.style.filter = filtered;
}

function setDefaultValue() {
  brightness.value = 100;
  contrast.value = 100;
  hue.value = 0;
  blur.value = 0;
  saturation.value = 100;
  sepia.value = 0;
  updateImage();
}


