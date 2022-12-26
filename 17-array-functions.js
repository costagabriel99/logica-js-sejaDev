const array = [1, 5, 4, 12, 7, 8, 80, 9]

// forEach passa por todos os elementos do array
array.forEach((elemento, posicao) => {
    //console.log(`${elemento}- posicao ${posicao}`)
})

// find: retorna o elemento

const valor = array.find((elemento) => {
    if (elemento === 12) return true
    return false
})


//findIndex: retorna a posição do elemento

const index = array.findIndex ((elemento) => {
    if (elemento === 12) return true
    return false
})

// some: retorna true se pelo menos um numero satisfazer a condição

const some = array.some((elemento) => {
    if (elemento >= 120) return true
    return false
})

// every: retorna true se todos os elementos do array satisfazer a condição

const every = array.every(elemento => elemento >= 1)



const newArray = [1,2,3,4,5]

// splice corta o array, o primeiro parametro é o inicio e o segundo é a quantidade
//console.log(newArray.splice(2,4))

// map: alterar os valores dentro array seguindo uma regra

/*console.log(newArray.map((elemento) => {
    return elemento * 2
}))
*/

// filter: filtra os elementos dentro do array

/*console.log(newArray.filter((elemento) => {
    return elemento % 2 === 1
}))
*/

//reduce: reduz o array para algum outro elemento
console.log(newArray.reduce((acumulado, elemento) => {
    return acumulado - elemento
}, 100 ))