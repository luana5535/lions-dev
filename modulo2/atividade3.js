let resposta 
console.log('qual o numero?')
process.stdin.once('data', function(data) {
    resposta = data.toString().trim()
    processamento(resposta)
    process.exit()
})

function processamento(resposta) {

if(resposta == 0) {
    console.log("O numero que vc digitou é zero.")
}else if (resposta %2 == 0) {
    console.log("o numero que vc digitou é par")
}else {
    console.log("O numero que vc digitou é impar")
}
}



