/*
🔸 Medium Q2: Type Coercion in Arithmetic

Write a function `coercionTest()` that performs these operations and prints the output with explanations:

* `"5" + 2`
* `"5" - 2`
* `true + 1`
* `false + "0"`

**Expected Output Format:**
"5" + 2 = 52 (string concatenation)
"5" - 2 = 3 (string coerced to number)

🧠 Focus on the behavior of `+` vs `-` with strings and booleans.
*/

// SOLUTION 

let coercionTest = () => {
  console.log(`"5" + 2 = ${"5" + 2} (string concatenation)`);
  console.log(`"5" - 2 = ${"5" - 2} (string coerced to number)`);
  console.log(`true + 1 = ${true + 1} (true coerced to 1)`);
  console.log(`false + "0" = ${false + "0"} (false coerced to "false", then string concatenation)`);
}

coercionTest();
