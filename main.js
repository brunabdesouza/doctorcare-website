const onScroll = () => {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

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
  #services .cards
  `);