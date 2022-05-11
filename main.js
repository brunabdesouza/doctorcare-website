const showNavOnScroll = () => {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

const showBackToTopButtonOnScroll = () => {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

const activateMenuAtCurrentSection = () => {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = home.offSetTop
  const sectionHeight = home.offSetHeight

  const sectionReachedTargetLine = targetLine >= sectionTop
  const sectionEndsAt = sectionTop + sectionHeight
}

const onScroll = () => {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection()
}

window.addEventListener('scroll', onScroll)

const openMenu = () => {
  document.body.classList.add('expanded-menu')
}

const closeMenu = () => {
  document.body.classList.remove('expanded-menu')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about,
  #about header,
  #about .content
  `)
