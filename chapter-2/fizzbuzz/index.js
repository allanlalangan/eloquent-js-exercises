function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = i;
    if (i % 3 === 0 && i % 5 === 0) {
      output = 'fizzbuzz';
    }
    if (i % 3 === 0 && i % 5 !== 0) {
      output = 'fizz';
    }
    if (i % 5 === 0 && i % 3 !== 0) {
      output = 'buzz';
    }
    console.log(output);
  }
}

function fizzbuzz2() {
  for (let i = 1; i <= 100; i++) {
    let output = i;

    if (i % 3 === 0) {
      if (i % 5 === 0) {
        output = 'fizzbuzz';
      } else {
        output = 'fizz';
      }
    }

    if (i % 5 === 0) {
      if (i % 3 !== 0) {
        output = 'buzz';
      }
    }

    console.log(output);
  }
}

fizzbuzz();
