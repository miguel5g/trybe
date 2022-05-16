/* 1. */

function printSquare(base) {
  for (let i = 0; i < base; i++) {
    for (let j = 0; j < base; j++) {
      process.stdout.write('# ');
    }
    console.log('');
  }
}

/* 2. */

function printTriangle(base) {
  for (let i = 0; i < base; i++) {
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write('# ');
    }
    console.log('');
  }
}

/* 3. */

function printTriangleReverse(base) {
  for (let i = 0; i < base; i++) {
    for (let j = base - 1; j > i; j--) {
      process.stdout.write('  ');
    }
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write('# ');
    }
    console.log('');
  }
}

/* 4. */

function printTriangleCenter(base) {
  for (let i = 0; i < base; i++) {
    for (let j = base - 1; j > i; j--) {
      process.stdout.write(' ');
    }
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write('# ');
    }
    console.log('');
  }
}
