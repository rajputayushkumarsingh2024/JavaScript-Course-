/*
### 🔸 Q10. Update Nested Object Property with Spread

**Task:**
Use nested spread to update only the `city` inside the `address` object without modifying the original.

```js
let user = {
  name: "Ayush",
  address: {
    city: "OldCity",
    pincode: 123456
  }
};

// Expected Output:
{
  name: "Ayush",
  address: {
    city: "NewCity",
    pincode: 123456
  }
}
```

*/

let user = {
  name: "Ayush",
  address: {
    city: "OldCity",
    pincode: 123456
  }
};

console.log(user)



let copiedArr = {
  ...user,
  address : {
    ...user.address,
    city : "NewCity"
  }
}

console.log(copiedArr)