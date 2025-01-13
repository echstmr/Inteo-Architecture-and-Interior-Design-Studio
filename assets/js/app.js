const navLinks = document.getElementById('navLinks')
const menuIcon = document.getElementById('menuIcon')
const closeIcon = document.getElementById('closeIcon')

menuIcon.addEventListener('click', () => {
    navLinks.style.transition = '0.3s ease'
    navLinks.classList.add('top-0')
})
closeIcon.addEventListener('click', () => {
    navLinks.style.transition = '0.3s ease'
    navLinks.classList.remove('top-0')
})