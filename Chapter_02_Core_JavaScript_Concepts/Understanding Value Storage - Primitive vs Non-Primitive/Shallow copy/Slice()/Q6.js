/*
Perfect, Ayush! Here's a **rewritten version of Q1** where **you have to write the code** yourself to observe how `slice()` works as a shallow copy when applied on objects in an array.

---

### ✅ **Q1. Write Code to Show Shallow Copy Effect using `slice()`**

🧠 **Task:**
You are given an array of objects.
Your task is to:

1. Create a **shallow copy** using `slice()`.
2. Change the value of a property (like `name`) in the copied array.
3. Print both the original and the copied arrays.
4. Observe: Does the change reflect in both arrays? Why?

*/


const originalArray = [
  { name: "Ayush" },
  { name: "Piyush" }
];


let copiedArr = originalArray.slice()

copiedArr[0].name = "Shalu"

console.log(originalArray)
console.log(copiedArr)


/*

slice() made a new array, yes.
But it didn't clone the objects inside, it just copied the reference.
So both originalArray[0] and copiedArr[0] point to the same object in memory.
That’s why when you changed copiedArr[0].name = "Shalu", it also affected the original.
slice() is a shallow copy, not a deep one.
It’s safe for primitive arrays, but for arrays of objects, the inner objects remain shared.
*/