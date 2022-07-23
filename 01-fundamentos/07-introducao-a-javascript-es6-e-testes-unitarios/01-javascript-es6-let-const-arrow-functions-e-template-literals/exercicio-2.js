const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));

const longestWord = (phrase) =>
  phrase.split(' ').reduce((longest, word) => (word.length > longest.length ? word : longest), '');
