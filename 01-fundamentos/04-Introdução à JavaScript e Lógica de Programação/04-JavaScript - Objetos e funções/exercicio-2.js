/* 1. */

function isPalindrome(string) {
  return string.split('').reverse().join('') === string;
}

// console.log(isPalindrome('ovo'));
// console.log(isPalindrome('abacaxi'));

/* 2. */

function getIndexOfGreatest(array) {
  let max = array[0];
  let index = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      index = i;
    }
  }

  return index;
}

// console.log(getIndexOfGreatest([2, 3, 6, 7, 10, 1]));

/* 3. */

function getIndexOfSmallest(array) {
  let min = array[0];
  let index = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      index = i;
    }
  }

  return index;
}

// console.log(getIndexOfSmallest([2, 4, 6, 7, 10, 0, -3]));

/* 4. */

function getBiggestName(array) {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i].length > max.length) {
      max = array[i];
    }
  }

  return max;
}

// console.log(getBiggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

/* 5. */

function mostRepeated(array) {
  const map = new Map();

  for (let i = 0; i < array.length; i++) {
    if (map.has(array[i])) {
      map.set(array[i], map.get(array[i]) + 1);
    } else {
      map.set(array[i], 1);
    }
  }

  return Array.from(map.entries()).sort((a, b) => b[1] - a[1])[0][0];
}

// console.log(mostRepeated([2, 3, 2, 5, 8, 2, 3]));

/* 6. */

function getSumUpTo(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

// console.log(getSumUpTo(5));

/* 7. */

function isEndingOf(string, ending) {
  return string.endsWith(ending);
}

// console.log(isEndingOf('trybe', 'be'));
// console.log(isEndingOf('trybe', 'beg'));