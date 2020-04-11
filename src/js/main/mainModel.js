const MAIN_MODEL = {
  template: `
    <div class="card {key}">
      <div class="card-bg"></div>
      <div class="card-info">
        <h3 class="card__title">{key}</h3>
        <p class="card__description"></p>
      </div>
    </div>`,
  categories: {
    nature: [
      {
        word: 'cry',
        translation: 'плакать',
        image: 'img/cry.jpg',
        audioSrc: 'audio/cry.mp3',
      },
      {
        word: 'dance',
        translation: 'танцевать',
        image: 'img/dance.jpg',
        audioSrc: 'audio/dance.mp3',
      },
      {
        word: 'dive',
        translation: 'нырять',
        image: 'img/dive.jpg',
        audioSrc: 'audio/dive.mp3',
      },
      {
        word: 'draw',
        translation: 'рисовать',
        image: 'img/draw.jpg',
        audioSrc: 'audio/draw.mp3',
      },
      {
        word: 'fish',
        translation: 'ловить рыбу',
        image: 'img/fish.jpg',
        audioSrc: 'audio/fish.mp3',
      },
      {
        word: 'fly',
        translation: 'летать',
        image: 'img/fly.jpg',
        audioSrc: 'audio/fly.mp3',
      },
      {
        word: 'hug',
        translation: 'обнимать',
        image: 'img/hug.jpg',
        audioSrc: 'audio/hug.mp3',
      },
      {
        word: 'jump',
        translation: 'прыгать',
        image: 'img/jump.jpg',
        audioSrc: 'audio/jump.mp3',
      },
    ],

    features: [
      {
        word: 'open',
        translation: 'открывать',
        image: 'img/open.jpg',
        audioSrc: 'audio/open.mp3',
      },
      {
        word: 'play',
        translation: 'играть',
        image: 'img/play.jpg',
        audioSrc: 'audio/play.mp3',
      },
      {
        word: 'point',
        translation: 'указывать',
        image: 'img/point.jpg',
        audioSrc: 'audio/point.mp3',
      },
      {
        word: 'ride',
        translation: 'ездить',
        image: 'img/ride.jpg',
        audioSrc: 'audio/ride.mp3',
      },
      {
        word: 'run',
        translation: 'бегать',
        image: 'img/run.jpg',
        audioSrc: 'audio/run.mp3',
      },
      {
        word: 'sing',
        translation: 'петь',
        image: 'img/sing.jpg',
        audioSrc: 'audio/sing.mp3',
      },
      {
        word: 'skip',
        translation: 'пропускать, прыгать',
        image: 'img/skip.jpg',
        audioSrc: 'audio/skip.mp3',
      },
      {
        word: 'swim',
        translation: 'плавать',
        image: 'img/swim.jpg',
        audioSrc: 'audio/swim.mp3',
      },
    ],
  },
};

export default MAIN_MODEL;
