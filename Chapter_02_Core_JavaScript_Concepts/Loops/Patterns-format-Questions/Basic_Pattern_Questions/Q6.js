/*

6. Half Pyramid Numbers

1
12
123
1234

*/

for (let i = 1; i <= 4; i++) {
  let bag = "";
  for (let j = 1; j <= i; j++) {
    bag += j
  }
  console.log(bag)
}