/*

#### **Q5. Check if Number is a Palindrome**
**🧠 Task:**
Use a `while` loop to check if a number is a **palindrome**. Example input: `1221`.

**✅ Output:**  Palindrome

*/

let palindromeChecker = (num) => {

  let str = num.toString()
  // console.log(typeof num.toString())

  let reverseNum = "";
  let i = str.length-1;

  while(i>=0){
    reverseNum += str[i]
    i--
  }
  // console.log(reverseNum)

  if(str == reverseNum){
    console.log(`${num} => Palindrome Number`)
  }
  else{
    console.log(`${num} => not a Palindrome Number`)
  }
}

palindromeChecker(1221)
palindromeChecker(14861)
palindromeChecker(19651)