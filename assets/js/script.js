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

let swiper = new Swiper('.portofolio__container', {
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


// ===================== Scroll Sections Active Link ==================


// ===================== Change backgrkound header==================