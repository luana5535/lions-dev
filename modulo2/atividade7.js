let nome 
let idade 
let ano = 2024

console.log("Qual seu nome?")
process.stdin.once('data', function(data) {
    nome = data.toString().trim() 

console.log("Qual a sua idade?")
process.stdin.once('data', function(data) { 
    idade = parseInt(data.toString().trim())

processamento(nome,idade) 
process.exit()
})
})
    function processamento(nome, idade) {
        let anoNascimento = ano - idade
        console.log(`Olá ${nome}, você nasceu em ${anoNascimento} ou em ${anoNascimento -1} se ainda não fez aniversário.`)
    }