const readline = require('readline')
let numero = Math.floor(Math.random() * 100)+ 1 
let rodadas = 1
let max 


const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

console.log('boas vindas!')
perguntarContinuacao()

function perguntarContinuacao() {
rl.question('Digite um Número ', (rodadas) => {
if (rodadas < 5 && rodadas <= 100 && rodadas > 0){
    switch(true) {
        case(rodadas > numero):
                console.log('O numero é menor')
                rodadas++
                perguntarContinuacao()
                break;
        case (rodadas < numero):
                console.log('O numero é maior')
                rodadas++
                perguntarContinuacao()
                break;
        case (rodadas == numero):
                console.log("Você acertou!")
                rl.close() 
                console.log(`O progama rodou ${rodadas} vezes.`)
                rl.close()
                break;
    }
  }else if (resposta > 100) {
    console.log("Número inválido.")
  }
    else {
    console.log('Você atingiu o número máximo de tentativas ')
    rl.close() 
}
})
}