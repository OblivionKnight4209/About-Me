'use strict'

var correctAnswer = 0;

function  yesQuestions(answer){

  if (answer.toUpperCase() === 'YES' || answer.toUpperCase() === 'Y'){
    alert('You are not a Zombie!');
    correctAnswer++;
  }else{
    alert('Your infected with the T-Virus!');
  }
};
function noQuestions(answer){
  if (answer.toUpperCase() === 'No' || answer.toUpperCase() === 'N'){
    alert('You are not a Zombie!');
    correctAnswer++;
  }else{
    alert('Your infected with the T-Virus!');
  }
};

    yesQuestions(prompt('You want play a dangerous game?'));
    noQuestions(prompt('Your in class and you hear a noise outside the door. Do you want check it out?'));
    yesQuestions(prompt('Would you run out of the building if there was a zombie?'));
    noQuestions(prompt('You outside the classroom and you see a classmate being eatten alive?!?! Do you save them?'));
    noQuestions(prompt('All seems lost, Do you take your own life vs being eatten by the unholy undead?'));


var question6 = prompt('How many times am I going to re-take this class? Answer 1-10.');
  for (var answer6 = 0; answer6 < 4 ; answer6++) {
    if (parseInt(question6 < 2)){
      console.log('User is too low.')
      alert('You are too Low.');
  question6 = prompt('Guess Again.');
}   else if (question6 > 2){
    console.log('User is too High')
    alert('You are too High.');
  question6 = prompt('Guess Again.');
}   else if (question6 == 2){
    console.log('User got the right answer.')
    alert('You are correct....maybe.');
  answer6 = 4;
  correctAnswer++
}
}
//issue with 7 unable to get working correctly
var question7 = prompt('What are some of my favorite games?');
var answer7 = ["Call of Duty","Ark","Dying Light"];
var a = answer7.indexOf();
for (var a = 0; answer7 < 4; answer7++) {
  if(answer7.indexOf(question7 !== -1)){  //answer7[0], || answer7[1], || answer7[2]) not sure about this
    alert ('Good Job!');
    console.log('User right answer.');
    correctAnswer++
} else{
    alert('Nope');
    console.log('User wrong answer.');
    question7 = prompt('Try again.');
    answer7 = 4;
}
}

document.write ('You got ' + correctAnswer + ' out of 7 correct.');
