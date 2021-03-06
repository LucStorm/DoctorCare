window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção passou da linha
  // quais dados vou precisar?

  //topo da seção
  const sectionTop = section.offsetTop
  //altura da seçao
  const sectionHeight = section.offsetHeight

  //o topo da seção chegou ou ultrapassou da linha
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //verificar se a base está abaixo da linha alvo
  //quais dados vou precisar?
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }

  // console.log(
  //   'o final da section passou da targetline?',
  //   sectionEndPassedTargetLine
  // )
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 700
}).reveal(
  `#home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`
)
