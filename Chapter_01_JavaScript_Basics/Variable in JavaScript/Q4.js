
/*

### 💡 **Question 4: Find the Difference Between Product and Sum of Digits**

Write a function that takes a **positive integer `num`** as input and returns the **difference between the product of its digits and the sum of its digits**.

📌 **Example:**

```javascript
Input: 234
Output: 15
Explanation: Product = 2*3*4 = 24, Sum = 2+3+4 = 9, Difference = 24 - 9 = 15
```

*/

// SOLUTION

let differenceFinder = (num) => {
  let newNum = num.toString().split("")
  // console.log(newNum)
  let sum = 0;
  let product = 1;
  for(let i=0; i<newNum.length; i++){
    let digit = Number(newNum[i])
    sum += digit
    product *= digit
  }
  // console.log(sum)
  // console.log(product)
  let difference = product - sum
  console.log(difference)
}

differenceFinder(234)
