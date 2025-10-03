// Exemplo do conector AND (&&)

// Este conector retorna 'true' apenas se TODAS as condições forem verdadeiras.

let idade = 18
let possuoCNH = true
let nacionalidade = "brasileira"

if(idade >= 18 && possuoCNH == true && nacionalidade == "brasileira") {
    console.log("Posso dirigir")
} else {
    console.log("Não posso dirigir")
}