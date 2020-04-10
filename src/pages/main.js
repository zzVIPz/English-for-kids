
import Model from './js/main/mainModel';
import View from './js/main/mainView';
import Controller from './js/main/mainController';

window.onload = () => {
  const main = new Controller(Model, new View());
  main.init();
};
