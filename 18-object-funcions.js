const person = {
    name: "José",
    lastName: "fortes"
}

//object.keys () : cria um array com todas as chaves do objeto

//console.log(Object.keys(person))

// object.values (): cria um array com todos os vaores do objeto

//console.log(Object.values(person))

// object.entries (): cria um  array com um array de objetos e valores

//console.log(Object.entries(person)) EX:

const livros = {
    'Livro A': 19.90,
    'livro B': 96.99,
    'Livro C': 19.99
}

const values = Object.values(livros)
const sum = values.reduce((valor, acumulado) => {
    return valor + acumulado
}, 0)

console.log(sum)