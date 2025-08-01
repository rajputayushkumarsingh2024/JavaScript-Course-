// Use nested `for` loops to print a triangle like this:
// *
// **
// ***
// ****
// *****

let row = 5 
for(let i=1; i<=row; i++){
  let bag = ""
  for(let j=1; j<=i; j++){
    bag = bag + "*"
  }
  console.log(bag)
}