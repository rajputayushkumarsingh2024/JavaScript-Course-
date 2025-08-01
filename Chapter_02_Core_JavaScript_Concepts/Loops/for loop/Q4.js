// Use a for loop to reverse the string "javascript"
// Output: "tpircsavaj"

let str = "javascript"
let nStr = ""
for(let i=str.length-1; i>=0; i--){
  nStr += str[i]
}
console.log(nStr)