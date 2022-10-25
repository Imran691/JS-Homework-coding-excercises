//Nmae cases


var name = "Rohaan";
name = name.toLowerCase();
console.log(name);
name = name.toUpperCase();
console.log(name);

var firstChar = name.slice(0, 1);
firstChar = firstChar.toUpperCase();
var remainingChars = name.slice(1);
remainingChars = remainingChars.toLowerCase();

console.log(firstChar + remainingChars);