class MainController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.name = null;
    this.wrapper = null;
    this.hash = null;
    this.links = null;
    this.burgerMenu = document.querySelector('.burger-menu');
    this.header = document.querySelector('.header');
    this.headerNavigation = document.querySelector('.header__navigation');
    this.navigation = document.querySelector('.navigation');
    this.width = document.body.style.width;
    this.categories = Object.keys(this.model.categories);
    this.container = document.querySelector('.container-cards');
    this.categoriesContainer = document.querySelector('.container-categories');
    this.toggle = document.querySelector('#toggle');
    this.footer = document.querySelector('.footer');
    this.button = document.querySelector('.btn-play');
    this.mode = 0;
    this.state = 0;
    this.counter = 0;
    this.playlist = null;
    this.keys = null;
    this.key = null;
  }

  init() {
    this.setName();
    this.renderTemplate();
    this.addListeners();
  }

  setName() {
    this.name = localStorage.name || 'English for kids';
    document.querySelector('.header__title').innerText = this.name;
  }

  renderTemplate() {
    // if (!document.location.hash.includes(this.name)) {
    //   this.setLocationHash();
    // }
    this.view.init(this.model);
    // const mainPage = this.navigation.querySelector('.navigation__link');
    // mainPage.setAttribute('href', `#main page%name=${this.name}`);
    this.categories.forEach((key) => {
      this.view.createCard(this.model.template, key);
    });
    this.links = document.querySelectorAll('.navigation__link');
    this.setLocationHash();
  }

  addListeners() {
    this.addCardsActionHandler();
    this.addBurgerMenuClickHandler();
    this.addOverlayPressHandler();
    // this.addNavigationMenuMouseEnterHandler();
    // this.addCardClickHandler();
    this.addToggleClickHandler();
    this.addCategoryCardClickHandler();
    this.addNavigationLinkClickHandler();
    this.addHashChangeHandler();
    this.addButtonStartClickHandler();
  }

  setLocationHash() {
    document.location.hash = `main page%name=${this.name}`;
  }

  // addCardClickHandler() {
  //   this.container.addEventListener('click', (event) => {
  //     const card = event.target.closest('.card');
  //     if (card) {
  //       this.categories.forEach((category) => {
  //         if (card.classList.contains(category)) {
  //           this.renderSectionOfCategory(category);
  //         }
  //       });
  //     }
  //   });
  // }

  renderSectionOfCategory(category) {
    if (this.categories.includes(category)) {
      this.container.classList.add('container--hidden');
      this.categoriesContainer.innerText = '';
      this.model.categories[category].forEach((item) => {
        this.view.createCategoryCard(this.model.categoriesTemplate, item.word, item.translation);
      });
    } else {
      this.container.classList.remove('container--hidden');
      this.categoriesContainer.innerText = '';
    }
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
      this.setActiveLink();
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

  setActiveLink() {
    // const hash = this.getHashOfPage();
    let checkState = null;
    this.links.forEach((link) => {
      console.log(this.links);
      link.classList.remove('navigation__link--active');
      if (link.dataset.name === this.hash) {
        link.classList.add('navigation__link--active');
        checkState += 1;
      }
    });
    //todo check will there correct state?
    if (!checkState) {
      this.links[0].classList.add('navigation__link--active');
    }
  }

  getHashOfPage() {
    this.hash = document.location.hash.slice(1);
    return this.hash;
  }

  addOverlayPressHandler() {
    this.headerNavigation.addEventListener('click', (event) => {
      if (event.target.classList.contains('header__navigation-active')) this.toggleMenuProperty();
    });
  }

  addNavigationLinkClickHandler() {
    // this.navigation.addEventListener('click', (event) => {
    //   const categoryName = event.target.dataset.name;
    //   if (categoryName) {
    //     this.renderSectionOfCategory(categoryName);
    //     this.toggleMenuProperty();
    //   }
    // });

    this.navigation.addEventListener('click', (event) => {
      const categoryName = event.target.dataset.name;
      if (categoryName) {
        // this.renderSectionOfCategory(categoryName);
        this.toggleMenuProperty();
      }
    });
  }

  addHashChangeHandler() {
    window.addEventListener('hashchange', () => {
      // const hash = this.getHashOfPage();
      this.getHashOfPage();
      this.renderSectionOfCategory(this.hash);
      if (this.mode) {
        this.setDefaultPlayModeState();
        this.changePlayMode();
        this.setButtonStartGameState();
      }
    });
  }

  getAudio(key) {
    this.audio = new Audio(`../src/assets/media/${key}.mp3`);
    return this.audio;
  }

  addCategoryCardClickHandler() {
    this.audioPlay = (event) => {
      const card = event.target.closest('.category-card');
      if (card) {
        // todo: think about create object with instance of audio
        const audio = this.getAudio(card.dataset.name);
        audio.play();
      }
    };
    this.categoriesContainer.addEventListener('click', this.audioPlay);
  }

  addToggleClickHandler() {
    this.toggle.addEventListener('click', () => {
      this.mode = this.mode ? 0 : 1;
      this.header.classList.toggle('header__play');
      this.footer.classList.toggle('footer__play');
      if (this.mode) {
        this.addCategoryCardPlayModeClickHandler();
      }
      this.changePlayMode(this.mode);
    });
  }

  changePlayMode() {
    if (this.mode) {
      this.categoriesContainer.removeEventListener('click', this.audioPlay);
      this.setButtonStartGameState();
      const descriptions = document.querySelectorAll('.category-card__description, .inside');
      descriptions.forEach((node) => {
        node.classList.add('disabled');
      });
    } else {
      this.categoriesContainer.addEventListener('click', this.audioPlay);
      this.categoriesContainer.removeEventListener('click', this.checkAnswer);
      this.button.classList.remove('btn-play--active');
      this.setDefaultPlayModeState();
      const descriptions = document.querySelectorAll(
        '.category-card__description, .inside, .category-card__wrapper',
      );
      descriptions.forEach((node) => {
        node.classList.remove('disabled', 'inactive');
      });
      const container = document.querySelectorAll('.category-card__container');
      container.forEach((item) => {
        const node = item;
        node.innerHTML = '';
      });
    }
  }

  addCategoryCardPlayModeClickHandler() {
    this.checkAnswer = (event) => {
      const card = event.target.closest('.category-card__wrapper:not(.inactive)');
      if (card && this.state) {
        const dataName = card.firstElementChild.dataset.name;
        if (dataName === this.key) {
          const container = document.querySelector(
            `[data-name="${this.key}"] .category-card__container`,
          );
          container.insertAdjacentHTML('afterbegin', this.model.correctTemplate);
          card.classList.add('inactive');
          this.counter += 1;
          if (this.counter < this.keys.length) {
            this.playAudioFromPlaylist();
          } else {
            this.setDefaultPlayModeState();
            console.log('finish');
          }
        } else {
          console.log('***');
          const container = document.querySelector(
            `[data-name="${dataName}"] .category-card__container`,
          );
          container.insertAdjacentHTML('afterbegin', this.model.incorrectTemplate);
        }
      }
    };
    this.categoriesContainer.addEventListener('click', this.checkAnswer);
  }

  setButtonStartGameState() {
    if (this.categories.includes(this.hash)) {
      this.button.classList.add('btn-play--active');
    } else {
      this.button.classList.remove('btn-play--active');
    }
  }

  addButtonStartClickHandler() {
    this.button.addEventListener('click', () => {
      console.log('click', this.playlist);
      this.button.innerText = 'REPEAT';
      this.state = 1;
      if (this.playlist) {
        this.playAudioFromPlaylist();
      } else {
        this.getPlayList();
        this.playAudioFromPlaylist();
      }
    });
  }

  getPlayList() {
    let wordsList = this.model.categories[this.hash];
    wordsList = this.shuffleElements(wordsList);
    this.playlist = {};
    wordsList.forEach((item) => {
      this.playlist[item.word] = this.getAudio(item.word);
    });
  }

  setDefaultPlayModeState() {
    this.playlist = null;
    this.button.innerText = 'START';
    this.keys = null;
    this.key = null;
    this.counter = 0;
    this.state = 0;
  }

  playAudioFromPlaylist() {
    // todo: think about delete object.keys
    this.keys = Object.keys(this.playlist);
    const cnt = this.counter;
    console.log('cnt', cnt);
    console.log('this.playlist', this.playlist);
    this.key = this.keys[cnt];
    setTimeout(() => {
      this.playlist[this.keys[cnt]].play();
    }, 300);
  }

  shuffleElements(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}

export default MainController;
