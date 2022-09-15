const navLinks = document.querySelector(".nav--container");
const features = document.querySelector("#features");
const company  = document.querySelector("#company");
const features1 = document.querySelector('.features-link-1');
const features2 = document.querySelector('.features-link-2');
const arrow1 = document.querySelector(".arrow-down-1");
const arrow2 = document.querySelector(".arrow-down-2");
const arrow3 = document.querySelector(".arrow-up-1");
const arrow4 = document.querySelector(".arrow-up-2");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const section = document.querySelector("#section");
const navMenu = document.querySelector(".nav-menu");

navMenu.addEventListener("click",()=>{
     section.classList.toggle("show");
})

const subFeature1 = document.querySelector("#sub-features-1");
const featLink1   = document.querySelector(".sub-features-link-1");

const subFeature2 = document.querySelector("#sub-features-2");
const featLink2   = document.querySelector(".sub-features-link-2");

subFeature1.addEventListener("click",()=>{
    featLink1.classList.toggle("sub-hidden1");
});

subFeature2.addEventListener("click",()=>{
    featLink2.classList.toggle("sub-hidden-2");
})

open.addEventListener("click",()=>{
      close.style.display = "block";
      open.style.display = "none";
})
close.addEventListener("click",()=>{
     close.style.display = "none";
     open.style.display = "block";
})

features.addEventListener('mouseover',()=>{
    features1.classList.add("mouse-feature");
    arrow1.style.display = "inline";
    arrow3.style.display = "none";
});
window.addEventListener("click",link1=>{
     if(link1.target !== navLinks){
        features1.classList.remove("mouse-feature");
        arrow3.style.display = "inline";
        arrow1.style.display = "none";
     }
})

features.removeEventListener('mouseover',()=>{
    features1.classList.add("mouse-feature");
    arrow1.style.display = "inline";
    arrow3.style.display = "none";
});

company.addEventListener("mouseover",()=>{
     features2.classList.add("mouse-feature");
     arrow2.style.display = "inline";
     arrow4.style.display = "none";

});

window.addEventListener("click",link2=>{
    if(link2.target !== navLinks){
    features2.classList.remove("mouse-feature");
    arrow2.style.display = "none";
    arrow4.style.display = "inline";
    }
})
