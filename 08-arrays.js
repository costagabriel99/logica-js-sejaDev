/*const variavel = 10
let array = [true, false, 0, 1, 2, "string aqui", "seja dev", variavel]

console.log(array)
array.pop() // remove o ultimo elemento do array
array.push(1000, "string") // adiciona elementos no final do array
console.log (array)



let newArray = [10,20,30]
let i = 0
while (i < newArray.length) {
  console.log(i)
  console.log(newArray[i])
  i++
}

for (let pos = 0; pos < newArray.length; pos++) {
  console.log(pos)
  console.log(newArray[pos])
}

for (let pos in newArray){
  console.log(pos)
  console.log(newArray[pos])
}

for (let pos of newArray){
  console.log(pos)
}
*/

// dado um array com X numeros, encontrar a media desses numeros

const array = [1,2,3,4,5,6,7,8,9,9,9,9,9,9,9,9]
let sum = 0
for (let num of array) {
  sum = sum + num
}

console.log(sum/ array.length)