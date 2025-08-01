/*
4. Inverted Left-Aligned Triangle

****
***
**
*


*/

for(let i=4; i>=1; i--){
  let bag = "";
  for(let j=1; j<=i; j++){
    bag += "*"
  }
  console.log(bag)
}