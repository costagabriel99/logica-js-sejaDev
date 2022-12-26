function soma () {

}

const a = 1
const b = 2

const tipo = "soma"

let r = 3

/*
faça uma função que verifica se o numero é par ou não
*/

function parImpar (){
  if (r % 2 === 0) return console.log("É par")
  else return console.log("É impar")
}

parImpar()

// mostre todos os numeros pares de 0 a 100 usando uma função

function ePar (num) {
  return num % 2 === 0
}

for (let i = 0; i <= 100; i++){
  if (ePar(i)) console.log(i)
}