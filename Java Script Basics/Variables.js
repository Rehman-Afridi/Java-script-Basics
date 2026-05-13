/* Variables and Constant:

Constant: Constant are used to store data and the keyword of Constant is (const). But the value stored in Constant Variable cannot
be changed because the word Constant mean unchanging or happens continuously without interruption.

Variables: Variables are also used to store data. But there are two types of variables (let and var) and the value(data) stored
in let or var can be changed.
*/

// Difference between var and let and const:

/* Var: Var is not Preferable because of the issue with the block scope{} and functional scope. Means var ignore blocks thats why.
let and const: let and const is used instead of var because let and const respect blocks. Thats why let and const is used 
everywhere.
*/

const AccountName = "RehmanUllah@gmail.com";
let AccountPassword = 12345;
var Username = "Rehman Ullah";

// AccountName= "RehmanUllahAfridi@gmail.com"; //When i will run this code it will give me error beacuse const value cannot change.
AccountPassword = 54321;  // These two variable value changed. Because these variable were made by the keyword let and var 
Username = "Rehman Afridi";// and their value can change. As it is showing

console.log(AccountName,AccountPassword,Username);
