// There are seven Data Types. Number, String, Boolean, undefined, object, BigInt, null, symbol.
// First Data Type(Number)
let age = 20; // this Data type is called number.
console.log(typeof age);

let money = 5000.0; // in javascript for a decimal value or a non decimal value the datatype is same.
console.log(typeof money);

// Second Data Type(String)
let Name="Rehman Afridi";      // This Data Type is used to store alphabets or you can say names.
console.log(typeof Name);

//Third Data Type(Boolean)
let notfollowed=false;          // This Data Type is used for boolean values or expression.
console.log(typeof notfollowed);

//Fourth Data Type(Undefined)
let number;// This Data Type is undefined means no value is initialized to the variable.
console.log(typeof number);

// Fifth Data Type. null
let r=null; // This Data Type is null . But when we see the type of null it show us Object. Mean the type of null is object. 
console.log(typeof r);

// Sixth Data Type(BigInt)
let Number = BigInt("233466588"); // This Data Type is used to Store Bigger Values.
console.log(typeof Number);


//Seventh Data Type(Symbol)
let name = Symbol("Khan");// This Data Type is used for Unique Purposes. Even if the value is same it will still not be equal in Symbol.
let secondName = Symbol("Khan")
console.log(name === secondName);
