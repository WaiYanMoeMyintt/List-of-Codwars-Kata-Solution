const chg_colors =  ["green","yellow","red","purple","blue","white","gray","darkblue","cyan","rgb(49, 129, 29)","rgb(255, 17, 17)"];

const press_btn  = document.getElementById('btn');

const span_color = document.querySelector(".color-span-title");

press_btn.addEventListener('click', function()
{
    const randomNumber  = getRandomNumber()
    console.log(randomNumber);
    document.body.style.backgroundColor = chg_colors[randomNumber];
    span_color.textContent = chg_colors[randomNumber];
})

function getRandomNumber()
{
    return Math.floor(Math.random() * chg_colors.length);
}
