function animateOnScroll() {
  var elements = document.querySelectorAll(".section, .fade-in, .fade-up");

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    if (isInViewport(element)) {
      element.classList.add("animate");
    }
  }
}

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("resize", animateOnScroll);

animateOnScroll();

// Seletor do botão para voltar ao topo
const backToTopButton = document.querySelector(".back-to-top");

// Função para rolar suavemente para o topo
function scrollToTop(event) {
  event.preventDefault();
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start = null;

  function scrollAnimation(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(
      0,
      easeInOutCubic(progress, startPosition, distance, duration)
    );
    if (progress < duration) {
      window.requestAnimationFrame(scrollAnimation);
    }
  }

  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }

  window.requestAnimationFrame(scrollAnimation);
}

// Adiciona o evento de clique ao botão
backToTopButton.addEventListener("click", scrollToTop);

// Mostra ou esconde o botão dependendo da posição da página
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

//flutuante
window.addEventListener("load", function () {
  const logoButtons = document.querySelector(".logo-buttons");
  logoButtons.classList.add("animate");
});

//Animar foto
//function animateProfilePicture() {
// var profilePicture = document.querySelector('.animar-foto');
// var rect = profilePicture.getBoundingClientRect();
// var isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;

//if (isInViewport) {
//profilePicture.classList.add('animate');
//} else {
//  profilePicture.classList.remove('animate');
//}
//}

// Adicione um listener para verificar quando a página é rolada
//window.addEventListener('scroll', animateProfilePicture);

// Verifique a animação quando a página carregar
//animateProfilePicture();

//function animateZoomOut() {
//const img = document.querySelector('.minhafoto');
//const originalWidth = img.offsetWidth;
//const originalHeight = img.offsetHeight;
//const zoomScale = originalWidth / (originalWidth * 0.1); // Defina o fator de escala desejado, nesse caso 0.8
//
//img.style.transform = `scale(${zoomScale})`;
//}

//nav responsiva

// Adicione um evento de clique ao ícone do menu
document.querySelector("#menu-btn").onclick = () => {
  document.querySelector("#menu-btn").classList.toggle("fa-times");
  document.querySelector(".navbar").classList.toggle("active");
};

const links = document.querySelectorAll(".pcnav a");

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    links.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Adiciona evento para remover a classe 'active' ao rolar para fora da seção
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const scrollPosition = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    const links = document.querySelectorAll(".pcnav a");
    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (
        sectionTop <= scrollPosition &&
        sectionBottom > scrollPosition &&
        `#${section.id}` === href
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});

/*header*/
window.addEventListener("scroll", function () {
  var header = document.querySelector(".page-header");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    // ou qualquer valor que preferir
    header.classList.add("header-shadow");
  } else {
    header.classList.remove("header-shadow");
  }
});

window.addEventListener("scroll", function () {
  var windowHeight = window.innerHeight;
  var projectsSection = document.getElementById("projetos").offsetTop;

  if (windowHeight + window.scrollY > projectsSection) {
    document
      .querySelectorAll(".projetos-container > div")
      .forEach(function (projeto, index) {
        setTimeout(function () {
          projeto.classList.add("visible");
        }, index * 200);
      });
  }
});

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const sections = document.querySelectorAll(".page-section");

themeToggle.addEventListener("change", function () {
  if (this.checked) {
    body.classList.add("dark-theme");
    sections.forEach((section) => section.classList.add("dark-theme"));
  } else {
    body.classList.remove("dark-theme");
    sections.forEach((section) => section.classList.remove("dark-theme"));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.querySelector("#theme-toggle");

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark-theme");
      document.getElementById("habilidades").classList.remove("dark-bg");
      document.getElementById("contato").classList.remove("dark-bg");
      // Adicione as classes 'dark-theme' às seções de habilidades e de contato
      document.getElementById("habilidades").classList.add("dark-theme");
      document.getElementById("contato").classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
      // Remova as classes 'dark-theme' das seções de habilidades e de contato
      document.getElementById("habilidades").classList.remove("dark-theme");
      document.getElementById("contato").classList.remove("dark-theme");
    }
  });
});
