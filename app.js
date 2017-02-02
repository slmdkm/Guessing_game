function myFunction(){
  var userName = prompt("What\'s your name?");
  alert('Hello ' + userName + '. Thanks for coming to my site!')

  var questionOne = prompt ('So ' + userName +'. Are you new to CodeFellows?');
  var myQuestionOne = 'Yes';
  if (questionOne === myQuestionOne){
    alert ('Congratulations!  Welcome to Code Fellows')
  }else{
    alert('Welcome back ' + userName + '.  It\'s great to see you again!')
  }

  var answerTwo;
  var answerThree;
  var answerFour;
  var answerFive;
  var answerSix;
  var answerSevenArray;
  var answerCarArray;
  var myHobby;
  var score = 0;

  var answerTwo = prompt('What state was I born in?');
  answerTwo = answerTwo.toUpperCase();
  var myAnswerTwo = 'CALIFORNIA';
  if(answerTwo === myAnswerTwo){
    //Comment do something
    alert('You got it right ' + userName + '.I was born in California!');
    score += 1;
  }else {
    //do something else
    alert('Sorry ' + userName + ', that\'s wrong. I was born in California.');
  }

  var answerThree = prompt ('I love sports!  Who do you think my favorite football team is ?');
  answerThree = answerThree.toUpperCase();
  var myAnswerThree = 'SEAHAWKS';
  if (answerThree === myAnswerThree){
    alert ('Yes!  But don\'t tell my husband!  He thinks it\'s the Patriots!')
    score += 1;
  }else {
    alert ('Nope! It\'s the Seahawks! But don\'t tell my husband!' )
  }

  var answerFour = prompt ('Where is my favorite restaurant to go to for happy hour?');
  answerFour = answerFour.toUpperCase();
  var myAnswerFour = 'PALISADE';
  if (answerFour === myAnswerFour){
    alert ('Yes!They have the best Warm Crab Lobster Dip and American Kobe Beef Sliders!')
    score += 1;
  }else {
    alert ('It\'s Palisade in Seattle.  They have the best Warm Crab Lobster Dip and American Kobe Beef Sliders! I recommend visiting!')
  }

  var answerFive = prompt('How fast do I drive on the I5 freeway?');


  if (parseInt(answerFive) >= 75) {
    alert('I will get a ticket!');
    score += 1;
  }else {
    alert('I will drive safe and have a safe trip!');
  }

  var answerSix = prompt ('How long is my name?');

  if ((parseInt(answerSix) * 2 / (2+2) == 4))
  {

    alert('You are correct!');
    score += 1;
  }
  else
  {   alert('Nope, you got it wrong!');
}

var answerSevenArray = prompt (' What is my favorite holiday?');
answerSevenArray = answerSevenArray.toUpperCase();
var myArray = ['CHRISTMAS', 'EASTER', 'CINCO DE MAYO', 'MOTHERS DAY', '4th OF JULY'];
if (answerSevenArray === myArray[0]){
  alert ('Christmas is my favorite!  I decorate a real tree!');
  score += 1;
}if (answerSevenArray === myArray[1]){
  alert ('Easter is my 2nd favorite holiday!');
}if (answerSevenArray === myArray[2]){
  alert ('I\'m not much of a Cinco de Mayo fan.' );
}if (answerSevenArray === myArray[3]){
  alert('My husband makes a great Eggs Benedict brunch for Mothers Day!');
}else {
  alert ('No such luck!' );
}
var myCarArray =['SURBURBAN', 'COROLLA', 'JETTA'];

var answerEightArray = prompt ('What kind of car do I drive?');
answerEightArray = answerEightArray.toUpperCase();
if (myCarArray.indexOf(answerEightArray)!==-1){
  alert ('You guessed! It happens to be one of them!');
  score += 1;
}else{
  alert ('You will never guess!  Looking forward to buying a new vehicle, though!');
}
var hobbies = ['SCRAPBOOKING', 'GENEALOGY', 'COACHING', 'HIKING'];
var myHobby = prompt ('Name of a hobby of mine.');
myHobby = myHobby.toUpperCase();
if (hobbies.indexOf(myHobby)!==-1) {
  alert ('Fancy that!' + myHobby + 'is a hobby of mine!');
  score += 1;
}else{
  alert('You\'ll never guess!');
}
if (score === 8){
  alert ('Your Score is ' +score + '. You are awesome, you did perfect!');

}else{
  alert ('your score is ' + score  +' out of eight!');
}
}

// This code below works, but I want the questions above to be the questions I
// use to check number of answers correct or incorrect.
// var score =0;
// var questions = [
// ['What state was I born in?', 'California'],
// ['I love sports!  Who do you think my favorite football team is ?', 'Seahawks'],
// ['Where is my favorite restaurant to go to for happy hour?', 'Palisade'],
// ['How fast do I drive on the I5 freeway?',75],['How long is my name?',8],
// [' What is my favorite holiday?', 'Christmas'],['What kind of car do I drive?', 'Surburban'],['Name of a hobby of mine.', 'Genealogy']
// ];
// for (var i=0; i<questions.length; i++){
// askQuestion(questions[i]);
// }
// function askQuestion(question){
// var answer = prompt(question[0],'');
// if (answer == question[1]){
//
// alert('You are awesome ' + userName + '!');
// score++;
// }else{
// alert('Oops. The answer is ' + question[1]);
// }
// }
// var message = 'You got ' + score;
// message += ' out of ' + questions.length;
// message += ' questions correct.';
// alert(message);
// }
//This Guess Code does not work...still working on it, having a hard time to get it to work.
// alert (userName +', you have 4 guesses between 1-10');
// var answer = 4;
// var answerNine = prompt ("Guess my number.");
//
// for (i=0; i<3; i++){
//   if(answer ==answerNine){
//     alert ('You got it!');
//     break;
//   }else{
//
//     guess = prompt('Try again');
//   }
//   alert('Better luck next time');
// }
