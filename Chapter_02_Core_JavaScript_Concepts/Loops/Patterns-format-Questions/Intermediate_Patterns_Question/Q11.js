/*
### 11. Number Pyramid


   1
  1 2
 1 2 3
1 2 3 4

*/

let rows = 4
for(let i=1; i<=rows; i++){
  let bag = "";
  for(let j=1; j<= rows - i; j++){
    bag += " ";
  }
  for(let k=1; k <= i; k++){
    bag += k + " "
  }
  console.log(bag);
}
