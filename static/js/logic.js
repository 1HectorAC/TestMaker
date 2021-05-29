// Test data for now.
problems = [
    {question:"What is blue?", answers:['water', 'sky']},
    {question:"What is red?", answers:['blood', 'fire']},
    {question:"What is purple?", answers:['poison']},
    {question:"What is orange?", answers:['orange']},
    {question:"What is yellow?", answers:['cheese']},
    {question:"What is black?", answers:['night']},
    {question:"What is white?", answers:['snow']},
    {question:"What is light blue?", answers:['sky']},
    {question:"What is green?", answers:['grass', 'leaves']},
    {question:"What is grey?", answers:['something']},
    {question:"What is lavander?", answers:['something']},
    {question:"What is brown?", answers:['chocolate']}
]

// keep track of what question curreontly on.
var questionIndex = 0;

// Total number of questions that will be answered.
var questionsTotal = 0;

//Track total correct answers.
var correctTotal = 0;

$("body").on("click", "button", function(ev) {
    ev.preventDefault()

    // Button press will setup for answering x questions.
    if ($(this).attr("value") == "10Questions") {
        questionIndex = 0;
        questionsTotal = 3;
        $(".mainContent").empty();
        ProblemDisplay($(".mainContent"), problems[questionIndex].question);
    }

    // Button press will setup for answering all questions.
    if ($(this).attr("value") == "fullQuestions") {
        questionIndex = 0;
        questionsTotal = problems.length;
        $(".mainContent").empty();
        ProblemDisplay($('.mainContent'), problems[questionIndex].question);
    }

    // Button press will check inputed answer for given question.
    if ($(this).attr("value") == "enterAnswer") {
        var response = $('#answerInput').val();
        $(".mainContent").empty();
        DisplayResults($(".mainContent"), response, problems[questionIndex].answers);
        

    }

    // Button press will move on from seeing answer.
    if ($(this).attr("value") == "next") {
        questionIndex++;
        $(".mainContent").empty();
        if(questionIndex < questionsTotal)
            ProblemDisplay($(".mainContent"), problems[questionIndex].question);
        else{
            //Need to setup Results display.
            $(".mainContent").append("<p>End</p>")
            $(".mainContent").append("<p>You got "+correctTotal+ " out of "+questionsTotal+".</p>")
            
        }
    }

    if ($(this).attr("value") == "clear") {
        $(".mainContent").empty();

    }
});

StartInterface($(".mainContent"));


function StartInterface(element){
    element.append("<p>10 random questions?</p>");
    element.append("<button class='btn btn-primary' type='submit' value='10Questions'>Start</button>");

    element.append("<p>Full list of questions?</p>");
    element.append("<button class='btn btn-primary' type='submit' value='fullQuestions'>Start</button>");
}

function ProblemDisplay(element, question){
    element.append("<p>"+questionIndex + "/" + questionsTotal+"</p>");
    element.append("<p>"+question+"</p>");
    element.append("<input  class='form-control' id='answerInput' style=' text-align:center' placeholder='Enter Answer here!' maxlength='50'>");

    element.append("<button class='btn btn-primary' type='submit' value='enterAnswer'>Submit</button>");

}

function DisplayResults(element, response, answer){
    if(answer.includes(response)){
        element.append("<p>Correct!<p>");
        correctTotal++;
    }
    else
        element.append("<p>Wrong</p>");

    element.append("<p><b>Your Answer:</b></p>");
    element.append("<p>"+response+"</p>");
    element.append("<p><b>Correct Answers:</b></p>");
    for(i = 0; i < answer.length; i++){
        element.append("<p>"+answer[i]+"</p>");
    }
    element.append("<button class='btn btn-primary' type='submit' value='next'>Next</button>");
}