class MainController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.name = null;
    this.burgerMenu = document.querySelector('.burger-menu');
    this.header = document.querySelector('.header');
    this.headerNavigation = document.querySelector('.header__navigation');
    this.navigation = document.querySelector('.navigation');
    this.width = document.body.style.width;
    this.categories = Object.keys(this.model.categories);
    this.container = document.querySelector('.container');
    this.toggle = document.querySelector('#toggle');
    this.footer = document.querySelector('.footer');
    this.mode = 0;
  }

  init() {
    this.name = document.location.hash.slice(1);
    this.renderTemplate();
    this.addListeners();
  }

  renderTemplate() {
    this.view.init(this.model);
    this.categories.forEach((key) => {
      this.view.createCard(this.model.template, key);
    });
  }

  addListeners() {
    this.addCardsActionHandler();
    this.addBurgerMenuClickHandler();
    this.addOverlayPressHandler();
    this.addNavigationMenuMouseEnterHandler();
    this.addCardClickHandler();
    this.addToggleClassHandler();
  }

  addCardClickHandler() {
    this.container.addEventListener('click', (event) => {
      if (event.target.closest('.card')) {
        this.categories.forEach((category) => {
          if (event.target.classList.contains(category)) {
          }
        });
      }
    });
  }

  addCardsActionHandler() {
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

  addBurgerMenuClickHandler() {
    this.burgerMenu.addEventListener('click', () => {
      //todo: think about overflow hidden
      // document.body.style.width = `${document.body.offsetWidth}px`;
      this.toggleMenuProperty();
    });
  }

  addToggleClassHandler() {
    this.toggle.addEventListener('click', () => {
      this.mode = this.mode ? 0 : 1;
      this.header.classList.toggle('header__play');
      this.footer.classList.toggle('footer__play');
    });
  }

  addNavigationMenuMouseEnterHandler() {
    //todo: think about leave from burger
    this.headerNavigation.addEventListener('mouseenter', () => {
      // this.toggleMenuProperty();
    });
  }

  toggleMenuProperty() {
    document.body.classList.toggle('overflow-hidden');
    this.burgerMenu.classList.toggle('burger-menu-active');
    // this.header.classList.toggle('header-active');
    this.headerNavigation.classList.toggle('header__navigation-active');
    this.navigation.classList.toggle('navigation-active');
    // if (node && node.classList.contains('navigation-link')) {
    //   headerNavigation.classList.toggle('header-navigation-active');
    // } else {
    //   if (headerNavigation.classList.contains('header-navigation-active')) {
    //     setTimeout(() => {
    //       headerNavigation.classList.toggle('header-navigation-active');
    //     }, 150);
    //   } else {
    //     headerNavigation.classList.add('header-navigation-active');
    //   }
    // }
    // document.body.style.width = 'auto';
  }

  addOverlayPressHandler() {
    this.headerNavigation.addEventListener('click', (event) => {
      if (event.target.classList.contains('header__navigation-active')) this.toggleMenuProperty();
    });
  }
}

export default MainController;
