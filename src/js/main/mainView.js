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
    links.push('statistics');
    links.forEach((link) => {
      const correctTemplate = this.getCorrectTemplate(true, template, link, link);
      this.navigationMenu.innerHTML += correctTemplate;
    });
  }

  createCategoryCard(template, word, translation) {
    const correctTemplate = this.getCorrectTemplate(true, template, word, word, translation);
    this.categoriesContainer.innerHTML += correctTemplate;
  }

  createCard(template, key) {
    const correctTemplate = this.getCorrectTemplate(true, template, key, key);
    this.cardsContainer.innerHTML += correctTemplate;
  }

  createModal(data, name, template, phrasesList) {
    let correctTemplate;
    let phrase;
    const trueName = name.toUpperCase();
    if (data) {
      const description = data === 1 ? `${data} mistake` : `${data} mistakes`;
      phrase = this.getCorrectTemplate(false, phrasesList[0], trueName, description);
      correctTemplate = this.getCorrectTemplate(false, template, phrase);
    } else {
      phrase = this.getCorrectTemplate(false, phrasesList[1], trueName);
      correctTemplate = this.getCorrectTemplate(false, template, phrase);
    }
    this.categoriesContainer.innerHTML += correctTemplate;
  }

  getCorrectTemplate(flag, template, key, description, text) {
    this.template = template;
    let trueKey = key;
    let trueDescription = description;
    let trueText = text;
    if (flag) {
      trueKey = key.replace(/ /g, '-');
      if (trueDescription) trueDescription = trueDescription.toUpperCase();
      if (trueText) trueText = trueText.toUpperCase();
    }
    if (key) {
      this.template = this.template.replace(/\{key\}/g, trueKey);
    }
    if (description) {
      this.template = this.template.replace(/\{description\}/g, trueDescription);
    }
    if (text) {
      this.template = this.template.replace(/\{text\}/g, trueText);
    }
    return this.template;
  }
}

export default MainView;
