/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, devopsId) =>{
    const toggle = document.getElementById(toggleId),
    devops = document.getElementById(devopsId)

    if(toggle && devops){
        toggle.addEventListener('click', ()=>{
            devops.classList.toggle('show')
        })
    }
}
showMenu('devops-toggle','devops-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const devopsLink = document.querySelectorAll('.devops__link')

function linkAction(){
    const devopsMenu = document.getElementById('devops-menu')
    // When we click on each devops__link, we remove the show-menu class
    devopsMenu.classList.remove('show')
}
devopsLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.devops__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
