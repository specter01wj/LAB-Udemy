var questions = [{
  question: "What is another name for Pastafarianism?",
  choices: ["The United Church of Pasta", "The Collaborative Collective of Collander-Clad Clerics", "The Church of The Flying Spaghetti Monster",
          "The Revered Order of The Righteous Ragu"],
  correctAnswer: 2
}, {
  question: "Who were the original Pastafarians?",
  choices: ["Ninjas", "Pirates", "Robots", "Zombies"],
  correctAnswer: 1
}, {
  question: "Who is the prophet of Pastafarians?",
  choices: ["Bobby Henderson", "Pirates", "Rincewind Churm", "Zaphod Beeblebrox"],
  correctAnswer: 0
}, {
  question: "What is the dogma of Pastafarianism?",
  choices: ["Thou shalt not weez the juice.", "A great film by Kevin Smith.", "The dogma that can be spoken of is not the eternal dogma.", 
           "That there is no dogma."],
  correctAnswer: 3
}, {
  question: "What is causing global warming according to Pastafarianism?",
  choices: ["The global decline in the population of pirates.", "Your mom.", "Lawyers.", 
           "Hipster Barristas"],
  correctAnswer: 0
}, {
  question: "Who or what is the diety of Pastafarianism?",
  choices: ["The Flying Spaghetti Monster", "Mario Batalli", "The Gnosis Gnoodle", 
           "The Great Invisible and Undetectable Rotopede"],
  correctAnswer: 0
}, {
  question: "What is Russell's teapot?",
  choices: ["The Source of the Sauce", "A euphamism for... you know.", "An analogy that illustrate that the philosophic burden of proof lies upon a person making scientifically unfalsifiable claims, rather than shifting the burden of disproof to others", 
           "Short and stout."],
  correctAnswer: 2
}, {
  question: "What country was home to the first legally-recognized Pastafarian wedding?",
  choices: ["Brazil", "New Zealand", "Italy", "The United States of America"],
  correctAnswer: 1
}, {
  question: "What is the holy day of Pastafarianism?",
  choices: ["Sunday", "Monday", "Friday", "Saturday"],
  correctAnswer: 2
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {
  displayCurrentQuestion(); //calls the displayCurrentQuestion function
  $(this).find(".quizMessage").hide();
  $(this).find(".nextButton").on("click", function() { //when there is a click on the button it calls the following code
    if (!quizOver) { //if quizOver is false
      
      value = $("input[type='radio']:checked").val(); //the value is = to the user selection
      if (value == undefined) { //if no selection has been made
        $(document).find(".quizMessage").text("Please select an answer."); //set text of quizMessage to "Please select an answer."
        $(document).find(".quizMessage").show(); // and show the quizMessage
      } else { //if the user has selected an answer
        $(document).find(".quizMessage").hide(); // hide the quizMessage
        if (value == questions[currentQuestion].correctAnswer) { // and if the answer was correct
          correctAnswers++; //increase the # of correct answers(user score)
        }
        currentQuestion++; //and advance to the next question
        if (currentQuestion < questions.length) { //if you're not at the end of the questions
          displayCurrentQuestion();//show the current question
        } else {
          displayScore();//show the score
          $(document).find(".nextButton").text("Play again?");//set text of the button to "Play again?"
          quizOver = true; //set state of quizOver to true
        }
      }
    } else {
      quizOver = false;
      $(document).find(".nextButton").text("Next Question");
      resetQuiz(); //calls the resetQuiz function
      displayCurrentQuestion(); //and the displayCurrentQuestion function
      hideScore();//and the hideScore function
    }
  });
});

function displayCurrentQuestion () {
  console.log("displayCurrentQuestion was called");//this is just to make sure the function is getting called. If there is a problem elsewhere
  //in the code that stops the code from running then the console.log message will not display in the console. 
  var question = questions[currentQuestion].question; //sets the var to be the position in the questions array that is = the currentQuestion counter we initialized at the top of the JS code.
  var questionClass = $(document).find(".quizContainer > .question");
  var choiceList = $(document).find(".quizContainer > .choiceList");
  var numChoices = questions[currentQuestion].choices.length;
  
  $(questionClass).text(question);//sets the text of the questionClass to the current question
  $(choiceList).find("li").remove();//removes the li element(s) from the choiceList
  
 // );
  var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
      }
}

function resetQuiz () {
  currentQuestion = 0; //resets question index
  correctAnswers = 0;//and # of correct answers
  hideScore();//and calls the hideScore function
}

function displayScore () {
  $(document).find(".quizContainer > .result").text("You scored " + correctAnswers + "out of " + questions.length); //sets text of the .result element
  $(document).find(".quizContainer > .result").show(); //shows the .result element
}

function hideScore () {
  $(document).find(".result").hide();//hides the score
}