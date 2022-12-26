const pesoPeixe = 98
const pesoLimite = 50
const multa = 4

let excesso = pesoPeixe > pesoLimite ? pesoPeixe - pesoLimite : 0
let totalMulta = excesso * multa

console.log ("Excesso: ", excesso, "kg")
console.log ("Multa: R$", totalMulta)

/*
if(pesoPeixe > pesoLimite){
  console.log("Peso excedente:", pesoPeixe - pesoLimite,"kg", "Multa de: R$", pesoPeixe % pesoLimite * multa)
} else {
  console.log("Sem multa")
}
*/