/*

### 🔹 Easy Q2: Check Falsy Value
Write a function `isFalsy(val)` that takes any value and returns `true` if it's a falsy value, otherwise `false`.

**Example Input:**  isFalsy(0)
**Expected Output:** true

*/

let isFalsy = (val) => {
  if(!val){
    return true;
  }
  else{
    return false
  }
}

console.log(isFalsy(0))
console.log(isFalsy(""));       
console.log(isFalsy("Hello"));  
console.log(isFalsy(null));     
console.log(isFalsy(42));       
console.log(isFalsy(false));    
