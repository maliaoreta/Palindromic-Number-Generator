function palindromeNumberGenerator (num) {

  var num = num;
  var reverse = Number(reverseNumber(num));
  var steps = 0;

  while (num !== reverse) {

    num = num + reverse;
    reverse = Number(reverseNumber(num));
    steps += 1;
  }

  return {
    value : num,
    steps : steps
  };
}



function reverseNumber(num) {

  return num.toString().split('').reverse().join('');
}


// Should return { value: 4884, steps: 4 }
palindromeNumberGenerator(87);

// Should return { value: 1331, steps: 0 }
palindromeNumberGenerator(1331);