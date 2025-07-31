/*

### 🔺 Hard Q2: Custom Type Coercion Evaluator

Write a function `customCompare(a, b)` that:

* Prints the type of both values
* Shows the result of `a == b` and `a === b`
* If the types are different, show what happens when each is explicitly converted using `Number()`, `String()`, and `Boolean()`

**Example Input:**  customCompare("0", false)

**Expected Output Format:**

Types: string vs boolean  
Loose Equality (==): true  
Strict Equality (===): false

Conversions:
String("0") = "0"
Number("0") = 0
Boolean("0") = true

String(false) = "false"
Number(false) = 0
Boolean(false) = false

*/

// SOLUTION

function customCompare(a, b) {

  console.log(`Types: ${typeof a} vs ${typeof b}`);

  console.log(`Loose Equality (==): ${a == b}`);
  console.log(`Strict Equality (===): ${a === b}`);

  if (typeof a !== typeof b) {
    console.log(`\nConversions:`);

    console.log(`String(${JSON.stringify(a)}) = ${String(a)}`);
    console.log(`Number(${JSON.stringify(a)}) = ${Number(a)}`);
    console.log(`Boolean(${JSON.stringify(a)}) = ${Boolean(a)}`);

    console.log("");


    console.log(`String(${JSON.stringify(b)}) = ${String(b)}`);
    console.log(`Number(${JSON.stringify(b)}) = ${Number(b)}`);
    console.log(`Boolean(${JSON.stringify(b)}) = ${Boolean(b)}`);
  }
}

customCompare("0", false);


