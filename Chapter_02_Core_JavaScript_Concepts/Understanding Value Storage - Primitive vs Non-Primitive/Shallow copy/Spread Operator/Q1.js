let arr = [1,2,3,4,5]
console.log(arr)

console.log(...arr)

let copiedArr = [...arr]
copiedArr.push(2025)
console.log(copiedArr)


console.log("==============================")

let obj = {
  name : "Ayush",
  roll : 10
}

console.log(obj)

obj["age"] = 11
console.log({...obj})