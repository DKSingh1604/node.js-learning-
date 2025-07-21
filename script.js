"use strict";

//this in global space
console.log(this); //globalObject

function x() {
  //the value depends on the strict/non-strict mode
  console.log(this);
}
x(); //undefined in strict mode

/*Inside a function 'this' keyword takes:

   the global value on non-strict mode -> (this substitution)
   undefined  value on strict mode
*/

//The value of this keyword also depends on how it is called

window.x(); // ->  defined

//this inside an object's methods

/*
DIFFERENCE BETWEEN A FUNCTION AND A METHOD

 IF WE MAKE A FUNCTION A PART OF AN OBJECT IT BECOMES A METHOD

 SO ABOVE x is the method of object obj
*/

//Inside the object the value of this is the object itself as this refers to the object

const student = {
  name: "Dev",
  printName: function () {
    console.log(this.name);
  },
};
student.printName();

const student2 = {
  name: "Karan",
};
student.printName.call(student2); //will overwrite the 'this' keyword in student function, to make a call to student2

//CALL     APPLY     BIND METHODS

//If we want to share a method - call

// .call() -> func.call(thisArg, arg1, arg2, ...) -> args passed oneByone
// .apply() -> func.apply(thisArg, [arg1, arg2, ...]) -> args passed as an array
// .bind() -> const boundFunc = func.bind(thisArg, arg1, arg2, ...);
//doesn't call the finction, instead it returns new function
