module.exports = function getZerosCount(number, base) {
  let degree = 0;
  let simple_numbers = new Array();
  let simpNumb_index = 0;
  let delitel = 2;
  let base2 = base;

  do {
    if(base%delitel === 0){
      simple_numbers[simpNumb_index] = delitel;
      simpNumb_index++;
      base=Math.floor (base/delitel);
    }
    else {
      delitel++;
    }
  } while (delitel<base);
  simple_numbers[simpNumb_index] = delitel;

  let max = simple_numbers[0];
  for (var i = 1; i < simple_numbers.length; i++) {
    if (simple_numbers[i] > max) {
      max = simple_numbers[i];
    }
  }

  while (base2%max == 0) {
      base2=base2/max;
      degree++;
  }

  let p = 0;
  while (number > 0) {
    number = number/max;
    p+=number;
    p = Math.floor (p);
  }

  return Math.floor (p/degree);
}
