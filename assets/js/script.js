var pageContentEl =  document.querySelector("#page-content");
var buttonContainer =  document.querySelector("#button-container")
var buttonStartEl = document.querySelector("#btna");
var counterEl = document.querySelector("#timer-count-down")
var buttonContainerEl = document.querySelector("#btn-container")
var counter = 60;
var questions = ["question number 1","question number 2"];
var answerA = [
    {
        "optionA":"this is answer a for the first question",
        "answer-id":"correct"
    },
    {
        "optionA":"this is anwer a for the second question",
        "answer-id":"correct"
    }
];
var answerB = [
    {
        "optionB":"this is answer b for the first question",
        "answer-id":"correct"
    },
    {
        "optionB":"this is anwer b for the second question",
        "answer-id":"correct"
    }
];

var answerC  = [
    {
        "optionC":"this is answer b for the first question",
        "answer-id":"correct"
    },
    {
        "optionC":"this is anwer b for the second question",
        "answer-id":"correct"
    }
];

var answerD  = [
    {
        "optionD":"this is answer b for the first question",
        "answer-id":"correct"
    },
    {
        "optionD":"this is anwer b for the second question",
        "answer-id":"correct"
    }
];



var timerStarts = function(counter){
    console.log("entered time starts")
    setInterval(timerCountdown, 1000)
    function timerCountdown () {
        counterEl.innerHTML  = counter;
        counter = counter-1
    }
    return counter;
}

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
    // counterEl.innerHTML = counter;
    timerStarts(counter);
    insertElements();

}

var insertElements=  function(){
    console.log("insert elements")

    // insert questions 
    var questionContent =  pageContentEl.querySelector("#question-content");
    questionContent.innerHTML = questions[0];

    // remove instructions 
    buttonContainer.querySelector("#instructions").remove()

    // create button element then insert button to div area
    var firstSelection = document.createElement("button");
    firstSelection.className = "btn";
    firstSelection.textContent = answerA[0].optionA;
    firstSelection.setAttribute("answer-id", answerA[0]["answer-id"]);
    buttonContainer.appendChild(firstSelection);


    var secondSelection = document.createElement("button");
    secondSelection.className = "btn";
    secondSelection.textContent = answerB[0].optionB;
    secondSelection.setAttribute("answer-id", answerB[0]["answer-id"]);
    buttonContainer.appendChild(secondSelection);

    var thirdSelection = document.createElement("button");
    thirdSelection.className = "btn";
    thirdSelection.textContent = answerC[0].optionC;
    thirdSelection.setAttribute("answer-id", answerC[0]["answer-id"]);
    buttonContainer.appendChild(thirdSelection);

    var fourthSelection = document.createElement("button");
    fourthSelection.className = "btn";
    fourthSelection.textContent =  answerD[0].optionD;
    fourthSelection.setAttribute ("answer-id",answerD[0]["answer-id"]);
    buttonContainer.appendChild(fourthSelection);
    
}


pageContentEl.addEventListener("click" , answersButtonHandler);
buttonStartEl.addEventListener("click", startQuiz);