// 1.
/*
let str = 'lorem ipsum';

str = Array.from(str).reverse().join('');
console.log(str);
*/


// 2.
/*
let num = 12.34567;

function wholeNumber(num) {
    return num.toFixed(0);
}

console.log(wholeNumber(num));
*/


// 3.
/*
let strName = prompt(`Вкажіть своє ім'я`);
let answer = alert(strName.toUpperCase());
*/


// 4.
/*
let str = '2021-22-09';

function dateRotate(str) {
    let date = str.split('-');
    return `${date[1]}.${date[2]}.${date[0]}`;
}

console.log(dateRotate(str));
*/


// 5.

function isEqual(firstWord, secondWord) {
    return firstWord.toUpperCase() === secondWord.toUpperCase();
}

console.log(isEqual('pApA', 'papa'));
console.log(isEqual('qwerty', 'QWErty'));
console.log(isEqual('aaa', 'EEE'));