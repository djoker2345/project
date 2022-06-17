"use strict";

if (2){
    console.log('Ok!');
} else{
    console.log('Error');
}

// const num = 50;
// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Many');
// } else {
//     console.log('Ok!');
// } 
// (num === 50) ? console.log('Ok!') : console.log('Error');

const num = 54;
switch (num) {
    case 49:
        console.log('wrong!');
        break;
    case 100:
        console.log('Wrong!');
        break;
    case 50:
        console.log('В точку');
        break;
    default:
        console.log('Не в этот раз!');
        break;
}