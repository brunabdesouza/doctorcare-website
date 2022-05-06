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
