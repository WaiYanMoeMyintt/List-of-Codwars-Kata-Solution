//selecting elements
const days_count    = document.getElementById('days');
const hours_count   = document.getElementById('hours');
const minute_count  = document.getElementById('minutes');
const second_count  = document.getElementById('seconds');

const new_years_count = ('1 Jan 2022');

function countDown()
{
    const newYearDate = new Date(new_years_count); // call a constructor
    const currentDate = new Date();

    const totalSeconds = (newYearDate-currentDate)/1000;

    const days = Math.floor(totalSeconds/ 3600 /24);

    const hours = Math.floor(totalSeconds/3600) % 24;

    const minutes = Math.floor(totalSeconds/60)%60;

    const seconds = Math.floor(totalSeconds)%60;
     
    days_count.textContent = days;

    hours_count.textContent = hours;

    minute_count.textContent = minutes;

    second_count.textContent = seconds;
}
//call a function
countDown();

setInterval(countDown,1000);
