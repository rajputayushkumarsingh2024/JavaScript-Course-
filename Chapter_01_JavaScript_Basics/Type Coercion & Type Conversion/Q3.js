/*

### 🔸 Medium Q1: Loose vs Strict Equality
Write a function `checkEquality(a, b)` that prints the result of both `a == b` and `a === b`.

**Example Input:** checkEquality(5, "5")


**Expected Output:**
Loose Equality (==): true  
Strict Equality (===): false

*/

// SOLUTION

let checkEquality = (a, b) => {
  console.log(`Loose Equality (==): ${a == b}`);
  console.log(`Strict Equality (===): ${a === b}`);
}

checkEquality(5, "5");
