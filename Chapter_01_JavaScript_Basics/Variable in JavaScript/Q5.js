/*

### 💡 **Twisted Question 5: Difference Between Product and Sum of *Even* Digits Only**

Write a function that takes a **positive integer `num`** as input and returns the **difference between the product and the sum of only the even digits** in the number.

If there are no even digits, return `0`.

📌 **Example:**

```javascript
Input: 234
Output: 4
Explanation:
Even digits = 2 and 4  
Sum = 2 + 4 = 6  
Product = 2 * 4 = 8  
Difference = 8 - 6 = 2
```

```javascript
Input: 135
Output: 0
Explanation:
No even digits → return 0

*/

// SOLUTION

let differenceEvenFiner = (num) => {
  let newNum = num.toString().split("")
  // console.log(newNum)
  let sum = 0
  let product = 1
  for (let i = 0; i < newNum.length; i++) {
    let digit = Number(newNum[i])
    if (digit % 2 === 0) {
      sum += digit
      product *= digit
    }
  }
  // console.log(`Sum => ${sum}, Product => ${product}`)
  if (sum === 0) {
    console.log(0);
  } else {
    console.log(product - sum);
  }
}

differenceEvenFiner(234)
differenceEvenFiner(135)