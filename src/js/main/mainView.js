class MainView {
  constructor() {
    this.container = document.querySelector('.container');
  }

  init() {}

  createCard(template, key) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('card__wrapper');
    const correctTemplate = template.replace(/\{(.+?)\}/g, key);
    console.log(correctTemplate);
    wrapper.innerHTML = correctTemplate;
    this.container.append(wrapper);
  }
}

export default MainView;
