 // === ELEMENTS ===
// const darkMode = document.getElementById('dark-mode');
// const icon = darkMode.querySelector('i');
const sections = document.querySelectorAll("section");


// const appear = document.querySelector('#popup');
// const login_click = document.querySelector('#login-btn');

// login_click.addEventListener('click', ()=>{
//     appear.classList.add('active-pop');
// });

const wrapper = document.querySelector('.wrapper');
const btnLogin = document.querySelector('.login-btn');
const btnClose = document.querySelector('.close');


// para sa log in button
btnLogin.addEventListener('click', ()=>{
    wrapper.classList.add('active-pop');
});


// para sa x button
btnClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-pop');
});




/* ===================== 
    dark mode
====================== */


const darkModeBtn = document.querySelector('#dark-mode');
const icon = darkModeBtn.querySelector('i'); 

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'light') {
        icon.classList.replace('bx-moon', 'bx-sun');
    } else {
        icon.classList.replace('bx-sun', 'bx-moon');
    }
}

const savedTheme = localStorage.getItem('theme') || 
                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');


setTheme(savedTheme);

darkModeBtn.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    setTheme(isLight ? 'dark' : 'light');
});

/* ===================== 
    nav
====================== */
const navItems = document.querySelectorAll('.nav-item');

// para umilaw pag pinindot
navItems.forEach(item => {
  item.addEventListener('click', function() {
    // after click one will remove the active
    navItems.forEach(nav => nav.classList.remove('active'));
    // para magkaron ng kulay yung pinindot
    this.classList.add('active');
  });
});


// para sa scroll
const view = {
  root: null, 
  threshold: 0.6,
};

const to_see = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // to get thr id ng section kung saan ka nandun
      const id = entry.target.getAttribute("id");

      // Remove 'active' 
      navItems.forEach((link) => {
        link.classList.remove("active");
        
        // kapag same id kukulay
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}, view);


sections.forEach((section) => {
  to_see.observe(section);
});



/* ===================== 
    login
====================== */




/* ===================== 
    Typed Js 
====================== */
const typed = new Typed(".multiple-text", {
  strings: ["Junior Web Developer", "Dalubcenian", "Always Love You"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});



// === SCROLL ANIMATIONS ===
    // const observerOptions = {
    //     threshold: 0.1,
    //     rootMargin: '0px 0px -50px 0px'
    // };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(entry.target)//para magprint sa console
                entry.target.classList.add("show")//para lumabas
            }else{
              entry.target.classList.remove("show");//para umalis ulit pag baba
            }
        })
    }, {
      threshold: 0.01,
      rootMargin: '0px 0px -50px 0px'
    });
    const animatedElements = document.querySelectorAll('.fade-in, .scale-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));






    
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};
