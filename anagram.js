class Anagram {
  constructor(word) {
    this.word = word;
  }
  isAnagram(word1, word2) {
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();

    let sortedWord1 = word1.split('').sort().join('');
    let sortedWord2 = word2.split('').sort().join('');

    if (word1 === word2 || sortedWord1 !== sortedWord2) {
      return false;
    }

    return true;
  }
  match(arr) {
    return arr.filter(word => this.isAnagram(word, this.word));
  }
}

module.exports = Anagram;
