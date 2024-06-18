let coresFavoritas = ['preto', 'azul', 'verde']
let coresEspeciais = []
let corDoUsuario = ''

console.log('Qual sua cor favorita?')
process.stdin.once('data', function(data){
    corDoUsuario = data.toString().trim()
    processamento(corDoUsuario)
    process.exit() 
})

function processamento(corDoUsuario) {
    if (coresFavoritas.includes(corDoUsuario)){
        console.log('A sua cor esta entre as favoritas da turma')
    } else {
        console.log( ' A sua cor favorita é diferente, vamos adicionar a lista')
        coresEspeciais.push(corDoUsuario)
    }
    console.log(`As cores favoritas são ${coresFavoritas}`)
    console.log(`As cores Especiais são ${coresEspeciais}`)
    console.log(`As cores favoritas tem ${coresFavoritas.length} elementos`)
}