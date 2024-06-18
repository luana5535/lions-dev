let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 9.0, 10.0, 6.5, 9.0]
let media = 0
let soma = 0 
let notaMaxima = notas[0]
let notaMinima = notas[0]
let acimaDaMedia = []
let reprovados = []
let mediaDois = 6.0
    for (let i = 0; i < notas.length;i++) {
        soma = soma + notas[i]
    }
    media = soma / notas.length
    console.log(`A média entre as notas é ${media}`)

    for (let i = 0; i < notas.length;i++) {
        if (notas[i] > notaMaxima) {
        notaMaxima = notas[i]
        }
        if (notas[i] < notaMinima) {
        notaMinima = notas[i]
    }
}
        console.log(`A nota mínima é ${notaMinima} e a nota máxima é ${notaMaxima}`)

        for (var i = 0; i < notas.length;i++) {
            if (notas[i] > mediaDois) {
            acimaDaMedia.push(notas[i])
            }
        }
        console.log(`As notas acima da média são ${acimaDaMedia}`)
        
        notas.push(8)
        console.log(`${notas}`)

        for (let i = 0; i < notas.length;i++) {
            if(notas[i] < mediaDois) {
                reprovados.push(notas[i])
            }
        }
        console.log(`As notas reprovadas são ${reprovados}`)