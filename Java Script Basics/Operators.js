// Assignment Operators :

// There are six Assignment Operators.

// First Operator
let num =5; // This Operator += is used to add a value to a variable.
num+=15;
console.log(num);

// Second Operator.
let k = 25; // This Operatorb-= is used to subtract a value from a variable.
k -=15;
console.log(k);

// Third Operator.
let W= 5; // This Operator *= is used to Multiply a Value to a variable.
W *=15;
console.log(W);

// Fourth Operator.
let m=5;// This Operator = is used to assign a value 
console.log(m);

// Fifth Operator
let R= 10;
R  %=  6;
console.log(R);

// Sixth Operator.
// This Operator is used For a Square Values.
let number = 9;/*If you want a square of any value u have to give the variable a number that how much u want to 
 multiplay the variable number.*/
number **=2;
console.log(number);
let numb = 5;
numb**=5;
console.log(numb);


// Comparison Operators:

// There are four Comparison Operators.Which are ==, !=, These are the strict Operators ===, !==.
// These are also Comparison Operators >, <, >=, <=.
// Equal to == Operator
let num = 25;
let number= "50";
console.log("num == number",num == number);// In Java Scirpt the value in a string is converted to a number. which is why we use
// these ===, !==.

// Not Equal TO != Operator.
let me = 200;
let you = 200;
console.log("me != you", me != you);
let a = 24; // By this operator === if u put a number in a string it will not convert it into number and the output will be wrong 
let r = "24";
console.log("a === r",a === r);

let n = 80; // This operator !== in this operator if u put a value in a string then it will not convert in number.
let j = "80";
console.log("n !== j", n !== j);

let q = 25;
let s = 15;
console.log("q is less than s =", q < s);

let e = 50;
let z = 50;
console.log("50 is <= 50 =",50 <= 50);


// Logical Operators :

// There are three Logical Operators. Logical AND &&, Logical OR ||, Logical NOT !.

/* Logical AND &&.
In Logcal AND && Operator if all conditions are true then the output will be true, if any one condition is false then the 
output will be false.In AND Operator all the conditions must be true other wise the output is false. */
let num = 25;
let numb = 50;
console.log("25 < 50 && 25 > 50 =", 25 <50 && 25 > 50);

/* Logical OR ||.
In Logical OR, if one condition is true and the other is false then the output will be true in OR operator. One condition must
be True.*/
let a = 45;
let w = 20;
let cond1 = 45 > 20;
let cond2 = 45 < 20;
console.log("cond1 || cond2 =",cond1 || cond2);

/* Logical NOT !.
This Operator gives the opposite output of the conditions like if the condition is true this operator will give you the opposite
output false.*/
let s = 15;
let c = 10;
console.log("!(15 > 10) =", !(15 > 10));


// Ternary Operator :

/* Ternary Operator is the Operator that take three oprends means a condition and two inputs if the condition is true then
execute the first expression(value or strings or anything) if the condition is false then execute the second expression.
Ternary Operator is a special operator which worksmost likely as if-else statement.It is used for a short condition, 
it iscalled Compact if-else. But for longer conditions or statement we use if-else. */

let age = 20;
let Mage =age <=18 ? "Adult" : "Bacha";
console.log(Mage);


//Unary Operators (Post and Pre Increment and Decrement) :
let r= 22;
let d=5;
console.log(++d); // is may pehlay hii value change kar deta hai aur print bhi sath karta hai
let m=9;
console.log("m++ =",m++); // is mey pehlay print karta hai phir next line may value change karta hai.Decrement bhi in ki 
// tarha hota hai.
console.log("m++ =",m);
let num = 15;
//console.log(--num);
console.log(num--);
console.log(num);
let numb;
let sec;
let sum = numb + sec
console.log("sum =",sum);