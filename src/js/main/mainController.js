class MainController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.name = null;
  }

  init() {
    this.name = document.location.hash.slice(1);
    this.renderTemplate();
    this.addCardsListener();
  }

  renderTemplate() {
    console.log(Object.keys(this.model.categories));
    Object.keys(this.model.categories).forEach((key) => {
      this.view.createCard(this.model.template, key);
    });
  }

  addCardsListener() {
    this.wrapper = document.querySelectorAll('.card__wrapper');

    this.wrapper.forEach((node) => {
      const card = node.querySelector('.card');
      const cardBg = card.querySelector('.card-bg');
      const state = {
        width: node.offsetWidth,
        height: node.offsetHeight,
        mouseX: 0,
        mouseY: 0,
        mouseLeaveDelay: null,
      };

      node.addEventListener('mouseenter', () => {
        clearTimeout(state.mouseLeaveDelay);
      });

      node.addEventListener('mousemove', (event) => {
        state.mouseX = event.pageX - node.offsetLeft - state.width / 2;
        state.mouseY = event.pageY - node.offsetTop - state.height / 2;

        // parallax angle in card
        const angleX = (state.mouseX / state.width) * 30;
        const angleY = (state.mouseY / state.height) * -30;
        card.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg) `;

        // parallax position of background in card
        const posX = (state.mouseX / state.width) * -40;
        const posY = (state.mouseY / state.height) * -40;
        cardBg.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
      });

      node.addEventListener('mouseleave', () => {
        state.mouseLeaveDelay = setTimeout(() => {
          card.style.transform = 'rotateY(0deg) rotateX(0deg) ';
          cardBg.style.transform = 'translateX(0px) translateY(0px)';
        }, 1000);
      });
    });
  }
}

export default MainController;
