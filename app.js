'use strict'

function  yesQuestions(answer){

  if (answer.toUpperCase() === 'YES' || answer.toUpperCase() === 'Y'){
    alert('You are not a Zombie!')
  }else{
    alert('Your infected with the T-Virus!')
  }
};
function noQuestions(answer){
  if (answer.toUpperCase() === 'No' || answer.toUpperCase() === 'N'){
    alert('You are not a Zombie!')
  }else{
    alert('Your infected with the T-Virus!')
  }
};
yesQuestions(prompt('You want play a dangerous game?'))
noQuestions(prompt('Your in class and you hear a noise outside the door. Do you want check it out?'))
yesQuestions(prompt('Would you run out of the building if there was a zombie?'))
noQuestions(prompt('You outside the classroom and you see a classmate being eatten alive?!?! Do you save them?'))
noQuestions(prompt('All seems lost, Do you take your own live vs being eatten by the unholy undead?'))

var question6 = prompt('How many times am I going to re-take this class? Answer 1-10.');
for (var answer6 = 0; answer6 < 4 ; answer6++) {
if (question6 < 2){
  alert('You are too Low.');
  question6 = prompt('Guess Again.');
} else if (question6 > 2){
  alert('You are too High.');
  question6 = prompt('Guess Again.');
}else if (question6 == 2){
  alert('You are correct....maybe.');
  question6 = 4;
}
}
var question7 = prompt('What are some of my favorite games?');
var answer7 = ['Call of Duty','Ark','Dying Light'];
for (var answer7 = 0; answer7 < 4; answer7++) {
if (questions7 = answer7[0,1,2]) {
alert ('Good Job!');
}else{
alert('Nope');
question7 = prompt('Try again.');
question7 = 4;
}
}
// //question 1
// var confirmed = confirm('Are you have your mind blowen!?');
//
// if (confirmed === true){
//   console.log('The User is ready!');
// } else {
//   console.log('User is too scared but we are going to continue anyway.')
// };
// //question 2
//  var confirmed =confirm('Are you looking for a new kick ass develpoer to be on your team?');
//
//  if (confirmed === false){
//    console.log('You are missing out on something amazing!')
//  }else {
//    console.log ('Then you have come to the right place.')
//  };
//  //question 3
// var confirmed = confirm('Want to play a game?');
//
// if (confirmed === true){
//   console.log('User wants to play.')
// } else {
//   console.log('User refuses to leave.')
// };
// //question 4
// var confirmed = confirm('Are yuo sure you raed this correctly?');
//
// if (confirmed === true){
//   console.log('User is lying')
// } else {
//   console.log('User passed')
// };
// //question 5
// var confirmed = confirm('Do you know what Taco Cat spelled backwards is Taco Cat?');
//
// if (confirmed === true){
//   console.log('User lies.')
// } else {
//   console.log('User is confused')
// };
// //question 6
