/*const num = 10
const array = [10,20,30]
const math = (10+10)/2
*/
const pessoa = {
  nome: "José",
  idade: 20,
  casado: true,
  notas: [10,5,8,7],
  endereco: {
    rua: "Rua xyz",
    numero: 100
}
}

console.log(pessoa["nome"])
console.log(pessoa.nome)
console.log(pessoa["idade"])
console.log(pessoa.idade)
console.log(pessoa["casado"])
console.log(pessoa.casado)
console.log(pessoa["notas"[1]])
console.log(pessoa.notas[1])
console.log(pessoa["endereco"]["rua"])
console.log(pessoa.endereco.rua)