// document.querySelector('.menu-btn').addEventListener('click', () => {
//   console.log('hola')
// })

let menuButton = document.getElementsByClassName('menu-btn')[0]
menuButton.addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('show')
})

ScrollReveal().reveal('.showcase') //, { delay: 500 })
ScrollReveal().reveal('.news-cards', { delay: 500 })
ScrollReveal().reveal('.cards-banner-one', { delay: 500 })
ScrollReveal().reveal('.cards-banner-two', { delay: 500 })
