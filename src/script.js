/*
    dark and light mode
*/ 
const btn_mode = document.querySelector('.toggle');
const icon = document.querySelector('.toggle i');
btn_mode.onclick = function() {
    theBody.classList.toggle('light-theme');
    if(theBody.classList.contains('light-theme')){
        icon.classList.add('bi-moon');
        icon.classList.remove('bi-sun');
    }
    else{
        icon.classList.add('bi-sun');
        icon.classList.remove('bi-moon');
    }
}

// Mousemove
const mousemove = document.getElementById('mousemove');
window.addEventListener('mousemove', (e)=>{
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
})
window.addEventListener('mousedown',()=>{
    mousemove.style.transform = 'scale(1) translate(-25%, -25%)';
    // mousemove.style.border = '1px solid #6ef3a5';
})
window.addEventListener('mouseup',()=>{
    mousemove.style.transform = 'scale(1) translate(-50%, -50%)';
    mousemove.style.backgroundColor = '#6ef3a5';
})

// button menu navBar 
const navBar = document.querySelector('.nav-js');
const menuLists = document.querySelector('.menu-list');
const btnToogle = document.querySelector('.btn-toogle');
const closeBtn = document.querySelector('.close');
const theBody = document.querySelector('body');
const hiroImg = document.querySelector('.hiro-img-box');

// All about navigation bar SCROLL
window.addEventListener('scroll',()=>{
    if(window.scrollY > 10){
        navBar.classList.add('nav-scroll');
        hiroImg.classList.remove('hiro-img');
    }
    else {
        navBar.classList.remove('nav-scroll');
        navBar.style.transition='.7s';
        hiroImg.classList.add('hiro-img');
        hiroImg.style.transition='1s';
    }
})

// Link active 
const links = document.querySelectorAll('.link');
links.forEach(link => {
    link.addEventListener('click', (e)=>{
        const link1 = document.getElementById('link-1');
        const link2 = document.getElementById('link-2');
        const link3 = document.getElementById('link-3');
        const link4 = document.getElementById('link-4');
        const link5 = document.getElementById('link-5');
        const link6 = document.getElementById('link-6');
        if(e.target.id == "link-2"){
            link1.classList.remove('active');
            link2.classList.add('active')
        }
        else if(e.target.id == "link-3"){
            link2.classList.remove('active');
            link3.classList.add('active');
        }
        else if(e.target.id == "link-4"){
            link3.classList.remove('active');
            link4.classList.add('active');
        }
        else if(e.target.id == "link-5"){
            link4.classList.remove('active');
            link5.classList.add('active');
        }
        else if(e.target.id == "link-6"){
            link5.classList.remove('active');
            link6.classList.add('active');
        }
        else if(e.target.id == "link-1"){
            link6.classList.remove('active');
            link1.classList.add('active');
        }
    })
});

// All about menu-list
btnToogle.addEventListener('click',()=>{
    menuLists.classList.add('show-menu');
    navBar.style.display="none";
})
menuLists.addEventListener('click',()=>{
    menuLists.classList.remove('show-menu');
    btnToogle.style.display="block";
})
closeBtn.addEventListener('click',()=>{
        menuLists.classList.add('close-menu');
        navBar.style.display="block";
        navBar.style.display="flex";
})


// Hero typed effect
const typed = new Typed('.typed', {
    strings: ['Designer', 'Freelancer', 'Developper'],
    typeSpeed: 30,
    loop : true,
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 2000
  });

// All about portfolio intersectionObserver
let options = {
    rootMargin: "-100px 0px",
    treshhold: 1000
}
const observer = new IntersectionObserver(handle_intersect, options);
const observables = document.querySelectorAll(".obs");

observables.forEach(observable => {
    if (observable.classList.contains("obs")){
        observable.classList.add("obs--not-visible"); 
    }
    observer.observe(observable);
})

function handle_intersect(entries, observer){
    entries.forEach(entry => {

        if (entry.isIntersecting){
            entry.target.classList.add("obs--not-visible");
      }
      else{
        entry.target.classList.remove("obs--not-visible");
      }
    })
}

// ************************* Service popUp buttons *****************************

const servicesButtons = document.querySelectorAll('.box-service');
const mainPage = document.querySelector('.main-page');
const ux_pop = document.querySelector('.ux-pop');
const front_pop = document.querySelector('.front-pop');
const brand_pop = document.querySelector('.brand-pop');

servicesButtons.forEach(button => {
    button.addEventListener('click', (e)=>{
    if(e.target.id == "ux-btn"){
        ux_pop.classList.add('show-pop');
        theBody.classList.add('the-body');
        mainPage.classList.add('the-main-page');
        navBar.style.opacity = '0';
    }
    else if(e.target.id == "font-btn"){
        front_pop.classList.add('show-pop');
        theBody.classList.add('the-body');
        mainPage.classList.add('the-main-page');
        navBar.style.opacity = '0';
    }
    else if(e.target.id == "brand-btn"){
        brand_pop.classList.add('show-pop');
        theBody.classList.add('the-body');
        mainPage.classList.add('the-main-page');
        navBar.style.opacity = '0';
    }
    else {
        
    }
    })
});

// Remove the popUp service
const closeUxBtn = document.getElementById('close-ux-btn').addEventListener('click',()=>{
    ux_pop.classList.remove('show-pop');
    theBody.classList.remove('the-body');
    mainPage.classList.remove('the-main-page');
    navBar.style.opacity = '1';
})
const closeFrontBtn = document.getElementById('close-front-btn').addEventListener('click',()=>{
    front_pop.classList.remove('show-pop');
    theBody.classList.remove('the-body');
    mainPage.classList.remove('the-main-page');
    navBar.style.opacity = '1';
})
const closeBrandBtn = document.getElementById('close-brand-btn').addEventListener('click',()=>{
    brand_pop.classList.remove('show-pop');
    theBody.classList.remove('the-body');
    mainPage.classList.remove('the-main-page');
    navBar.style.opacity = '1';
})




// Main page, all design start here!
// We are proceding to select it, which it's to primary body
// console.log(mainPage);


// Resume
const observer1 = new IntersectionObserver((entries) =>{
    for(const entry of entries){
        if(entry.isIntersecting){
            entry.target.animate([
                {transform : 'translateX(-100px)', opacity:0},
                {transform : 'translateX(0px)', opacity:1},
            ], {
                duration:1000
            })
        }
    }
})

const observer2 = new IntersectionObserver((entries) =>{
    for(const entry of entries){
        if(entry.isIntersecting){
            entry.target.animate([
                {transform : 'translateY(100px)', opacity:0},
                {transform : 'translateY(0px)', opacity:1},
            ], {
                duration:1000
            })
        }
    }
})

const observer3 = new IntersectionObserver((entries) =>{
    for(const entry of entries){
        if(entry.isIntersecting){
            entry.target.animate([
                {transform : 'translateX(100px)', opacity:0},
                {transform : 'translateX(0px)', opacity:1},
            ], {
                duration:1000
            })
        }
    }
})
observer1.observe(document.querySelector('.obs-ref-1'));
observer2.observe(document.querySelector('.obs-ref-2'));
observer3.observe(document.querySelector('.obs-ref-3'));