let nota1
let nota2 
let media

console.log('qual a primeira nota?')
process.stdin.once('data', function(data) {
    nota1 = parseInt(data.toString().trim())
    console.log('qual a segunda nota?')
    process.stdin.once('data', function(data) {
        nota2 = parseInt(data.toString().trim())
        processamento(nota1, nota2)
        process.exit()
    })
})

function processamento(nota1, nota2) {
    let média = (nota1 + nota2) /2
    if (média < 8)
    console.log(`Você foi aprovado, pois sua média foi ${média}`)
}else {
console.log (`Você não foi aprovado, pois sua média foi ${média}`)
}