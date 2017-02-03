function myFunction(){
  var userName = prompt("What\'s your name?");
  userName = userName.toUpperCase();
  alert('Hello ' + userName + '. Thanks for coming to my site!')

//Question One
  var questionOne = prompt ('So ' + userName +'. Are you new to CodeFellows?');
  questionOne = questionOne.toUpperCase();
  var myQuestionOne = 'YES';
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


//Question Two
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


//Question Three
  var answerThree = prompt ('I love sports!  Who do you think my favorite football team is ?');
  answerThree = answerThree.toUpperCase();
  var myAnswerThree = 'SEAHAWKS';
  if (answerThree === myAnswerThree){
    alert ('Yes!  But don\'t tell my husband!  He thinks it\'s the Patriots!');
    score += 1;
  }else {
    alert ('Nope! It\'s the Seahawks! But don\'t tell my husband!' );
  }


//Question Four
  var answerFour = prompt ('Where is my favorite restaurant to go to for happy hour?');
  answerFour = answerFour.toUpperCase();
  var myAnswerFour = 'PALISADE';
  if (answerFour === myAnswerFour){
    alert ('Yes!They have the best Warm Crab Lobster Dip and American Kobe Beef Sliders!')
    score += 1;
  }else {
    alert ('It\'s Palisade in Seattle.  They have the best Warm Crab Lobster Dip and American Kobe Beef Sliders! I recommend visiting!');
  }


//Question Five - Logical Operator
   var answerFive = prompt('How fast do I drive on the I5 freeway?');

  if (parseInt(answerFive) === 75) {
    alert('Yes, that\'s about right!');

  }else if (parseInt(answerFive) > 75){
  alert ('Contrary to what you may think I\'m not a speed demon!');
}else  if (parseInt(answerFive) < 75 && parseInt(answerFive) >=55){
  alert ('My sis thinks I am still driving too slow!');}
  else {
    alert('What do think I am a slowpoke?');
  }


//Question Six
  var answerSix = prompt ('How long is my name?');

  if ((parseInt(answerSix) * 2 / (2+2) == 4))
  {
    alert('You are correct!');
    score += 1;
  }
  else
  {   alert('Nope, you got it wrong!');
}


//Question Seven - Array
var answerSevenArray = prompt (' What is my favorite holiday?');
answerSevenArray = answerSevenArray.toUpperCase();
var myArray = ['CHRISTMAS', 'EASTER', 'CINCO DE MAYO', 'MOTHERS DAY', '4th OF JULY'];
if (answerSevenArray === myArray[0]){
  alert ('Christmas is my favorite!  I decorate a real tree!');
  score += 1;
}else if (answerSevenArray === myArray[1]){
  alert ('Easter is my 2nd favorite holiday!');

}else if (answerSevenArray === myArray[2]){
  alert ('I\'m not much of a Cinco de Mayo fan.' );

}else if (answerSevenArray === myArray[3]){
  alert('My husband makes a great Eggs Benedict brunch for Mothers Day!');

}else {
  alert ('No such luck!' );
}


//Question Eight - Array
var myCarArray =['SURBURBAN', 'COROLLA', 'JETTA'];

var answerEightArray = prompt ('What kind of car do I drive?');
answerEightArray = answerEightArray.toUpperCase();
if (myCarArray.indexOf(answerEightArray)!==-1){
  alert ('You guessed! It happens to be one of them!');
  score += 1;
}else{
  alert ('You will never guess!  Looking forward to buying a new vehicle, though!');
}

//Question Nine - Array
var hobbies = ['SCRAPBOOKING', 'GENEALOGY', 'COACHING', 'HIKING'];
var myHobby = prompt ('Name of a hobby of mine.');
myHobby = myHobby.toUpperCase();
if (hobbies.indexOf(myHobby)!==-1) {
  alert ('Fancy that!' + myHobby + 'is a hobby of mine!');
  score += 1;
}else{
  alert('You\'ll never guess!');
}

for (var i = 0; i<=3; i++){
  var myAnswer = 16;
  var userGuess = prompt( userName + 'You have four guesses to guess my number between 1-20.');
  if (userGuess == myAnswer){
    alert('Of course you\'d guess that...it is Nick\'s, Maria\'s, and John\'s jersey number!');
    score +=1;
    break;
  }else if (userGuess > myAnswer){
    alert ('Too high!');
  }else if (userGuess < myAnswer){
    alert('Too low!');
  }
}
//Score Calculation
if (score === 9){
  alert ('Your Score is ' +score + '. You are awesome, you did perfect!');

}else{
  alert ('Your score is ' + score  +' out of eight! GAMEOVER!');
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
// alert (userName +', you have 4 guesses between 1-20');
// var answer = 16;


// for (var i = 0; i<=4; i++){
//   var myAnswer = 16;
//   var userGuess = prompt( userName + 'You have four guesses to guess my number between 1-20.');
//   if (userGuess ===myAnswer){
//     alert('Of course you\'d guess that...it is Nick\'s, Maria\'s, and John\'s jersey number!');
//     score +=1;
//     break;
//   }else if (userGuess > myAnswer){
//     alert ('Too high!');
//   }else if (userGuess < myAnswer){
//     alert('Too low!');
//   }
//






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
