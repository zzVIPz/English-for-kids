import MAIN_MODEL from '../js/main/mainModel';
import MainView from '../js/main/mainView';
import MainController from '../js/main/mainController';

window.onload = () => {
  const main = new MainController(MAIN_MODEL, new MainView());
  main.init();
};
