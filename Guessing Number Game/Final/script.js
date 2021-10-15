'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/


let secretNumber = Math.trunc(Math.random()*20);
let  score =  20;
let highScore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}



document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

 //there is no input
  if (!guess)  {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage("Wrong Number!");

  } // players win 
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage("🎉 🎉 🎉 Correct Number");
    document.querySelector('.number').textContent = secretNumber ;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore
    }
    
  }
  //when guess number is wrong
  else if(guess!==secretNumber)
  {
    if(score > 0){
      // document.querySelector('.message').textContent  = guess > secretNumber ? "Too High🧨🧨🎇": 'Too Low';
      displayMessage(guess > secretNumber ? "Too High": 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
     }
     else{
      //  document.querySelector('.message').textContent = "Lose this game";
      displayMessage("Lost This Game! Sorry");
       document.querySelector('.score').textContent  = 0;
     }
  }
  //guess number is too high
//   else if(guess > secretNumber){
    
//      if(score > 0){
//       document.querySelector('.message').textContent  = "Too High🧨🧨🎇";
//       score--;
//       document.querySelector('.score').textContent = score;
//      }
//      else{
//        document.querySelector('.message').textContent = "Lose this game";
//        document.querySelector('.score').textContent  = 0;
//      }
    
   
//   }
//   // guess number is too low
//   else if(guess < secretNumber){

//     if(score > 1) {
//       document.querySelector('.message').textContent  = "Too Low 🧨🧨🎇";
//       score--;
//       document.querySelector('.score').textContent = score;
//     }
//     else{
//       document.querySelector('.message').textContent = "Lose this game";
//       document.querySelector('.score').textContent  = 0;
//     }
           
// }
})

//again button

document.querySelector('.again').addEventListener('click',e=>{

  score = 20;
  secretNumber = Math.trunc(Math.random()*20);
  
  // document.querySelector('.message').textContent = "Start Guessing......";
  displayMessage("Start Guessing.......");

  document.querySelector('.score').textContent  = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';


  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

})
