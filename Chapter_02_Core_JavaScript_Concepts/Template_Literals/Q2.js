/*

### **2. Bill Summary Generator**

🧠 **Task:**
Write a function that takes item name, quantity, and price per item, and returns a formatted bill:
👉 *"You bought 3 Apples for ₹30 each. Total = ₹90"*

*/

// SOLUTION 

let billSummary = (name, quantity, price) => {
  return `You bought ${quantity} ${name} for ₹${price} each. Total = ₹${quantity * price}`
}

console.log(billSummary("Apple", 3, 30))