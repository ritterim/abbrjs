export default class Abbr {
  constructor() {
    this.glossary = [
      {
        abbr: 'ABBR',
        definition: 'Denotes an abbreviation.',
        role: null,
        term: 'Abbreviation',
      },
    ];
  }

  async set(glossary) {
    if (glossary) {
      if (typeof glossary === 'object') {
        this.glossary = glossary;
      } else if (glossary.includes('.json')) {
        this.glossary = await fetch(glossary).then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Network responded with ' + response.status + ' (' + response.statusText + ')');
          }
        });
      } else {
        console.warn('Abbr requires either an Object or JSON file.');
      }
    }
  }

  init() {
    let htmlColl = document.getElementsByTagName('abbr');
    let acroTag = [...htmlColl];
    if (acroTag.length > 0) {
      acroTag.forEach((acronym) => {
        let item = this.glossary.find((item) => item.abbr === acronym.textContent);
        if (item) {
          acronym.setAttribute('title', item.definition);
        } else {
          acronym.setAttribute('title', 'No abbreviation found.');
        }
      });
    }
  }
}
