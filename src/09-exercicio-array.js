/*
A prefeitura possui uma lista com a idade de cada morador e quer saber
a quantidade de moradores que são eleitores obrigatórios, facultativos
ou não eleitores de acordo com as informações abaixo:

Obrigatório: entre 18 e 69 anos
Facultativo: entre 16 e 17 ou acima de 70 anos
Não eleitor: abaixo de 16 anos.
*/

const lista = [18, 10, 19, 70, 80, 15, 22, 29, 35, 42, 59, 60, 22, 29, 79, 99]

let obrigatorio = 0
let Facultativo = 0
let naoELeitor = 0

for (let idade of lista){
  if (idade >= 18 && idade <= 69) obrigatorio++
  else if (idade < 16) naoELeitor++
  else Facultativo++
}

console.log("obrigatorio :", obrigatorio)
console.log("Facultativo :", Facultativo)
console.log("Não Eleitor :", naoELeitor)