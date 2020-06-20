// document.querySelector('.menu-btn').addEventListener('click', () => {
//   console.log('hola')
// })

let menuButton = document.getElementsByClassName('menu-btn')[0]
menuButton.addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('show')
})
