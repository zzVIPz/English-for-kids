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
    console.log(1111);
  }

  addListener() {
    this.link.addEventListener('click', (event) => this.checkName(event));

    this.input.addEventListener('input', (event) => this.changeBasicLayout(event));
  }

  checkName() {
    if (this.userName) {
      this.input.value = '';
      const link = `./pages/main.html#${this.userName}`;
      this.getCorrectLink(link);
    } else {
      this.input.classList.add('login__input-invalid');
      this.input.focus();
    }
  }

  getCorrectLink(link) {
    this.link.setAttribute('href', link);
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
