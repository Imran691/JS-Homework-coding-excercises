// List of places in the world I would like to visit.


let placesToVisit = ["Toranto", "New York", "Paris", "Venis", "London"];

console.log(placesToVisit);

let sortedList = placesToVisit.slice(0).sort();
console.log(sortedList);

console.log(placesToVisit);

let reversedList = sortedList.slice(0).reverse();
console.log(reversedList);

console.log(placesToVisit);

let reversedOriginalList = placesToVisit.slice(0).reverse();
console.log(reversedOriginalList);

let backToOriginalOrder = reversedOriginalList.slice(0).reverse();
console.log(backToOriginalOrder);

let sortedOriginalList = placesToVisit.sort();
console.log(sortedOriginalList);
