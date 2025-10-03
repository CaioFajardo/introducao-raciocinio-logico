// Exemplo do conector OR (||)

// Este conector retorna 'true' se PELO MENOS UMA das condições forem verdadeiras.

let sexo = "H" // ou "M"
let idade = 17
let possuiTituloEleitor = true

if((sexo == "H" || sexo == "M") && idade >= 16 && possuiTituloEleitor == true) {
    console.log("Você pode votar")
} else {
    console.log("Você não pode votar")
}