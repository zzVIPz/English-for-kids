import MainController from '../main/mainController';

class statisticsController extends MainController {
  constructor(model, view) {
    super();
    this.model = model;
    this.view = view;
    this.statistics = JSON.parse(localStorage.statistics);
    this.table = document.querySelector('.table');
    this.state = 0;
    this.btnReset = document.querySelector('.btn-reset');
    this.btnRepeat = document.querySelector('.btn-repeat');
  }

  init() {
    this.setName();
    this.addErrorRateData();
    this.addListeners();
    this.renderTemplate();
  }

  addErrorRateData() {
    this.statistics.forEach((element) => {
      const item = element;
      const value = Math.round(
        (item.playErrorClick * 100) / (item.playErrorClick + item.playCorrectClick),
      );
      item.errorRate = value || 0;
    });
  }

  renderTemplate() {
    this.view.init(this.model, this.statistics);
  }

  addListeners() {
    this.buttonArrowsClickHandler();
    this.buttonResetClickHandler();
    this.buttonRepeatClickHandler();
  }

  buttonArrowsClickHandler() {
    this.table.addEventListener('click', (event) => {
      this.wrapper = event.target.closest('.header-wrapper');
      const { wrapper } = this;
      if (wrapper) {
        const dataAttribute = wrapper.dataset.name;
        if (wrapper.classList.contains('passive')) {
          this.toggleStylesArrowButtons('active-up', 'passive', dataAttribute, 'btn-up');
          this.sortBySelectedValue(this.statistics, dataAttribute, 'straight');
          return;
        }
        if (wrapper.classList.contains('active-up')) {
          this.toggleStylesArrowButtons('active-down', 'active-up', dataAttribute, 'btn-down');
          this.sortBySelectedValue(this.statistics, dataAttribute, 'back');
          return;
        }
        if (wrapper.classList.contains('active-down')) {
          this.toggleStylesArrowButtons('passive', 'active-down', dataAttribute);
          this.sortBySelectedValue(this.statistics, dataAttribute, 'default');
        }
      }
    });
  }

  toggleStylesArrowButtons(addClass, removeClass, attribute, objectClass) {
    document.querySelectorAll('.btn-arrow').forEach((svg) => {
      svg.getSVGDocument().querySelector('svg').setAttribute('fill', 'black');
    });
    document.querySelectorAll('.header-wrapper').forEach((node) => {
      if (node.dataset.name !== attribute) {
        node.classList.remove('active-down', 'active-up');
        node.classList.add('passive');
      }
    });
    this.wrapper.classList.add(addClass);
    this.wrapper.classList.remove(removeClass);
    if (objectClass) {
      document
        .querySelector(`[data-name="${attribute}"] .${objectClass}`)
        .getSVGDocument()
        .getElementById(objectClass)
        .setAttribute('fill', 'red');
    }
  }

  sortBySelectedValue(data, key, mode) {
    let temporaryData = [...data];
    if (mode === 'straight') {
      temporaryData = temporaryData.sort((a, b) => (a[key] > b[key] ? -1 : 1));
    }
    if (mode === 'back') {
      temporaryData = temporaryData.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    }
    if (mode === 'default') {
      temporaryData = data;
    }
    this.view.createTableData(this.model.tdTemplate, temporaryData);
  }

  buttonResetClickHandler() {
    this.btnReset.addEventListener('click', () => {
      this.statistics.forEach((element) => {
        const item = element;
        item.errorRate = 0;
        item.playCorrectClick = 0;
        item.playErrorClick = 0;
        item.trainClick = 0;
      });
      this.view.createTableData(this.model.tdTemplate, this.statistics);
      this.setStatisticsToLocalStorage();
    });
  }

  buttonRepeatClickHandler() {
    this.btnRepeat.addEventListener('click', () => {
      // todo need to finish
      // const newCategory = [];
      // for (let i = 0; i < 8; i += 1) {
      //   newCategory.push(this.statistics[i]);
      // }
      // console.log(newCategory);
      // newCategory.forEach((item) => {
      //   this.view.createCategoryCard(this.model.categoriesTemplate, item.word, item.translation);
      // });
    });
  }
}

export default statisticsController;
