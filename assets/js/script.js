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

// ================== Accodrion Skills ===================

// ================= Qualification tabs ====================

// ===================== Modal Services==================

