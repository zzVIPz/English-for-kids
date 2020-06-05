import MainView from '../main/mainView';

class statisticsView extends MainView {
  constructor() {
    super();
    this.table = document.querySelector('.table');
    this.tbody = document.querySelector('.tbody');
    this.thead = document.querySelector('.thead');

    this.row = null;
  }

  init(model, data) {
    this.createStatisticsSection(model, data);
  }

  createStatisticsSection(model, data) {
    this.createTableHeader(model.thTemplate, model.tableHeader);
    this.createTableData(model.tdTemplate, data);
  }

  createTableRow() {
    this.row = document.createElement('tr');
    this.row.classList.add('table__row');
  }

  createTableHeader(thTemplate, tableHeader) {
    this.createTableRow();
    Object.keys(tableHeader).forEach((item) => {
      this.row.innerHTML += this.getCorrectTemplate(false, thTemplate, item, tableHeader[item]);
    });
    this.thead.append(this.row);
  }

  createTableData(tdTemplate, data) {
    if (this.tbody.children) {
      this.tbody.innerHTML = '';
    }
    data.forEach((element) => {
      this.createTableRow();
      Object.keys(element).forEach((property) => {
        const correctTemplate = this.getCorrectTemplate(false, tdTemplate, element[property]);
        this.row.innerHTML += correctTemplate;
      });
      this.tbody.append(this.row);
    });
  }
}

export default statisticsView;
