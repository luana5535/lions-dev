let nome 
let idade 
const ano = 2024
console.log('qual é seu nome?')
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('qual é sua idade?')

process.stdin.once('data', function(data) {
    idade = parseInt(data.toString().trim())
    processamento(nome, idade)
    process.exit()
    })
})

function processamento(nome, idade) {
    let resultado = ano - idade
    console.log(`Seu nome é ${nome} ,você nasceu em ${resultado}, ou ${resultado-1} caso ainda não tenha feito aniversario.`)
}
