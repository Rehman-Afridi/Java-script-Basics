// // Conditional Statements are if-elseif-else :

// /* Problem No 1 : Positive or Negative
// Take a number and print:

// "Positive" if number is greater than 0
// "Negative" if less than 0
// "Zero" if it is 0
// */

// let num = Number(prompt("Enter a Number"));
// if(num > 0){
//     console.log(num,"This is a Positive Number");
// }else if( num < 0){
//     console.log(num,"This is a Negative Number");
// }else{
//     console.log(num, "Zero");
// }

// /* Problem No 2 : Even or Odd
// Check if a number is even or odd.

// Example:

// 4 → Even
// 7 → Odd
// */

// let number = Number(prompt("Enter a Number"));

// if(number % 2 === 0){
//     console.log(number,"This Number is Even");
// }else{
//     console.log(number,"This Number is Odd");
// }

// /* Problem No 3 : Pass or Fail
// Take marks from user.

// If marks are 40 or more → "Pass"
// Otherwise → "Fail"
// */

// let studentMarks = Number(prompt("Enter Your Marks from 0 to 100"));
// if(studentMarks >= 40 && studentMarks <= 100){
//     console.log(studentMarks, "You are Pass");
// } else if(studentMarks < 40){
//     console.log(studentMarks, "You are fail");
// }else{
//     console.log("You Entered Your Marks Wrong. Try again");
// }

// /* Problem No 4 : Voting Eligibility
// Take age as input.

// If age is 18 or above → "You can vote"
// Otherwise → "You cannot vote"
// */

// let UserAge = Number(prompt("Enter Your Age"));
// if(UserAge >= 18){
//     console.log("You can Vote");
// }else{
//     console.log("You cannot Vote");
// }


// /* Problem No 5 : Bigger Number
// Take two numbers and print which one is bigger.

// Example:

// 5 and 9 → 9 is bigger
// */

// let num1 = Number(prompt("Enter Number 1 "));
// let num2 = Number(prompt("Enter a Number 2"));
// if(num1 > num2){
//     console.log(num1, "and" ,num2,"-->", num1,"is Bigger");
// }else if (num2 > num1){
//     console.log(num1, "and" ,num2,"-->", num2,"is Bigger");
// }


/* Problem No 6. Divisible by 5

Check if a number is divisible by 5.

Example:

10 → Divisible
12 → Not divisible
*/

// let Divisible = Number(prompt("Enter a Number. Check if it is Divisible by 5 or Not ?"));
// if(Divisible % 5 === 0){
//     console.log(Divisible,"Divisible of 5");
// }else{
//     console.log(Divisible,"Not Divisible");
// }


/* Problem No 7. Temperature Checker

Take temperature:

Above 35 → "Hot"
Between 20 and 35 → "Normal"
Below 20 → "Cold"
*/

// let Temperature = Number(prompt("Enter the Tempearture"));
// if(Temperature >= 35){
//     console.log("Temperature is Hot");
// }else if(Temperature < 35 && Temperature >= 20){
//     console.log("Temperature is Normal");
// }else if(Temperature < 20){
//     console.log("Temperature is Cold");
// }


/* Problem No 8. Grade System

Take marks and print grade:

90+ → A
80+ → B
70+ → C
Below 70 → Fail
*/

// let Marks = Number(prompt("Enter Your Marks"));
// if(Marks >= 90 && Marks >= 100){
//     console.log("Grade A");
// }else if(Marks >= 80 && Marks < 90){
//     console.log("Grade B");
// }else if(Marks >=70 && Marks < 80){
//     console.log("Grade C");
// }else if(Marks < 70){
//     console.log("Fail");
// }

 /* Problem No 9. Username and Password

Make simple login logic:

Username is "admin"
Password is "1234"

If both correct → "Login Successful"
Otherwise → "Wrong username or password"
 */
// let Username = "Rahman Ullah";
// let Password = 3456;
// let User = (prompt("Enter Username"));
// let UserPassword = Number(prompt("Enter Password"));
// if(Username === User , Password === UserPassword){
//     console.log("Login Successful");
// }else{
//     console.log("Wrong username or password");
// }

/* Problem No 10. Largest of Three Numbers

Take 3 numbers and print the largest one.

Example:

4, 9, 2 → 9 is largest
*/
// let number1 = Number(prompt("Enter Number 1"));
// let number2 = Number(prompt("Enter Number 2"));
// let number3 = Number(prompt("Enter Number 3"));
// if(number1 > number2 && number1 > number3){
//     console.log(number1,number2,number3,"The Largest Number is -->",number1);
// }else if(number2 > number1 &&number2 > number3){
//     console.log(number1,number2,number3,"The Largest Number is -->",number2);
// }else if(number3 > number1 && number3 >number2){
//     console.log(number1,number2,number3,"The Largest Number is -->",number3);
// }

/* Problem No 11. Leap Year Checker

Check if a year is leap year.

Rules:

Divisible by 4 → Leap year
Otherwise → Not leap year

Example:

2024 → Leap year
*/
// let leapYear = Number(prompt("Enter the Year"));
// if(leapYear % 4 === 0){
//     console.log(leapYear,"This Year is a Leap Year");
// }else{
//     console.log(leapYear,"This Year is not a Leap Year");
// }


/* Problem No 12. Simple Calculator

Take:

first number
second number
operator (+, -, *, /)

Use if else to perform calculation.

Example:

5 + 2 → 7
*/
// let firstNumber = Number(prompt("Enter first Number"));
// let Operators = prompt("Enter the Operator");
// let secondNumber = Number(prompt("Enter second Number"));

// if(Operators === "+"){
//     console.log(firstNumber + secondNumber);
// }else if(Operators === "-"){
//     console.log(firstNumber - secondNumber);
// }else if(Operators === "*"){
//     console.log(firstNumber * secondNumber);
// }else if(Operators === "/"){
//     console.log(firstNumber / secondNumber);
// }else{
//     console.log("Wrong Operator Try these Operators +, -, *, /");
// }



/* Problem No 13. Electricity Bill

Make a small bill system:

Units less than 100 → bill is 5 per unit
Units 100 or more → bill is 10 per unit

Print total bill.
*/
// let UserBill = Number(prompt("Enter Your Electricity Units"));
// if(UserBill > 100){
//     console.log("Your Bill is ", UserBill * 10);
// }else if(UserBill < 100){
//     console.log("Your Bill is ", UserBill * 5);
// }
 
/* Problem No 14. Number Guessing

Store a secret number inside variable.

If user number matches:

"Correct Guess"

Otherwise:

"Wrong Guess"
*/
// let secretNumber = 111;
// let UserGuessNumber = Number(prompt("Enter the Number"));
// if(UserGuessNumber === secretNumber){
//     console.log("You Guessed the Number Correct");
// }else{
//     console.log("Wrong Guess");
// }


/* Problem No 15. ATM Withdraw

Take:

account balance
withdraw amount

Conditions:

If withdraw amount is greater than balance → "Insufficient Balance"
Otherwise → "Transaction Successful"
*/
let AccountBalance = 5000;
let WithDrawAmount = Number(prompt("Enter the amount You want to WithDraw"));
if(WithDrawAmount > AccountBalance){
    console.log("Insufficient Balance");
}else if(WithDrawAmount < AccountBalance){
    console.log("Transaction Successful");
}
