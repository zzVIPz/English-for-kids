class MainView {
  constructor() {
    this.container = document.querySelector('.container');
    this.navigationMenu = document.querySelector('.navigation');
  }

  init(model) {
    this.createNavigationMenu(model.linkNavigationTemplate, Object.keys(model.categories));
  }

  createNavigationMenu(template, links) {
    links.forEach((link) => {
      const correctTemplate = this.getCorrectTemplate(template, link);
      this.navigationMenu.innerHTML += correctTemplate;
    });
  }

  createCard(template, key) {
    const correctTemplate = this.getCorrectTemplate(template, key);
    this.container.innerHTML += correctTemplate;
  }

  getCorrectTemplate(template, key) {
    return template.replace(/\{(.+?)\}/g, key);
  }
}

export default MainView;
