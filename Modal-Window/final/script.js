'use strict'

const modal = document.querySelector('.modal');
const overylay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function(){
    modal.classList.add('hidden');
    overylay.classList.add('hidden');
}
const OpenModal = function(){
    console.log("button clicked");
    modal.classList.remove('hidden');
    overylay.classList.remove('hidden');
}

for(let i =0; i<btnOpenModal.length; i++)
{
    btnOpenModal[i].addEventListener('click',OpenModal)
}

btnCloseModal.addEventListener('click',closeModal);
overylay.addEventListener('click',closeModal);


document.addEventListener('keydown',function(e){
    

    if(e.key === 'Escape'){
        if(!modal.classList.contains('hidden'));
        {
         closeModal();
        }
    }
})
