const numberCount = document.getElementById("count-number");
const decreaseBtn = document.getElementById("decrement-btn");
const increaseBtn = document.getElementById("increment-btn");
const resetBtn = document.getElementById("reset-btn");

let countNumberValue = 0;

increaseBtn.addEventListener("click",(e)=>{
    countNumberValue = countNumberValue+1;
    numberCount.textContent = countNumberValue;
})
decreaseBtn.addEventListener("click",(e)=>{
    countNumberValue = countNumberValue-1;
    numberCount.textContent = countNumberValue;
})
resetBtn.addEventListener("click",(e)=>{
    countNumberValue = 0;
    numberCount.textContent = countNumberValue;
})
