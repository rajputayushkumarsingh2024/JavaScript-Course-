/*

### **Q2. Print Odd Numbers from 1 to 9**

**Task:**
Use a `do-while` loop to print only odd numbers from 1 to 9.

**Expected Output:**

```
1  
3  
5  
7  
9
```

*/

let i = 1;
do{
  if(i%2 != 0){
    console.log(i)
  }
  i++
}
while(i<=9)