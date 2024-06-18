let notas = [7, 6, 8, 2, 5, 4, 9, 8, 10]
let maiorNota = notas[0]
let menorNota = notas[0]
let soma = 0
let notasAcimaDaMedia = 0
notasAbaixoDaMedia = 0

     for (let i = 0; i < notas.length; i++) {
        soma = soma + notas[i]
     }
     let media = soma / notas.length
     console.log(`A média dos números é ${media}`)
      
     for (let i = 0; i < notas.length; i++) {
        if ( notas[i] > maiorNota) {
            maiorNota = notas[i]
        }
        if (notas[i] < menorNota) {
            menorNota = notas[i]
        }
    } 
    console.log(notaAlta)
    console.log(notaBaixa)
    
    for ( let i = 0; i < notas.length; i++) {
    if (notas[i] >= media) {
    notasAcimaDaMedia = notasAcimaDaMedia +1
}
}
console.log(`O vetor das notas possui ${notasAcimaDaMedia} notas acima da média e ${notasAbaixoDaMedia} notas abaixo da media.`)

notas.push(14)
console.log(notas)

for ( let i = 0; i < notas.length; i++) {
    if (notas[i]<8) {
            notasAbaixoDaMedia
    }
    }
    console.log(notasAbaixoDaMedia)