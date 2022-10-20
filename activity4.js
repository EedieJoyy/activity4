
//ACTIVITY 4

const myArray = [30, 15, 12, 21, 19];

const isLessThan18 = a => a.filter(e => +e === e && e < 18);

console.log(isLessThan18(myArray));