//ADD SECTIONS BY USING FOR LOOP//
const sections = document.getElementsByTagName("section")
const length = sections.length;
for (let i = 0; i < length; i++) {
    document.getElementsByClassName('navbar')[0].innerHTML += `<li class="section-menu ${i === 0 ? 'active' : ''}">Section ${i + 1}</li>`;

}
//SCROLL EVENT USED ONE BY ONE START//
// document.getElementsByClassName("section-menu")[0].addEventListener('click', () => {
//     document.getElementsByClassName('section-1')[0].scrollIntoView({
//         behavior: 'smooth'
//     });
// });

// document.getElementsByClassName("section-menu")[1].addEventListener('click', () => {
//     document.getElementsByClassName('section-2')[0].scrollIntoView({
//         behavior: 'smooth'
//     });
// });

// document.getElementsByClassName("section-menu")[2].addEventListener('click', () => {
//     document.getElementsByClassName('section-3')[0].scrollIntoView({
//         behavior: 'smooth'
//     });
// });
// document.getElementsByClassName("section-menu")[3].addEventListener('click', () => {
//     document.getElementsByClassName('section-4')[0].scrollIntoView({
//         behavior: 'smooth'
//     });
// });

//SCROLL EVENT USED ONE BY ONE END//


// Get the container element
const btn = document.getElementsByClassName("navbar")[0];

// Get all buttons with class="btn" inside the container
const btns = btn.getElementsByClassName("section-menu");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace("active", "");
        }



        
        this.className += " active";

        const sectionToScroll = `section-${i+1}`
        document.getElementsByClassName(sectionToScroll)[0].scrollIntoView({
            behavior: 'smooth'
        });
    });
}


// This code adds active class on scroll event 
let isInViewport = function (elem) {
    let distance = elem.getBoundingClientRect();
    // console.log('elem', elem)
    // console.log('top', distance.top)
    // console.log('bottom', distance.bottom)
    return (
        distance.top <= 0 && distance.bottom > 0
    );
};

let findMe = document.querySelectorAll('section');

window.addEventListener('scroll', function (event) {
    // add event on scroll
    findMe.forEach((element, index) => {

        if (isInViewport(element)) {
            btns[index].classList.add("active");
        } else {
            btns[index].classList.remove("active");
        }
    });
}, false);
