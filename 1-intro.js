// in-line comment

const amount = 5;

if(amount<10) {
     console.log('small number');
} else { 
     console.log('large number');
}

console.log('First Node App!!!!');

/* 
Data types: undefined, null, boolean, string, symbol(immutable unique), number, and object
*/

// Examples
// so var declares a variable that is accessible within the entire project
// const is a variable that cannot be changed
var myName = "Nick";// scope of the entire project 

let ourName = "freeCodeCamp"; // limited scope i.e. block scoping 

if(true) {
     let message = 'only works in the block'
     console.log(message)

}
// check access to message in block
// console.log(message);
try{
     console.log(message);
} catch(error) {
     if (error instanceof ReferenceError) {
          console.log('Reference Error Occurred:', error.message)
     }
}


