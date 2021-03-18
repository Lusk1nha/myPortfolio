const navPortfolio = document.querySelector('.nav-top')
const navProjects = document.querySelector('.nav-projects')
const navContacts = document.querySelector('.nav-contacts')

const navButtons = [navPortfolio, navProjects, navContacts]

navButtons.forEach(button => {
  button.addEventListener('click', moveScroll)
})

function moveScroll() {
  const btnWhere = this.innerHTML
  if ( btnWhere == 'Portfolio' ) {
    return window.scroll({
      top: 0,
      behavior: 'smooth'
    })

  } else if ( btnWhere == 'Projetos' ) {
    return window.scroll({
      top: 400,
      behavior: 'smooth'
    })

  } else {
    return window.scroll({
      top: 4000,
      behavior: 'smooth'
    })

  }
}

