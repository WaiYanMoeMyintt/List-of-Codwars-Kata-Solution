'use strict';

let count = 0;
// select value and buttons
const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");

btns.forEach(function (e) {
  e.addEventListener("click", function (el)
   {

    const btnStyle = el.currentTarget.classList;
    
    if(btnStyle.contains('btn-1')){
        count--;
    }
    else if(btnStyle.contains('btn-3'))
    {
        count++;
    }
    else{
        count = 0;
    }

    if(count>0){
        value.style.color = "red";
    }
    else if(count < 0)
    {
        value.style.color = "green";
    }

    else if (count === 0)
    {
        value.style.color = "rgb(87, 188, 252)";
    }
    else{
        count = 0;
    }
  
    value.textContent = count;
  });
});
