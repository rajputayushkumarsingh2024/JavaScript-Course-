/*

### ✅ 2. **Assignment Operators**

**Q:** Take a variable with initial value `10`. Use all assignment operators (`+=`, `-=`, `*=`, `/=`, `%=`) one by one on it and print the result after each operation.

📤 Example Output:

```
After +=: 15
After -=: 10
After *=: 20
After /=: 5
After %=: 0

*/

// SOLUTION

let value = 10;

value += 5;
console.log("After +=:", value); 

value -= 5;
console.log("After -=:", value); 

value *= 2;
console.log("After *=:", value); 

value /= 4;
console.log("After /=:", value); 

value %= 3;
console.log("After %=:", value); 
