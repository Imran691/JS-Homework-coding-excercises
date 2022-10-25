//more conditional tests



let name = "Khan";
let name1  = "Khan";
console.log(name === name1);   //predict true
console.log(name !== name1);   //predict true



let firstName = "Khan";
let firstName1  = "khan";
console.log(firstName.toLowerCase() === firstName1);   //predict true
console.log(firstName.toLocaleLowerCase() !== firstName1);   //predict false


let num1 = 7;
let num2 = 5;
console.log(num1 === num2);   //predict false
console.log(num1 !== num2);   //predict true
console.log(num1 > num2);   //predict true
console.log(num1 < num2);   //predict false
console.log(num1 <= num2);   //predict false
console.log(num1 >= num2);   //predict true


console.log(num1 < num2 && num1 === num2);   //predict false
console.log(num1 > num2 || num1 === num2);   //predict true


let nums = [1,2,3,4,5,6];
for (var i = 0; i < nums.length; i++); {
}
console.log(nums[i] === 9);


let nums1 = [1,2,3,4,5,6];
for (var i = 0; i < nums1.length; i++); {
}
console.log(nums1[i] !== 10);
