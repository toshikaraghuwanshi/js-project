
const sections = document.getElementsByTagName("section")
const length = sections.length;
for (let i = 0; i < length; i++) {
    document.getElementsByClassName('navbar')[0].innerHTML += `<li id="section-${i+1}menu" class="active">Section ${i+1}</li>`;

}

document.getElementById("section-1menu").addEventListener('click', () => {
    document.getElementById('section-1').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById("section-2menu").addEventListener('click', () => {
    document.getElementById('section-2').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById("section-3menu").addEventListener('click', () => {
    document.getElementById('section-3').scrollIntoView({
        behavior: 'smooth'
    });
});
document.getElementById("section-4menu").addEventListener('click', () => {
    document.getElementById('section-4').scrollIntoView({
        behavior: 'smooth'
    });
});




