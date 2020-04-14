class Controller {
  constructor() {
    // this.model = model;
    // this.view = view;
    this.userName = '';
    this.input = null;
    this.link = null;
  }

  init() {
    this.input = document.querySelector('.login__input');
    this.link = document.querySelector('.btnflip');
    this.addListener();
  }

  addListener() {
    this.link.addEventListener('click', (event) => this.checkName(event));
    this.input.addEventListener('input', (event) => this.changeBasicLayout(event));
  }

  checkName() {
    if (this.userName) {
      this.setNameToLocalStorage();
      this.setLink(this.userName);

      //todo: how change value with delay?
      this.input.value = '';
    } else {
      this.input.classList.add('login__input-invalid');
      this.input.focus();
    }
  }

  setLink(name) {
    const link = `./pages/main.html#main page%name=${name}`;
    this.link.setAttribute('href', link);
  }

  setNameToLocalStorage() {
    localStorage.name = this.userName;
  }

  changeBasicLayout() {
    this.input.classList.remove('login__input-invalid');
    this.userName = document.querySelector('.login__input').value;
    if (this.userName.length) {
      this.toggleMode('Good luck!', true);
    } else {
      this.toggleMode('Please, enter your name!', false);
    }
  }

  toggleMode(text, mode) {
    document.querySelector('.btnflip__back').innerText = text;
    if (mode) {
      this.input.classList.add('login__input-valid');
      this.input.classList.remove('login__input-invalid');
    } else {
      this.input.classList.add('login__input-invalid');
      this.input.classList.remove('login__input-valid');
    }
  }
}

export default Controller;
