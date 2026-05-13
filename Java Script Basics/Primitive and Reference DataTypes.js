/* 
The main two Data Types in Java Script are Primitive and Reference(non primitive) Data Types

Primitive Data Types are immutable and these are :
Number, String, Boolean, Undefined, Symbol, BigInt, null.

Reference Data Types are mutable and these are:
Arrays, Functions, and Objects. 
*/

// Primitive Data Type : Primitive Data Type are stored in Stack Memory and they are immutable. 
// Example:

let number = "khan";
console.log(number);
let secondNumber = number;
console.log(secondNumber);
secondNumber = "15";
console.log(number);
console.log(secondNumber);
/*
Now if i see the example of the primitive Data Type the number variable passed the copy of his value to the secondnumber so
the secondnumber prints 10 but when the number update his value and then when i printed the secondnumber second time
the secondnumber prints 10 again because all the primitive data types are immutable and  in primitive Data Type the copy of the 
value is passed not the reference if the reference is passed then the secondnumber would also be changed. But the 
(Key Point) to remember is that in primitive Data Types the copy of the variable value is passed the reference is not passed 
this is why i got 10 again because they are immutable and also i got the first copy of the number variable.
*/


// Reference Data Types : Reference Data Types are stored in the Heap Memory and they are mutable.
// Example:

let FriendData = {
    Name : "Nasir",
    Age : 20,
}

let SecondFriendData = FriendData;
console.log(SecondFriendData);

FriendData.Age = 19;

console.log(FriendData);
console.log(SecondFriendData);

/*

Now in reference data type when i change the age of the FriendData Object the SecondFriendData Object age also changed because the 
FriendData reference was passed to SecondFriendData so any changes happens in FriendData Object it is also applied to 
SecondFriendData Object and again because the reference was passed so when any thing changes in FriendData those changes
will also be applied to SecondFriendData. 
*/
