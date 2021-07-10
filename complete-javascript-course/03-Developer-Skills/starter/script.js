// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 30;

console.log(x);

const calAge = birthYear => 2021 - birthYear;

function add(a, b) {
  console.log(a, b);
  return a + b;
}

console.log('Nayan kumar');

console.table(x);

const mesureKelvin = function () {
  const mesurment = {
    type: 'temp',
    unit: 'kelvin',
    value: Number(prompt('Enter Degrees celsius')),
  };

  console.table(mesurment);
  const kelvin = mesurment.value + 234;
  return kelvin;
};

console.log(mesureKelvin());
