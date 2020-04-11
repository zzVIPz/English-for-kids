
import MAIN_MODEL from '../js/main/mainModel';
import MainView from '../js/main/MainView';
import MainController from '../js/main/MainController';

window.onload = () => {
  console.log(123);
  const main = new MainController(MAIN_MODEL, new MainView());
  main.init();
};
