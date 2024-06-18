let dado = 0

    console.log("Quantos lados tem o dado?")
    process.stdin.once('data', function(data) {
        dado = parseInt(data.toString().trim())
        processamento(dado)
        process.exit()
    })

    function processamento(dado) {
        console.log(`O dado tem ${Math.floor(Math.random() * dado) + 1} lados.`)
    }


