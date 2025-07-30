/*

#### ✅ **Q5. Triangle Type Checker**

Write a program that takes **three sides of a triangle** and checks whether the triangle is:

* **Equilateral** (all sides equal)
* **Isosceles** (two sides equal)
* **Scalene** (all sides different)
* Also check if it's a **valid triangle** before type-check.

📥 **Input Example:***  4 4 4
📤 **Output Example:**  Equilateral Triangle

*/

// SOLUTION

let triangleChecker = (sides) => {
  let threeSides = sides.split(" ").map(Number)
  // console.log(threeSides)
  let [a, b, c] = threeSides;
  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c && c === a) {
      console.log("Equilateral Tringle")
    }
    else if(a === b || b === c || a === c){
      console.log("Isosceles")
    }
    else{
      console.log("Scalene")
    }
  }
  else {
    console.log("Invalid triangle")
  }
}

triangleChecker("4 4 4")
triangleChecker("4 2 4")
triangleChecker("4 2 42")
triangleChecker("3 2 4")
