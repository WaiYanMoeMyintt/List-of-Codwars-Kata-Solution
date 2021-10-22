'use strict';

//selecting elements

const player0El = document.querySelector('.player--1');
const player1El = document.querySelector('.player--0');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl   = document.querySelector('.dice');

const btnNew   = document.querySelector('.btn--new');
const btnRoll   = document.querySelector('.btn--roll');
const btnHold  = document.querySelector('.btn--hold');


const switchPlayers =  function()
{
  document.getElementById(`current--${activePlayer}`).textContent =0;
        currentScore = 0;
      
          activePlayer = activePlayer === 0 ? 1:0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}


let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();
//starting conditions



//Rolling Dice Functionality

btnRoll.addEventListener('click',function()
{
   if(playing)
   {
      //1.generation a random dice roll
    const dice = Math.trunc(Math.random() * 6)+1;
    console.log(dice);


    //2.Display Dice

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. check for roll 1:if true,

    if(dice!==1)
    {
     //ADD dice to the current score
     currentScore += dice;
     current0El.textContent = currentScore; //change later
     
     document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    }
    else{
         //call the switchPlayer function
         switchPlayers();
    }
   }
})

//hold button

btnHold.addEventListener('click',function()
{
  if(playing){
  //add current socre to the active player
     scores[activePlayer]+= currentScore;
     
     document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

  //check is player score is >=100

  if(scores[activePlayer] >=30)
  {

         //finish the game or 
         diceEl.classList.add('hidden');
         playing = false;
         document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
         document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

  }
  else{
    switchPlayers();
  }
  // scores[1] = scroes[1]+= currentScore;
  }
  
  //switch the next player
 
})

//resetting the game
btnNew.addEventListener('click', init);

