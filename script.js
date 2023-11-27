const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

//When the Hamburber menu (bar) is clicked, uses the CSS styling from navbar and navbar.active

//opens navbar
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

//closes navbar
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
