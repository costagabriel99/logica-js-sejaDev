/*
crie um algoritmo que faça funções fatoriais
*/

const number = 5
const resposta = fatorial(number)

function fatorial (n) {
    let fatorial = 1
    while (n >= 2) {
        fatorial = fatorial * n
        n--
    }
    return  fatorial
}

console.log(resposta)