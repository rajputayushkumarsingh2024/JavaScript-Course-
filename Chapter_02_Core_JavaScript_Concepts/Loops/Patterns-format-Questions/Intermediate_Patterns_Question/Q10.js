/*

### 10. Full Pyramid

   *   
  ***  
 *****
*******

*/
let n = 4
for (let i = 1; i <= n; i++) {
  let bag = "";
  for (let j = 1; j <= n - i; j++) {
    bag += " "
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    bag += "*"
  }
  console.log(bag)
}

