
// ========FADE HEADER WHEN SCROLLING====== //
window.addEventListener("scroll", ()=> {
    if(document.body.scrollTop > 15 || document.documentElement.scrollTop > 15){
        document.getElementById('header').classList.add('scroll-header')
    } else {
        document.getElementById('header').classList.remove('scroll-header')
    }
})

// ========RESPONSIVE MENU BUTTON====== //
let MenuBtn = document.getElementById('MenuBtn')
let ResMenu = document.getElementById('ResMenu')
MenuBtn.addEventListener('click', ()=> {
    ResMenu.classList.toggle('Res-Menu')
    MenuBtn.classList.toggle('fa-xmark')
})


// ========TEXT ANIMATION====== //
let type = new Typed('.TypingAnimation', {
    strings: ['Web Designer..', 'Graphic Designer..',  'App Developer..'  ],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
})

// ========BACK TO INDEX/TOP====== //
let BackTop = document.getElementById('BackTop')

BackTop.addEventListener('click', ()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


// ========CLICK A SPECIFIC SECTION/NAVIGATION====== //
let navLinks = document.querySelectorAll('header nav a')
let Section = document.querySelectorAll('section')

window.addEventListener('scroll', ()=>{
    const scrollPos = window.scrollY + 10
    Section.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute("id") === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
});

