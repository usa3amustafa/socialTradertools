// reponsive navbar

const openMenuBtn = document.querySelector('.open-menu-btn')
const closeMenuBtn = document.querySelector('.close-menu-btn')
const navbar = document.querySelector('.navbar')
const navLinks = document.querySelectorAll('.nav-link')
const navBtns = document.querySelectorAll('.nav-btn')

const showNavbar = function () {
  navbar.classList.add('show-navbar')
  openMenuBtn.classList.add('hidden')
}

const removeNavbar = function () {
  navbar.classList.remove('show-navbar')
  openMenuBtn.classList.remove('hidden')
}

openMenuBtn.addEventListener('click', showNavbar)
closeMenuBtn.addEventListener('click', removeNavbar)

navLinks.forEach(navLink => navLink.addEventListener('click', removeNavbar))

navBtns.forEach(navBtn => navBtn.addEventListener('click', removeNavbar))

// sticky nav

// const sectionOne = document.getElementById('features')
// const nav = document.getElementById('nav')
// const logo = document.querySelector('.logo')

// const sectionOneCoords = sectionOne.getBoundingClientRect()

// window.addEventListener('scroll', function () {
//   if (window.scrollY > sectionOneCoords.top) {
//     nav.classList.add('nav-sticky')
//     logo.src = './img/logo.png'
//   } else {
//     nav.classList.remove('nav-sticky')
//     logo.src = './img/logo-dark.png'
//   }
// })

// sticky nav using intersection observer API
const sectionOne = document.querySelector('.header')
const nav = document.getElementById('nav')
const logo = document.querySelector('.logo')
const navHeight = nav.getBoundingClientRect().height

const stickyNav = function (enteries) {
  const [entry] = enteries
  if (!entry.isIntersecting) {
    nav.classList.add('nav-sticky')
    logo.src = './img/logo.png'
  } else {
    nav.classList.remove('nav-sticky')
    logo.src = './img/logo-dark.png'
  }
}

const stickyNavOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: `-${navHeight}px`,
}

const observer = new IntersectionObserver(stickyNav, stickyNavOptions)

observer.observe(sectionOne)
