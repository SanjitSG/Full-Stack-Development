// Globals -Node core module

//module => each and every file and folder can be considered as a module

//most commonly used globals
// __dirname
// __filename
// module
// required => import a module in another module
// process => info about the 'env'
// exports

console.log(`The path is : ${__dirname}`);

console.log(`The path is : ${__filename}`);

//async operation
setTimeout(() => {
  console.log("Welcome to node js");
}, 2000);
