const MAIN_MODEL = {
  phrases: [
    'Not bad, <span class="modal-name">{key}</span>! You have only {description}!',
    'Wow, <span class="modal-name">{key}</span>! You have no mistakes! Good job!',
  ],
  template: `
    <a href="#{key}">
      <div class="card__wrapper">
        <div class="card {key}">
          <div class="card-bg" style='background-image: url("../src/assets/images/{text}.jpg")'></div>
          <div class="card-info">
            <h3 class="card__title">{description}</h3>
            <p class="card__description"></p>
          </div>
        </div>
      </div>
    </a>`,
  linkNavigationTemplate: `
    <li class="navigation__item">
      <a class="navigation__link" data-name={key} href="#{key}">{description}</a>
    </li>`,
  categoriesTemplate: `
    <div class="category-card__wrapper">
    <div class="category-card" data-name="{key}">
      <div class="top">
        <img src="../src/assets/images/{key}.jpg" alt="{text}">
      </div>
      <div class="bottom">
        <div class="category-card__container"></div>
        <p class="category-card__description">{description}<span class="category-card__picture"></span>
        </p>
      </div>
    </div>
    <div class="inside">
      <div class="icon"></div>
        <div class="contents">
          <p class="category-card__translation">{text}</p>
        </div>
     </div>
    </div>`,
  correctTemplate: '<div class="correct"></div>',
  incorrectTemplate: '<div class="incorrect"></div>',
  buttonTemplate: '<div class="btn-play__mode-repeat"></div>',
  modalWindowTemplate: `
    <div class="modal-container">
      <div class="modal-background">
        <div class="modal">
          <h2 class="modal__description">{key}</h2>
          <p class="modal__context"></p>
        </div>
      </div>
    </div>
  `,
  audioEffects: [
    { correct: 'correct' },
    { error: 'error' },
    { success: 'success' },
    { failure: 'failure' },
  ],
  categories: {
    amusements: [
      {
        word: 'ride',
        translation: 'ездить',
      },
      {
        word: 'dance',
        translation: 'танцевать',
      },
      {
        word: 'dive',
        translation: 'нырять',
      },
      {
        word: 'draw',
        translation: 'рисовать',
      },
      {
        word: 'fish',
        translation: 'ловить рыбу',
      },
      {
        word: 'fly',
        translation: 'летать',
      },
      {
        word: 'run',
        translation: 'бегать',
      },
      {
        word: 'jump',
        translation: 'прыгать',
      },
    ],
    actions: [
      {
        word: 'open',
        translation: 'открывать',
      },
      {
        word: 'play',
        translation: 'играть',
      },
      {
        word: 'point',
        translation: 'указывать',
      },
      {
        word: 'cry',
        translation: 'плакать',
      },
      {
        word: 'hug',
        translation: 'обнимать',
      },
      {
        word: 'sing',
        translation: 'петь',
      },
      {
        word: 'skip',
        translation: 'пропускать, прыгать',
      },
      {
        word: 'swim',
        translation: 'плавать',
      },
    ],
    pets: [
      {
        word: 'cat',
        translation: 'кот',
      },
      {
        word: 'chick',
        translation: 'цыплёнок',
      },
      {
        word: 'chicken',
        translation: 'курица',
      },
      {
        word: 'dog',
        translation: 'собака',
      },
      {
        word: 'horse',
        translation: 'лошадь',
      },
      {
        word: 'pig',
        translation: 'свинья',
      },
      {
        word: 'rabbit',
        translation: 'кролик',
      },
      {
        word: 'sheep',
        translation: 'овца',
      },
    ],
    animals: [
      {
        word: 'bird',
        translation: 'птица',
      },
      {
        word: 'wolf',
        translation: 'волк',
      },
      {
        word: 'frog',
        translation: 'жаба',
      },
      {
        word: 'giraffe',
        translation: 'жирафа',
      },
      {
        word: 'lion',
        translation: 'лев',
      },
      {
        word: 'mouse',
        translation: 'мышь',
      },
      {
        word: 'turtle',
        translation: 'черепаха',
      },
      {
        word: 'dolphin',
        translation: 'дельфин',
      },
    ],
    clothes: [
      {
        word: 'skirt',
        translation: 'юбка',
      },
      {
        word: 'pants',
        translation: 'брюки',
      },
      {
        word: 'blouse',
        translation: 'блузка',
      },
      {
        word: 'dress',
        translation: 'платье',
      },
      {
        word: 'boot',
        translation: 'ботинок',
      },
      {
        word: 'shirt',
        translation: 'рубашка',
      },
      {
        word: 'coat',
        translation: 'пальто',
      },
      {
        word: 'shoe',
        translation: 'туфли',
      },
    ],
    emotion: [
      {
        word: 'sad',
        translation: 'грустный',
      },
      {
        word: 'angry',
        translation: 'сердитый',
      },
      {
        word: 'happy',
        translation: 'счастливый',
      },
      {
        word: 'tired',
        translation: 'уставший',
      },
      {
        word: 'surprised',
        translation: 'удивлённый',
      },
      {
        word: 'scared',
        translation: 'испуганный',
      },
      {
        word: 'smile',
        translation: 'улыбка',
      },
      {
        word: 'laugh',
        translation: 'смех',
      },
    ],
    furniture: [
      {
        word: 'bed',
        translation: 'кровать',
      },
      {
        word: 'cupboard',
        translation: 'шкаф',
      },
      {
        word: 'ottoman',
        translation: 'тахта',
      },
      {
        word: 'armchair',
        translation: 'кресло',
      },
      {
        word: 'table',
        translation: 'стол',
      },
      {
        word: 'nightstand',
        translation: 'тумбочка',
      },
      {
        word: 'sofa',
        translation: 'диван',
      },
      {
        word: 'chair',
        translation: 'стул',
      },
    ],
    schoolbag: [
      {
        word: 'pen',
        translation: 'ручка',
      },
      {
        word: 'pencil',
        translation: 'карандаш',
      },
      {
        word: 'ruler',
        translation: 'линейка',
      },
      {
        word: 'notebook',
        translation: 'тетрадь',
      },
      {
        word: 'eraser',
        translation: 'ластик',
      },
      {
        word: 'book',
        translation: 'книга',
      },
      {
        word: 'scissors',
        translation: 'ножницы',
      },
      {
        word: 'paper',
        translation: 'бумага',
      },
    ],
  },
};

export default MAIN_MODEL;
