let nota1 
let nota2 
let media
let nota = []

    console.log("Qual a primeira nota?")
    process.stdin.once('data', function(data) {
        nota1 = parseFloat(data.toString().trim())

    console.log("Qual a segunda nota?")
    process.stdin.once('data', function(data) {
        nota2 = parseFloat(data.toString().trim())

    processamento(nota1, nota2, nota)
    process.exit()
    })
    })

    function processamento(nota1,nota2,nota) {
        nota.push(nota1)
        nota.push(nota2)
        media = (nota1 + nota2) /2
            console.log(`A média entre as duas notas é ${media}`)
    }