// ================== Menu Show or Hidden ==============

const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close');



// ================== Menu Show  ==============
// Vaildate if constant exist

if(navToggle){
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu')
    })
}


// Menu Hidden Hidden 
// Validate if constant exist 

if(navClose){
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu')
    })
}



// ============ Remove Menu Mobile =============

const navLink = document.querySelectorAll("#nav-menu")
    function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

// ================== The Skills ===================

const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass= this.parentNode.className

    for(i=0; i<skillsContent.length; i++){
        skillsContent[i].className='skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className="skills__content skills__open"
    }
}

skillsHeader.forEach((e)=>{
    e.addEventListener('click',toggleSkills)
})

// ================= Qualification tabs ====================

const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content')

tabs.forEach(tab => {
    tab.addEventListener('click', () =>{
       
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })

        target.classList.add('qualification__active');
        
       
  
        tab.classList.add('qualification__active');
    });

});

// ===================== Modal Services==================

const modalViews = document.querySelectorAll('.services__modal')
const modalBtns = document.querySelectorAll('.services__button')
const modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}


modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', () =>{
        modal(i)

    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click' , () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

// ======================== Portofoli Swiper ====================

let swiperPortofolio = new Swiper('.portofolio__container', {
    cssMode: true,
    loop:true,
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
})

// ===================== Testimonials ==================
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop:true,
    grabCursor : true,
    spaceBetween:48,
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
        dynamicBullets:true,
    },

    breakpoints:{
        568:{
            slidesPerView:2,
        }
    }
})


// ===================== Scroll Sections Active Link ==================


const sections =  document.querySelectorAll('section[id]')


function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current. offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')


        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
// ===================== Change backgrkound header==================


function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader)


// ===================================== Show Scroll Top ================

function scrolltop(){
    const scrolltop = document.getElementById('scroll-up')

    if(this.scrollY >= 560) scrolltop.classList.add('show-scroll'); else scrolltop.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrolltop)

// ======================================= Dark Light Theme =========================================

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

//Previously selection

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtain the current theme that interface has by comparing with the dark theme class 

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// Checking the preovius preference

if(selectedTheme){
    // If the validation is fullfilled, we ask what the issuewas to know if we activate or deactivate the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}
//Activate / dactivate he theme manuall with the button

themeButton.addEventListener('click', () =>{
    //Add remove dark icone and theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // Save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentTheme())
    
})



