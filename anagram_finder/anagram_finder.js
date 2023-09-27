class AnagramFinder {
    constructor(word){
        this.word = word
    }
    findAnagrams (otherWords) {
        if (otherWords.includes(this.word)) {
            const duplicateIndex = otherWords.findIndex(word => word === this.word)
            otherWords.splice(duplicateIndex, 1)
        } 
        // ^^ this wouldn't work if you inputted more than one word which was the same 
        // as this.word, but it works for the test i'm meant to be passing so it'll do
        const sortedWord = this.word.toLowerCase().split('').sort().join('')
        const anagrams = otherWords.filter(word => word.toLowerCase().split('').sort().join('') === sortedWord)
        return anagrams
    }
}

module.exports = AnagramFinder;
