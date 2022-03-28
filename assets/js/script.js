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

// ===================== Modal Services==================



// ===================== Testimonials ==================


// ===================== Scroll Sections Active Link ==================


// ===================== Change backgrkound header==================