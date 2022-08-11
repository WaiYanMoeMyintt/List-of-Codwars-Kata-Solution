//select elements
let hour = document.querySelector('#hour');
let minutes = document.querySelector('#minutes');
let  seconds = document.querySelector('#seconds');

const currentTime = ()=>{
      const time = new Date;
      hour.textContent = time.getHours();
      minutes.textContent = time.getMinutes();
      seconds.textContent = time.getSeconds();
}
setInterval(currentTime,1000);
