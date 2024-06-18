let nome 
let idade 
    console.log("Qual seu nome?")
    process.stdin.once('data', function(data) {
        nome = data.toString().trim()

    console.log("Qual sua idade?")
    process.stdin.once('data', function(data) {
        idade = data.toString().trim()

    processamento(nome, idade)
    process.exit()
    })
    })

    function processamento(nome, idade) {
        let menorDeIdade = 18 - idade
        if (idade > 18) {
        console.log(`Você ja é maior de idade`)
    }   else {
        console.log(`${nome}, você sera maior de idade em ${menorDeIdade} ano`)
    }
    }
