let menu = document.getElementById('checkbox');
let nav = document.getElementById('nav');
let refs = document.getElementById('refs');

let num = 1;

let viewportWidth = window.innerWidth;

window.addEventListener('load', updateNavBar);
window.addEventListener('resize', updateNavBar);

// Nav Bar Opening and closing 
menu.addEventListener('click', () => {
    if (num % 2 === 0) {
        refs.style.display = 'none';
        num++;
        nav.classList.toggle('open');
        return;
    }
    nav.classList.toggle('open');
    refs.style.display = 'block';
    num ++;
    console.log(num);
});

function updateNavBar ()  {
    if (viewportWidth > 700) {
        nav.classList.remove('open');
        refs.style.display = 'flex';
        console.log('bigger');
        return;
    } else if (viewportWidth <= 700) {
        nav.classList.remove('open');
        refs.style.display = 'none';
        console.log('lower');
    }
};
