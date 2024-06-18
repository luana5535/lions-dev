let nota 
    console.log("Qual a nota?")
    process.stdin.once('data', function(data) {
        nota = data.toString().trim()
        processamento(nota)
        process.exit
    })

    function result(nota) {
    switch(true) {

    case (nota >= 90 && nota <= 100):
        return "A"
    
    case (nota >= 80 && nota <= 89):
        return "b"
    case (nota >= 70 && nota <= 79):
        return "C"

    case (nota >= 60 && nota <= 69):
        return "D"
    
    case (nota >= 0 && nota <= 59):
        return "E"

    default:
        console.log("Nota inválida")
    
    }
}
    function processamento(nota) {
        if (result(nota) == "A" || result(nota) == "b" || result(nota) == "C") {
        console.log (`Você foi aprovado com nota ${result(nota)}`)}
        else {
        console.log (`Você foi reprovado com nota ${result(nota)}`)}
    }

