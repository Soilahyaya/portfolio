/*===== MENU SHOW =====*/

//~ Cette fonction permet de montrer le menu lorsque l'icône du menu est cliquée
const showMenu = (toggleId, navId) => {
    //~ On sélectionne l'icône du menu et le menu lui-même en utilisant leurs id
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    //~ On ajoute un gestionnaire d'événements à l'icône du menu
    //~ Chaque fois que l'icône du menu est cliquée, on ajoute ou on enlève la classe 'show' du menu
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
//~ On appelle la fonction showMenu avec les identifiants de l'icône du menu et du menu
showMenu('nav-toggle', 'nav-menu');

//~ --------------------expliquation-------------------------------------------------------
//~ Cette fonction permet de montrer le menu lorsque l'icône du menu est cliquée
// const showMenu = (toggleId, navId) => {
    //~ On sélectionne l'icône du menu et le menu lui-même en utilisant leurs identifiants
    // const toggle = document.getElementById(toggleId),
        // nav = document.getElementById(navId)

    //~ Si l'icône du menu et le menu existent...
    // if (toggle && nav) {
        //~ On ajoute un gestionnaire d'événements à l'icône du menu
        //~ Chaque fois que l'icône du menu est cliquée, on ajoute ou on enlève la classe 'show' du menu
        //~ La classe 'show' déplace le côté droit du menu à la position 0 (grâce à la règle CSS ".show {right: 0;}"), 
        //~ ce qui donne l'effet que le menu se déplace depuis le côté droit de l'écran
        //~ Si la classe 'show' est déjà présente, elle est enlevée, ce qui donne l'effet que le menu se retire vers la droite
        // toggle.addEventListener('click', () => {
            // nav.classList.toggle('show')
        // })
    // }
//~ }

//~ On appelle la fonction showMenu avec les identifiants de l'icône du menu et du menu
// showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
//& On sélectionne tous les éléments du menu et on les met dans une variable "navLink"
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //& On enlève la classe 'show' de l'élément du menu
    navMenu.classList.remove('show')
}
//& On attache un gestionnaire d'événements à chaque lien du menu
//& Chaque fois qu'un lien est cliqué, la fonction linkAction() est exécutée
navLink.forEach(n => n.addEventListener('click', linkAction))

//& ------------expliquation--------------------------------------------------------
//& On sélectionne tous les éléments du menu (les liens de la navbar) et on les met dans une variable "navLink"
// const navLink = document.querySelectorAll('.nav__link')

//& On déclare une fonction qui va enlever la classe 'show' de l'élément du menu
// function linkAction() {
    //& On sélectionne le menu par son identifiant 
    // const navMenu = document.getElementById('nav-menu')
    //& On enlève la classe 'show' de l'élément du menu
    //& La classe 'show' est utilisée pour afficher le menu en déplaçant le côté droit de celui-ci à 0 position (à cause de la règle CSS ".show {right: 0;}"), 
    //& ce qui donne l'effet que le menu se déplace depuis le côté droit de l'écran
    //& Lorsqu'on enlève la classe 'show', la propriété 'right' retourne à sa valeur initiale, ce qui donne l'effet que le menu se retire vers la droite
    // navMenu.classList.remove('show')
// }

//& On attache un gestionnaire d'événements à chaque lien du menu
//& Chaque fois qu'un lien est cliqué, la fonction linkAction() est exécutée
//& Cela signifie que chaque fois que l'utilisateur clique sur un lien du menu, la classe 'show' est enlevée du menu, 
//& ce qui donne l'effet que le menu se retire vers la droite
// navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 }); 
