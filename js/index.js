let navLogo = document.querySelector('.logo-heading');
navLogo.addEventListener('mouseover', (event) => {
    event.target.style.color = 'blue';
})
 let navBtn = document.querySelectorAll('.nav-link');
 navBtn.forEach(el => el.addEventListener('mouseenter', (event) => {
    event.target.style.color = 'blue';
}))

navBtn.forEach(el => el.addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black';
}))

navLogo.addEventListener('click', (event) => {
    event.target.textContent = 'Really Fun Bus';
})


let text = document.querySelector('body');
text.addEventListener('keydown', (event) => {
    event.target.style.color = 'grey';
})

let busImg = document.querySelector('.intro img');
busImg.addEventListener('drag', (event) => {
    event.target.style.opacity = '.5';
})

window.addEventListener('load', (event) => {
    alert('page is done loading');
})


document.querySelector('body').addEventListener('click', (event) => {
    event.target.style.background = 'green';
})

document.querySelector('.text-content h2').addEventListener('click', (event) => {
    event.target.style.color = 'blue';
    event.stopPropagation();
})

let mapPic = document.querySelector('.img-content img');
mapPic.addEventListener('dblclick', (event) => {
    event.target.style.transform = 'scale(1.2)';
})

let html = document.querySelector('html');
window.addEventListener('resize', (event) => {
    html.style.fontSize = "80%";
})

html.addEventListener('keyup', (event) => {
    event.target.style.color = 'red';
})