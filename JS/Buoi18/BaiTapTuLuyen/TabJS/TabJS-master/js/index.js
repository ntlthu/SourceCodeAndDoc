const getAbout = document.querySelector(".about");
const getButtons = document.querySelectorAll(".tab-btn");
const getArticles = document.querySelectorAll(".content");
getAbout.addEventListener("click", function (e) {
  const getId = e.target.dataset.id;
  if (getId) {
    // remove selected from other buttons
    getButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    getArticles.forEach(function (article) {
      article.classList.remove("active");
    });
    const getElement = document.getElementById(getId);
    getElement.classList.add("active");
  }
});
