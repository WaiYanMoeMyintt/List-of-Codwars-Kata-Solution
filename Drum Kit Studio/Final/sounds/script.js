// 'use strict';

// const btn = document.querySelectorAll(".drum").length;
// for( var i = 0;  i < btn; i++){
//     document.querySelectorAll(".drum")[i].addEventListener('click',()=>
// {
//     // const audio = new Audio("sounds/crash.mp3");
//     // audio.play();
//     const btn = this.innerHTML;
//     sound(btn_key);
//     btn_animated(btn);

// })
// }

// document.addEventListener('keypress',function(e)
// {
//   sound(e.btn_key);
//   btn_animated(e.btn_key);
// })

// function sound(btn_key){
//   switch(btn_key){
//     case 'w':
//       const song_1 = new Audio("sounds/crash.mp3");
//       song_1.play();
//       break;
//     case 'a':
//         const song_2 = new Audio("sounds/kick-bass.mp3");
//         song_2.play();
//         break;
//     case 's':
//           const song_3 = new Audio("sounds/snare.mp3");
//           song_3.play();
//           break;
//     case 'd':
//             const song_4 = new Audio("sounds/tom-1.mp3");
//             song_4.play();
//             break;
//     case 'j':
//               const song_5 = new Audio("sounds/tom-2.mp3");
//               song_5.play();
//               break;
//     case 'k':
//                 const song_6 = new Audio("sounds/tom-3mp3");
//                 song_6.play();
//                 break;
//     case 'l':
//                   const song_7 = new Audio("sounds/tom-4.mp3");
//                   song_7.play();
//                   break;
//     default: console.log(btn_key);

//   }
// }
// function btn_animated(el){
//   const act_btn = document.querySelector('.'+el);

//   act_btn.classList.add("pressed");

//   setTimeout(function() {
//     act_btn.classList.remove("pressed");
//   }, 100);

// }

// const btn  = document.querySelectorAll('.drum');

// btn.forEach(e =>{
//     e.addEventListener('click',function()
//     {
//       console.log("haha");
//     })
// })


var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
