let memeImage = [
    {image:"img/img-1.jpg"},
    {image:"img/img-2.jpg"},
    {image:"img/img-3.jpg"},
    {image:"img/img-4.jpg"},
    {image:"img/img-5.jpg"},
    {image:"img/img-6.jpg"},
    {image:"img/img-7.jpg"},
    {image:"img/img-8.jpg"},
    {image:"img/img-9.jpg"},
    {image:"img/img-10.jpg"},
    {image:"img/img-11.jpg"},
    {image:"img/img-12.jpg"},
    {image:"img/img-13.jpg"},
    {image:"img/img-14.jpg"},
    {image:"img/img-15.jpg"},
    {image:"img/img-16.jpg"},
    {image:"img/img-17.jpg"},
    {image:"img/img-18.jpg"},
    {image:"img/img-19.jpg"},
    {image:"img/img-20.jpg"}
];
const memeBtn = document.getElementById("meme-btn");
const memeImg = document.getElementById("meme-image");
memeBtn.addEventListener("click",e=>{
    let randomMeme = Math.floor(Math.random()*(memeImage.length));
    document.canvas.src = memeImage[randomMeme].image;
})
