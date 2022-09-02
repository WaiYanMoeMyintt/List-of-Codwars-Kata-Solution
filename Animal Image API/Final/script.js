const dogButton = document.querySelector(".dog-btn");
const foxButton = document.querySelector(".foxe-btn");
const dogImage  = document.querySelector(".dog");
const foxImage  = document.querySelector(".fox");

dogButton.addEventListener('click',()=>{
    fetch("https://random.dog/woof.json").then((res)=>{
         return res.json();
    }).then((data)=>{
          const dogPhotos = data.url;
          dogImage.src = dogPhotos;
    });
});
foxButton.addEventListener('click',()=>{
     fetch("https://randomfox.ca/floof/").then((res)=>{
        return res.json();
     }).then((photos)=>{
          const foxePhotos =  photos.image;
          foxImage.src = foxePhotos;
     });
});
