var pageContentEl =  document.querySelector("#page-content");
var buttonContainer =  document.querySelector("#button-container")
var buttonStartEl = document.querySelector("#btn-start");


//to select coutner
var counterEl = document.querySelector("#timer-count-down")
var buttonContainerEl = document.querySelector("#btn-container")
var counter = [];
var numberQuestions = 0;

var questions = ["question number 1","question number 2"];
var answerA = [
    {
        "optionA":"this is answer a for the first question",
        "answer-id":"wrong"
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
    counter = 60;
    console.log("entered time starts")
    setInterval(timerCountdown, 1000)
    
    function timerCountdown () {
        counterEl.innerHTML  = counter;
        counter = counter -1
    }
}


var answersButtonHandler = function(event){

   
    var targetEl =event.target;
 
    var choosenAnswer = targetEl.getAttribute("answer-id");
    console.log(choosenAnswer);

    if (choosenAnswer === "correct"){
        console.log("correct answer!")
    }
    else{
        console.log("wrong answer!")
        // addTime(counter);
    }
    // insertElements();
    insertAnswers();
}

var insertAnswers = function(){

    // insert questions 
    var questionContent =  pageContentEl.querySelector("#question-content");	
    questionContent.innerHTML = questions[numberQuestions];

    // insertAnswers 
    var firstSelection = pageContentEl.querySelector("#button-a");
    firstSelection.textContent = answerA[numberQuestions].optionA;
    firstSelection.setAttribute("answer-id", answerA[numberQuestions]["answer-id"]);

    var secondSelection = pageContentEl.querySelector("#button-b");
    secondSelection.textContent = answerB[numberQuestions].optionB;
    secondSelection.setAttribute("answer-id", answerB[numberQuestions]["answer-id"]);

    var thirdSelection = pageContentEl.querySelector("#button-c");
    thirdSelection.textContent = answerC[numberQuestions].optionC;
    thirdSelection.setAttribute("answer-id", answerC[numberQuestions]["answer-id"]);

    var fourthSelection = pageContentEl.querySelector("#button-d");
    fourthSelection.textContent = answerD[numberQuestions].optionD;
    fourthSelection.setAttribute("answer-id", answerD[numberQuestions]["answer-id"]);

    numberQuestions++
}


var startQuiz= function(event){

    timerStarts(counter);
}

var insertElements=  function(){

    // remove start button 
    buttonStartEl.remove();

    if (numberQuestions===0){
        buttonContainer.querySelector("#instructions").remove();
    }



    // create button element then insert button to div area
    var firstSelection = document.createElement("button");
    firstSelection.className = "btn";
    firstSelection.setAttribute("id", "button-a")
    buttonContainer.appendChild(firstSelection);


    var secondSelection = document.createElement("button");
    secondSelection.className = "btn";
    secondSelection.setAttribute("id", "button-b");
    buttonContainer.appendChild(secondSelection);

    var thirdSelection = document.createElement("button");
    thirdSelection.className = "btn";
    thirdSelection.setAttribute("id", "button-c");
    buttonContainer.appendChild(thirdSelection);

    var fourthSelection = document.createElement("button");
    fourthSelection.className = "btn";
    fourthSelection.setAttribute("id", "button-d")
    buttonContainer.appendChild(fourthSelection);
    
}


pageContentEl.addEventListener("click" , answersButtonHandler);
buttonStartEl.addEventListener("click", startQuiz);
buttonStartEl.addEventListener("click", insertElements);