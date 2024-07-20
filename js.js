var menu = document.querySelector("#Bars");
var list = document.querySelector(".list ul");
menu.onclick = () =>{
    list.classList.toggle('active');
}
var swiper = new Swiper(".home-slide", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  AOS.init();

  // Sélection des éléments nécessaires
var box = document.querySelector('.box');
var boxContents = document.querySelectorAll('.box-content');
var nextButton = document.querySelector('.nextt');
var backButton = document.querySelector('.backe');

// Variables pour le suivi de l'index actif et le nombre total d'éléments
var currentIndex = 0;
var totalItems = boxContents.length;

// Fonction pour afficher les éléments en fonction de l'index
function showItem(index) {
    // Masquer tous les éléments
    for (var i = 0; i < totalItems; i++) {
        boxContents[i].classList.remove('active');
        boxContents[i].classList.remove('active-next');
        boxContents[i].classList.remove('active-prev');
    }

    // Afficher l'élément actuel
    boxContents[index].classList.add('active');

    // Afficher l'élément précédent s'il existe
    if (index > 0) {
        boxContents[index - 1].classList.add('active-next');
    } else {
        // Si index est 0, montrer le dernier élément comme précédent
        boxContents[totalItems - 1].classList.add('active-next');
    }

    // Afficher l'élément suivant s'il existe
    if (index < totalItems - 1) {
        boxContents[index + 1].classList.add('active-prev');
    } else {
        // Si index est le dernier élément, montrer le premier élément comme suivant
        boxContents[0].classList.add('active-prev');
    }
}

// Fonction pour passer à l'élément suivant
function nextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
}

// Fonction pour revenir à l'élément précédent
function prevItem() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showItem(currentIndex);
}

// Gestion des événements pour les boutons de navigation
nextButton.addEventListener('click', nextItem);
backButton.addEventListener('click', prevItem);

// Fonction pour mettre à jour les classes en fonction de la largeur de l'écran
function updateClasses() {
    if (window.innerWidth <= 600) {
        // Masquer tous les éléments sauf le premier
        for (var i = 1; i < totalItems; i++) {
            boxContents[i].classList.remove('active');
            boxContents[i].classList.remove('active-next');
            boxContents[i].classList.remove('active-prev');
        }
        // Afficher le premier élément
        boxContents[0].classList.add('active');
    } else {
        // Réinitialiser les classes pour afficher normalement sur les grands écrans
        for (var i = 0; i < totalItems; i++) {
            boxContents[i].classList.remove('active');
            boxContents[i].classList.remove('active-next');
            boxContents[i].classList.remove('active-prev');
        }
        // Afficher le premier élément
        boxContents[0].classList.add('active');
    }
}

// Appeler la fonction updateClasses au chargement de la page
updateClasses();

// Appeler la fonction updateClasses lors du redimensionnement de la fenêtre
window.addEventListener('resize', updateClasses);

/*------------------------------card-img---------------------------------*/
var swiper = new Swiper(".menu-slide", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
    delay: 4500,
    disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
  });