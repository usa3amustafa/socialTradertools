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

// faq section
