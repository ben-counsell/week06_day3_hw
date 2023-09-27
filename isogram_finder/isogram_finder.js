class IsogramFinder {
    constructor(word) {
        this.word = word
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    }

    isIsogram() {
        const lowerCase = this.word.toLowerCase()
        const wordArray = lowerCase.split('')
        const alphabetised = wordArray.sort()

        const isogram = []
        this.alphabet.forEach(letter => isogram.push(alphabetised.find(char => char === letter)))

        const removeUndefined = isogram.filter(letter => this.alphabet.includes(letter))

        for (let i = 0; i < removeUndefined.length; ++i) {
            if (removeUndefined[i] !== alphabetised[i]) return false;
          }
          return true;
        }
    }


module.exports = IsogramFinder;
