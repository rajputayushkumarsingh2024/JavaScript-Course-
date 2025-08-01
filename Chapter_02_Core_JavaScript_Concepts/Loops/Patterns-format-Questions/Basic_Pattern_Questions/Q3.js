/*
3. Right-Aligned Triangle

   *
  **
 ***
****

*/

for(let i=1; i<=4; i++){
  let bag = "";

  for(let space = 1; space <= 4 - i; space++){
    bag += " "
  }

  for(let j=1; j<=i; j++){
    bag += "*"
  }
  console.log(bag)
}

/*
For Understanding Purpose 
-------------------------------------------------
   *      ← row 1 (3 spaces + 1 star)
  **      ← row 2 (2 spaces + 2 stars)
 ***      ← row 3 (1 space  + 3 stars)
****      ← row 4 (0 space  + 4 stars)
-------------------------------------------------
(4 - i) spaces
i stars
-----------------------------------------------
*/