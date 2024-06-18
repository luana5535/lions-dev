var nome = ''
console.log('nome')
process.stdin.on('data' , function(data) {
    let nome = data.toString()
    process.stdout.write('olá ' + nome)
    process.exit()
    
})