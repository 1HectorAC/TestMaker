// Test data for now.
problems = [
    {question:"What is blue?", answers:['water', 'sky']},
    {question:"What is red?", answers:['blood', 'fire']},
    {question:"What is yellow?", answers:['cheese']}
]

StartInterface($('.mainContent'));


function StartInterface(element){
    element.append('<p>10 random questions?</p>');
    element.append('<button class="btn btn-primary" type="submit" value="10Questions">Start</button>');

    element.append('<p>Full list of questions?</p>');
    element.append('<button class="btn btn-primary" type="submit" value="fullQuestions">Start</button>');
}