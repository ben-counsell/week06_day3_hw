class PangramFinder {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase().split('')
    this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('')
  }

  isPangram() {
    return this.alphabet.every((element) => this.phrase.includes(element))
  }
}

module.exports = PangramFinder;
