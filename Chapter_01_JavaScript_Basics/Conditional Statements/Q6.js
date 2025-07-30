/*

#### ✅ **Q6. Electricity Bill Calculator**

Write a program to calculate the electricity bill based on the following:

* First 100 units – ₹1.5/unit
* Next 100 units (101–200) – ₹2.5/unit
* Above 200 units – ₹3.5/unit
* Add ₹50 as fixed meter charge to all bills.

📥 **Input Example:** 250
📤 **Output Example:** Total Bill: ₹625.00

*/

// SOLUTION 

let electricityCalulater = (units) => {
  let meterCharge = 50;
  let bill = meterCharge;

  if (units <= 100) {
    bill = bill + (units * 1.5);
    console.log(`Electricity Bill = ₹${bill.toFixed(2)}`);
  } 
  else if (units > 100 && units <= 200) {
    let first100 = 100 * 1.5;
    let remaining = (units - 100) * 2.5;
    bill = bill + first100 + remaining;
    console.log(`Electricity Bill = ₹${bill.toFixed(2)}`);
  } 
  else {
    let first100 = 100 * 1.5;
    let next100 = 100 * 2.5;
    let remaining = (units - 200) * 3.5;
    bill = bill + first100 + next100 + remaining;
    console.log(`Electricity Bill = ₹${bill.toFixed(2)}`);
  }
};

electricityCalulater(250);
