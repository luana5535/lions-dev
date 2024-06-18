let resposta 
console.log("Voce gosta de cafe?")
processamento.stdin.once("data", function(data) {
    resposta = data.toString().trim()
    processamento(resposta)
    processamento.exit()
})

function processamento(resposta) {
    if (resposta == "sim") {
        console.log("Voce gosta de cafe")
    }
    else {
        console.log("Voce não gosta de cafe")
    }
}