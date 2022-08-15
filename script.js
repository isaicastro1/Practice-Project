let menu = document.getElementById('checkbox');
let nav = document.getElementById('nav');
let wrapper = document.getElementById('wrapper');
let checkbox = document.getElementById('checkbox');
let navWrapper = document.getElementById('nav');
let myName = document.getElementById('my-name');
let subtitle = document.getElementById('subtitle');
let firstPage = document.getElementById('first-page');
let headers = document.getElementsByClassName('headers');

console.log(headers);

// NAV BAR TRANSITIONS

// OPENS NAV AND CHANGES Z-INDEX
menu.addEventListener('click', () => {

    wrapper.classList.toggle('open-nav');
    wrapper.style.zIndex = -2;

    myName.classList.toggle('lower');
    subtitle.classList.toggle('lower');


    wrapper.ontransitionend = () => {
        wrapper.style.zIndex = 2;
    }
    wrapper.style.zIndex = -2;

    }
);

// HIDES NAVBAR AND CLOSES MENU WHEN SCROLLING 
// DOWN AND SHOWS NAVBAR WHEN SCROLLING UP 
let prevScroll = window.pageYOffset;

window.onscroll = function() {

    let currentScroll = window.pageYOffset;

    if (prevScroll > currentScroll || window.pageYOffset === 0) {
        nav.style.top = "0";
    } else if (prevScroll < currentScroll && 
        wrapper.classList.contains('open-nav')) {
            wrapper.classList.remove('open-nav');
            myName.classList.toggle('lower');
            subtitle.classList.toggle('lower');

            // THIS CHANGES THE MENU ANIMATION
            checkbox.checked = false;
    } else {
        nav.style.top = "-60px";
    }

    prevScroll = currentScroll;
}


// ENDS NAV BAR

// FRONT-PAGE TYPING ANIMATION
window.addEventListener('load', () => {
    setTimeout(() => {
        myName.classList.remove('name');
        subtitle.style.visibility = 'visible';
        subtitle.classList.add('sub');
    }, 5000)
})

// INTERSECTION OBSERVER
let options = {
    rootMargin: '0px',
    threshold: 1
  }
  
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        console.log(entry.target)
    })
}, options);

for (let head of headers) {
    observer.observe(head)
}
















