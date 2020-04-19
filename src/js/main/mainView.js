class MainView {
  constructor() {
    this.cardsContainer = document.querySelector('.container-cards');
    this.categoriesContainer = document.querySelector('.container-categories');
    this.navigationMenu = document.querySelector('.navigation');
    this.template = null;
  }

  init(model, name) {
    this.createNavigationMenu(model.linkNavigationTemplate, Object.keys(model.categories), name);
  }

  createNavigationMenu(template, links, name) {
    links.unshift('main page');
    links.push('statistics');
    links.push('log out');
    links.forEach((link) => {
      const correctTemplate = this.getCorrectTemplate(true, template, link, link);
      this.navigationMenu.innerHTML += correctTemplate;
    });
    document
      .querySelector('[data-name="statistics"]')
      .setAttribute('href', `./statistics.html#name=${name}`);
    document.querySelector('[data-name="log-out"]').setAttribute('href', '../index.html');
  }

  createCategoryCard(template, word, translation) {
    const correctTemplate = this.getCorrectTemplate(true, template, word, word, translation);
    this.categoriesContainer.innerHTML += correctTemplate;
  }

  createCard(template, key, text) {
    console.log('image', text);
    const correctTemplate = this.getCorrectTemplate(true, template, key, key, null, text);
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

  getCorrectTemplate(flag, template, key, description, text, name) {
    this.template = template;
    let trueKey = key;
    let trueDescription = description;
    let trueText = text;
    if (flag) {
      trueKey = key.replace(/ /g, '-');
      if (trueDescription) trueDescription = trueDescription.toUpperCase();
      if (trueText) trueText = trueText.toUpperCase();
    }
    if (key || key === 0) {
      this.template = this.template.replace(/\{key\}/g, trueKey);
    }
    if (description || description === 0) {
      this.template = this.template.replace(/\{description\}/g, trueDescription);
    }
    if (text) {
      this.template = this.template.replace(/\{text\}/g, trueText);
    }
    if (name) {
      this.template = this.template.replace(/\{text\}/g, name);
    }
    return this.template;
  }
}

export default MainView;
