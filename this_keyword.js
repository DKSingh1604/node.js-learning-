"use strict";

//this in global space
console.log(this); //globalObject

//--------------------------------------------------------------------
//this inside a function
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

//----------------------------------------------------------------------
//CALL     APPLY     BIND METHODS  (C A B)

//If we want to share a method - call

// .call() -> func.call(thisArg, arg1, arg2, ...) -> args passed one By one

// .apply() -> func.apply(thisArg, [arg1, arg2, ...]) -> args passed as an array

// .bind() -> const boundFunc = func.bind(thisArg, arg1, arg2, ...);
//doesn't call the finction directly, instead it returns a copy of the function

//DEMONSTRATION :-
let name1 = {
  firstName: "Dev",
  lastName: "Karan",
};

let printFullName = function (homeTown, state) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " is from " +
      homeTown +
      ", " +
      state
  );
};

// printFullName.call(
//   name1,
//   "Rudrapur",
//   "Uttarakhand"
// );

let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

//function borrowing
// printFullName.call(name2, "Barcelona", "Spain");

// printFullName.apply(name1, [
//   "Rudrapur",
//   "Uttarakhand",
// ]);

let printMyName = printFullName.bind(
  name2,
  "Mumbai",
  "Maharashtra"
);
// console.log(printMyName);
// printMyName();

// ---------------------------------------------------------------------

//this keyword inside an arrow function

//Arrow functions differ in their handling of this: they inherit this from the parent scope(enclosing lexical context) at the time they are defined.

const obj = {
  a: 10,
  x: () => {
    console.log(this); //if arrow function, 'this' works as it worked for global space
  },
};
obj.x();

//---------------------------------------------------------------------
//this keyword inside nested arrow function
const obj2 = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};
obj2.x();

//-----------------------------------------------------------------

// this inside DOM elements => reference to the parent HTML element

//this inside class, constructor
