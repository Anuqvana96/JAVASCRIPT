


const numbers = [2,4];

//Every ()
let isEven= numbers.every (function (value) {
    return value %2 === 0;
});
console.log ("IsEven:",isEven);