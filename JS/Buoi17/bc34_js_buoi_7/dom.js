/**
 * Tag Name
 */
var tagButton = document.getElementsByTagName("button");
console.log(tagButton[1].innerHTML);

/**
 * Class name
 */
var tagClass = document.getElementsByClassName("btn");
console.log(tagClass[2].innerHTML);

/**
 * query selector
 */
var selector = document.querySelector(".container input#number").value;
console.log(selector);

/**
 * query selector all
 */
var selectorAll = document.querySelectorAll(".container button.btn");
console.log(selectorAll);

/**
 * Them so
 */
document.querySelector(".container button#btnThemSo").onclick = function () {
  console.log(123);
};

// function submit() {
//   console.log(123);
// }

//callback function
// document.querySelector("#btnSubmit").addEventListener("click", function () {
//   console.log(123);
// });

function submit() {
  console.log(123);
}

document.querySelector("#btnSubmit").addEventListener("click", submit);
