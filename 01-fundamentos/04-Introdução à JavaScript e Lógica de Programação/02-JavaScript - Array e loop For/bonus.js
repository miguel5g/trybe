let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* 1. */

numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers);

/* 2. */

numbers.sort(function (a, b) {
  return b - a;
});

console.log(numbers);

/* 3. */

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; // Restart the array
let newArray = [];

for (let i = 0; i < numbers.length; i++) {
  const a = numbers[i];
  const b = numbers[i + 1] || 2;

  newArray.push(a * b);
}

console.log(newArray);
