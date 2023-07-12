function animateOnScroll() {
  var elements = document.querySelectorAll('.section, .fade-in, .fade-up');

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    if (isInViewport(element)) {
      element.classList.add('animate');
    }
  }
}

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('resize', animateOnScroll);

animateOnScroll();

  // Seletor do botão para voltar ao topo
  const backToTopButton = document.querySelector('.back-to-top');

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
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) {
        window.requestAnimationFrame(scrollAnimation);
      }
    }

    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }

    window.requestAnimationFrame(scrollAnimation);
  }

  // Adiciona o evento de clique ao botão
  backToTopButton.addEventListener('click', scrollToTop);

  // Mostra ou esconde o botão dependendo da posição da página
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 200) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });  