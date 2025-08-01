/*

9. 0-1 Triangle

1
01
101
0101

*/

for(let i=1; i<=4; i++){
  let bag = "";
  for(let j=1; j<=i;  j++){
    if((i+j) % 2 == 0){
      bag += "1"
    }
    else{
      bag += "0"
    }
  }
  console.log(bag)
}