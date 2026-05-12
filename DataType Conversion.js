// Conversion of a String to Number & Number to String in (Addition) is Very  Confusing . This One is Different. Example:

console.log("12" + 32); 
console.log("11" + 2 + 7);
console.log(10 + 20 + "15");

/*
If i put a string first like the first & second console.log then all the next numbers will be a string but if i write like the 
third console.log it will add the first two numbers first then add a string so it will give me the output 3015.
*/

/* 
Java Script DataType Conversion is a little bit or a lot of confusing
For Example: if i convert string "123baker" into a Number then if i see the type of that variable it show me a Number 
But if i print that value it will give NaN(Not a Number) because it cannot be a number.
Lets see som Examples.
*/

let string = "321 Bald";
let StringIntoNumber = Number(string);
console.log(typeof StringIntoNumber);
console.log(StringIntoNumber);


let number = 54321;
let numberIntoString = String(number);
console.log(typeof numberIntoString);
console.log(numberIntoString);

/* 
By these two Examples we see 
First Example : When i turn true into number it give me 1 and if i turn false into a number into number then it gives me 0.

Second Example : When i turn any 0 number into boolean data type it gives me false and when i turn any Even or Odd number 
into boolean data type it gives me True.
*/
let boolean = false; 
let booleanIntoNumber = Number(boolean);
console.log(typeof booleanIntoNumber);
console.log(booleanIntoNumber);

let digit = 13;
let numberIntoBoolean = Boolean(digit);
console.log(typeof numberIntoBoolean);
console.log(numberIntoBoolean);


let nulll = null; 
let NullIntoNumber = Number(nulll);
console.log(typeof NullIntoNumber);
console.log(NullIntoNumber);