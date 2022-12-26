const pessoa = {
    nome: "José",
    Sobrenome: "Fortes",
    idade: 27
}

const { nome, idade } = pessoa

const pessoaAtualizada = {
    ...pessoa,
    idade: 30
}

console.log(pessoaAtualizada)

const array = [10,20,3,4]
const [a,b] = array

const newArray = [0, ...array, 5]
console.log(newArray)