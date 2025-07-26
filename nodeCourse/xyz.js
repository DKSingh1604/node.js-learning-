console.log("XYZ file executed.");
// var a;
function consoling() {
  const a = 5;

  console.log(a);
}
consoling();

// console.log(a);

// a module can only be used if it is imported in the file and exported in its own file(except the JSON files which are automatically parsed as you require them).

//All the code of the module is wrapped inside a function called IIFE
//IIFE -> Immediately Invoked Function Expression, keeps all the code of the module safe

(function () {
  console.log("abc");
})();

setTimeout(
  (arg1, arg2, arg3) => {
    console.log(
      "setTimeout with arguments:",
      arg1,
      arg2,
      arg3
    );
    console.log("Sum:", arg1 + arg2 + arg3);
  },
  3000,
  1,
  2,
  3
);
