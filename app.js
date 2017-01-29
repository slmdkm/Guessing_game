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

    var answerFive = prompt("How fast do I drive on the I5 freeway?");


    if (answerFive > 75) {
      alert('I will get a ticket!');
    }else {
      alert('I will drive safe and have a safe trip!');
    }

    var answerSix = prompt ('How long is my name?');

    if ((answerSix * 2 / (2+2) == 4))
    {

      alert('You are correct!');
    }
    else
    {   alert('Nope, you got it wrong!');
  }

  var answerSevenArray = prompt (' What is my favorite holiday?');
  var myArray = ['Christmas', 'Easter', 'Cinco de Mayo', 'Mothers Day', '4th of July'];
  if (answerSevenArray === myArray[0]){
    alert ('Christmas is my favorite!  I decorate a real tree!');
  }if (answerSevenArray === myArray[1]){
    alert ('Easter is my 2nd favorite holiday!');
  }if (answerSevenArray === myArray[2]){
    alert ('I\'m not much of a Cinco de Mayo fan.' );
  }if (answerSevenArray === myArray[3]){
    alert('My husband makes a great Eggs Benedict brunch for Mothers Day!');
  }else {
    alert ('No such luck!' );
  }
var myCarArray =['Surburban', 'Corolla', 'Jetta'];
  var answerEightArray = prompt ('What kind of car do I drive?');
  if (myCarArray.indexOf(answerEightArray)!==-1){
    alert ('You guessed! It happens to be one of them!');
  }else{
    alert ('You will never guess!  Looking forward to buying a new vehicle, though!')
  }
  var hobbies = ['Scrapbooking', 'Genealogy', 'Coaching', 'Hiking'];
  var myHobby = prompt ('Name of a hobby of mine.');
  if (hobbies.indexOf(myHobby)!==-1) {
    alert ("Fancy that!" + myHobby + "is a hobby of mine!");}
    else{
      alert('You\'ll never guess!');
    }

  }
