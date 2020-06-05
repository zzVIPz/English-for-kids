const STATISTICS_MODEL = {
  phrases: [
    'Not bad, <span class="modal-name">{key}</span>! You have only {description}!',
    'Wow, <span class="modal-name">{key}</span>! You have no mistakes! Good job!',
  ],
  tableHeader: {
    word: 'Words',
    translation: 'Translate',
    category: 'Category',
    trainClick: 'Training clicks',
    playCorrectClick: 'Correct answers',
    playErrorClick: 'Wrong answers',
    errorRate: 'Error rate (%)',
  },
  thTemplate: `
  <th class="table__header">
    <div class="header-wrapper passive" data-name="{key}">{description}
      <span class="btn-wrapper">
        <span class="bnt-up">
          <object type="image/svg+xml" data="../src/assets/svg/up-arrow.svg" class="btn-arrow btn-up">
            Your browser does not support SVG
          </object>
        </span>
        <span class="bnt-down">
          <object type="image/svg+xml" data="../src/assets/svg/down-arrow.svg" class="btn-arrow btn-down">
            Your browser does not support SVG
          </object>
        </span>
      </span>
    </div>
  </th>`,
  tdTemplate: '<td class="table__item">{key}</td>',
};

export default STATISTICS_MODEL;
