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

  var answerTwo = prompt('What state was I born in?');
  var myAnswerTwo = 'California';
  if(answerTwo === myAnswerTwo){
    //Comment do something
      alert('You got it right ' + userName + '.I was born in California!')
  }else {
    //do something else
    alert('Sorry ' + userName + ', that\'s wrong. I was born in California.')
  }

  var answerThree = prompt ('I love sports!  Who do you think my favorite football team is ?');
  var myAnswerThree = 'Seahawks';
  if (answerThree === myAnswerThree){
      alert ('Yes!  But don\'t tell my husband!  He thinks it\'s the Patriots!')
  }else {
    alert ('Nope! It\'s the Seahawks! But don\'t tell my husband!' )
  }

  var answerFour = prompt ('Where is my favorite restaurant to go to for happy hour?');
  var myAnswerFour = 'Palisade';
  if (answerFour === myAnswerFour){
      alert ('Yes!They have the best Warm Crab Lobster Dip and American Kobe Beef Sliders!')
  }else {
      alert ('It\'s Palisade in Seattle.  They have the best Warm Crab Lobster Dip and American Kobe Beef Sliders! I recommend visiting!')
  }

var answerFive = prompt("How fast do you drive on the I5 freeway?");


if (answerFive > 75) {
    alert("Slow down! You will get a ticket!");
}else {
alert("Drive safe and have a safe trip!");
}

var answerSix = prompt ('How long is my name?');

if ((answerSix * 2 / (2+2) == 4))
{
    alert("The answer makes sense!");
}
else
{   alert("This answer is wrong!");
}

// if (traffic signal ==="green")&& pedestrians ===false){
//   alert ("GO!");
// }else{
//   alert ("STOP!");
// }
}
