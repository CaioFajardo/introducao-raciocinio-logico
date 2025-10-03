// Exemplo do conector NOT (!)

// Este conector INVERTE o valor lógico da condição.
// Se a condição é verdadeira, o '!' a torna falsa, e vice-versa.

// Eu posso votar caso:
// - Eu seja homem OU mulher
// - Eu NÃO seja menor de idade
// - Tenha titulo de eleitor

let idade = 18
let possuiCNH = true
let nacionalidade = "brasileiro"

if (!(idade >= 18 && possuiCNH == true && nacionalidade == "brasileiro")) {
    console.log("Você não pode dirigir")
} else {
    console.log("Você pode dirigir")
}