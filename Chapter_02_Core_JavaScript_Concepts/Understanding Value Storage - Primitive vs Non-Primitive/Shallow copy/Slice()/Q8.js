/*
### ✅ Q3. Clone All Except First Object

**Task:**
Write a function that returns a new array without the first object, using `slice()`.

```js
const books = [
  { title: "Book A" },
  { title: "Book B" },
  { title: "Book C" }
];

cloneWithoutFirst(books); // returns [{title: "Book B"}, {title: "Book C"}]
```
*/

const books = [
  { title: "Book A" },
  { title: "Book B" },
  { title: "Book C" }
];

let cloneWithoutFirst = (books) => {
  let copiedBookArray = books.slice(1)
  return copiedBookArray
}

console.log(cloneWithoutFirst(books))