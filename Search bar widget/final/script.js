const search = document.querySelector('.search-bar')
const btn = document.querySelector('.btn-bar')
const input = document.querySelector('.input-bar')

btn.addEventListener('click', function(e) {
    search.classList.toggle('active')
    input.focus()
})

e.removeEventListener();
