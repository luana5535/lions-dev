let nome
let idade
console.log("qual o seu nome?")
process.stdin.once('data', function(data) {
    nome = data.toString().trim()

console.log("qual a sua idade?")
process.stdin.once('data', function(data) {
        idade = parseInt('data'.toString().trim())
        processamento(nome, idade)
        process.exit()
    })
})

function processamento(nome, idade) {
    process.exit()

if (idade < 18) {
    let menorDeIdade = (idade -18)
    console.log(`Olá seu nome é ${nome}, e sera maior de idade em ${menorDeIdade} anos.`)

}else {
console.log(`Olá ${nome}, vc ja é maior de idade`)
}
}

