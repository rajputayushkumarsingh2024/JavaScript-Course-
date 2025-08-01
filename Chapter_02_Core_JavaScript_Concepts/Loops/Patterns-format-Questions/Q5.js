/*

5. Hollow Rectangle

*****
*   *
*****

*/

for(let i=1; i<=3; i++){
  let bag = "";
  for(let j=1; j<=5; j++){
    if(i == 1 || i == 3){
      bag += "*"
    }
    else{
      if(j == 1 || j == 5){
        bag += "*"
      }
      else{
        bag += " "
      }
    }
  }
  console.log(bag)
}