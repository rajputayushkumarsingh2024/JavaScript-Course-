/* 

### 💡 **Twisted Question 6: Difference Between Product and Sum of Digits at *Even Indexes Only***

Write a function that takes a **positive integer `num`** as input and returns the **difference between the product and the sum of digits that are at even indexes** (i.e., 0, 2, 4, …).

📌 Indexing starts from **0** (left to right).
📌 If there are **no digits at even indexes** (e.g., number with only one digit), return `0`.

---

### 🔍 Examples

```javascript
Input: 236487
Indexes: 0->2, 
         1->3, 
         2->6, 
         3->4, 
         4->8, 
         5->7
Even index digits: 2, 6, 8  
Sum = 2 + 6 + 8 = 16  
Product = 2 * 8 * 6 = 96 
Difference = 96 - 16 = 80  
Output: 80
```

```javascript
Input: 8
Even index digits: 8  
Sum = 8, Product = 8 → Difference = 0  
Output: 0
```

*/

// SOLUTION

let indexFinder = (num) => {
  let newNum = num.toString().split("")
  console.log(newNum)

  let sum = 0;
  let product = 1;

  for(let i=0; i<newNum.length; i++){
    let digit = Number(newNum[i])

    if(i % 2 == 0){
      sum += digit;
      product *= digit;
    }
  }
  console.log(`Sum => ${sum}, Product => ${product}`)
  console.log(`Difference => ${product - sum}`)
}

indexFinder(123456)
indexFinder(8)
indexFinder(236487)

