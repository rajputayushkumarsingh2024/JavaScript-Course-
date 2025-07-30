/*

#### ✅ **Q4. Leap Year Checker**

Write a program that checks whether a given year is a **leap year** or not.

📜 **Leap year condition:**

* Year is divisible by 4
* Not divisible by 100 unless also divisible by 400

📥 **Input Example:**  2000
📤 **Output Example:**  Leap Year

*/

let leapYearFinder = (num) => {
  if(num % 4 === 0 && num % 100 !== 0 || num % 400 === 0){
    console.log(`${num} is a Leap Year`)
  }
  else{
    console.log(`${num} is not Leap Year`)
  }
}

leapYearFinder(2000)
leapYearFinder(2001)
leapYearFinder(1900)
