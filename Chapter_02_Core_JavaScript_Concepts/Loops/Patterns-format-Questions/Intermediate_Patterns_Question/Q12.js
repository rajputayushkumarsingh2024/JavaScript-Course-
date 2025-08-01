/*
### 13. Diamond Pattern


   *
  ***
 *****
*******
 *****
  ***
   *
   
*/

let rows = 4;
for(let i=1; i<=rows; i++){
   let bag = "";
   for(let j=1; j<= rows - i; j++){
      bag += " ";
   }
   for(let k=1; k<= 2*i - 1; k++){
      bag += "*" 
   }
   console.log(bag)
}
//------------------------------------

for(let a = rows-1; a>=1; a--){
   let bag2 = "";
   for(let b=1; b<= rows - a; b++){
      bag2 += " ";
   }
   for(let c=1; c<= 2*a - 1; c++){
      bag2 += "*"
   }
   console.log(bag2) 
}