var pageContentEl =  document.querySelector("#page-content");
var buttonStartEl = document.querySelector("#btna");
var counterEl = document.querySelector("#timer-count-down")
var buttonContainerEl = document.querySelector("#btn-container")
var counter = 60;
var questions = ["question number 1","question number 2"];
var answera = [
    {
        "answera":"this is answer a for the first question",
        "id":"correct"
    },
    {
        "answera":"this is anwer a for the second question",
        "id":"correct"
    }
]
var answerb = [
    {
        "answerb":"this is answer b for the first question",
        "id":"correct"
    },
    {
        "answerb":"this is anwer b for the second question",
        "id":"correct"
    }
]




var answersButtonHandler = function(event){
    console.log(event.target);
    var targetEl =event.target;
    console.log(targetEl)
}

// var startQuiz = function (){
//     console.log("quiz started");
// }

var startQuiz= function(event){
    console.log(event.target)
    console.log("quiz starts")
    counterEl.innerHTML = counter;
    insertElements();
}

var insertElements=  function(){
    console.log("insert elements")
    
}


pageContentEl.addEventListener("click" , answersButtonHandler);
buttonStartEl.addEventListener("click", startQuiz);