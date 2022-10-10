const questions = document.querySelectorAll(".question");

for (var i = 0; i < questions.length; i++) {
    const element = questions[i];
    const btn = questions[i].querySelector(".question-btn");
    btn.onclick = function(e){
        console.log(e)
        handleCollapse(element);
    }
    
}

function handleCollapse(element){
    for (var i = 0; i < questions.length; i++) {
          
        if (element !== questions[i]) {
            questions[i].classList.remove("show-text");
        }
    }
    element.classList.toggle("show-text");

}