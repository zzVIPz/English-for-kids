class MainView {
  constructor() {
    this.cardsContainer = document.querySelector('.container-cards');
    this.categoriesContainer = document.querySelector('.container-categories');
    this.navigationMenu = document.querySelector('.navigation');
    this.template = null;
  }

  init(model) {
    this.createNavigationMenu(model.linkNavigationTemplate, Object.keys(model.categories));
  }

  createNavigationMenu(template, links) {
    links.unshift('main page');
    links.forEach((link) => {
      const correctTemplate = this.getCorrectTemplate(template, link, link);
      this.navigationMenu.innerHTML += correctTemplate;
    });
  }

  createCategoryCard(template, word, translation) {
    const correctTemplate = this.getCorrectTemplate(template, word, word, translation);
    this.categoriesContainer.innerHTML += correctTemplate;
  }

  createCard(template, key) {
    const correctTemplate = this.getCorrectTemplate(template, key, key);
    this.cardsContainer.innerHTML += correctTemplate;
  }

  getCorrectTemplate(template, key, description, text) {
    this.template = template;
    const trueKey = key.replace(/ /g, '-');
    if (key) {
      this.template = this.template.replace(/\{key\}/g, trueKey);
    }
    if (description) {
      this.template = this.template.replace(/\{description\}/g, description.toUpperCase());
    }
    if (text) {
      this.template = this.template.replace(/\{text\}/g, text.toUpperCase());
    }
    return this.template;
  }
}

export default MainView;
