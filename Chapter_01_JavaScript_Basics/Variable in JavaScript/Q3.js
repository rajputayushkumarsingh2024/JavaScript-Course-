/*  

## 🟡 **2 Medium Coding Questions**

### **3. Scope Checker**

**🧠 Task**:
Write a program where a variable `message` is declared using `let` **inside a block**, and try accessing it **outside the block**. Print both results.

✅ Focus: Block scope vs global scope

```js
// Expected Output:
// Inside block: Hello
// Outside block: ReferenceError (or handle the error)
```

*/

// SOLUTION

{
  let message = "hello"
  console.log(`Inside block : ${message}`)
}

try {
  console.log(`Outside block: ${message}`)
} catch (error) {
  console.log(`Outside block: Error => ${error.message}`)
}
