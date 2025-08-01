/*

8. Floyd’s Triangle

1
2 3
4 5 6
7 8 9 10


-------- Hint -------------
Row 1:      1
Row 2:      2 3
Row 3:      4 5 6
Row 4:      7 8 9 10
---------------------------
*/

let num = 1;
for(let i=1; i<=4; i++){
  let bag = "";
  for(let j=1; j<=i; j++){
    bag = bag + (num++) + " "
  }
  console.log(bag)
}