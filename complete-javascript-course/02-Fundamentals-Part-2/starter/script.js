'use strict'

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log('I can drive');

function addTwoNumber(a, b) {
    return a + b;
}

const res1 = addTwoNumber(10, 20);
console.log(res1);

const getName = function (name) {
    return `My name is ${name}`;
}


console.log(getName("Nayan"));

const substract = (a, b) => a - b;

console.log(substract(20, 15));

let friends = ["Nayan", "Kumar"];
console.log(typeof friends);

let f = new Array("Nayan", "Kumar");
console.log(typeof f);

friends.push("HN");
f.push("HN");

console.log(friends.length);

friends.unshift("tatsavi");
console.log(friends);
console.log(friends.shift());
console.log(friends);
console.log(friends.indexOf('HN'));
console.log(friends.includes('HN'));
const calculateAge = function () {
    console.log(this);
    return 2021 - this.birthYear;
}
const person = {
    firstName: 'Nayan',
    lastName: 'Kumar',
    birthYear: 1990,
    job: 'Fullstack developer',
    friends: friends,
    calAge: calculateAge
};


console.log(typeof person);
person.location = 'bengaluru';
person['git'] = 'nayan-savi';

/*const choice = prompt('What do you know about person? Choose between firstName, lastName, job, friends');
if (person[choice]) {
    console.log(person[choice]);
} else {
    console.log("Person doesn't have " + choice + " information.");
}*/

console.log(person);
console.log(person.calAge());
//console.log(person['calAge'](1990));

