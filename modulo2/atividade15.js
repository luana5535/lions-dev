let numero
console.log("Qual é o numero?")
process.stdin.once('data', function(data) {
    numero = parseInt(data.toString().trim())
    processamento(numero)
    process.exit()    
})

function processamento(numero) {
    if (numero % 5 == 0) {
        console.log('Este número é divisível por 5')
    }
    else {
        console.log('Este número não é divisivel por 5')
    }
}