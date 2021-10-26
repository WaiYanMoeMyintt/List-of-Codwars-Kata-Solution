'use strict';
const card_panel = document.querySelectorAll('.panel');

card_panel.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    card_panel.forEach(panel => {
        panel.classList.remove('active');
    })
}
