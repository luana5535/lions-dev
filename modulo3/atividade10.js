let vetor = [ 1, 2, 3, 4, 5]
let impares = []
    for(let i = 0; i< vetor.length; i++) {
        if(vetor[i] % 2 != 0){
            impares.push(vetor[i])
        }
    }
    console.log(`Os números ímpares são ${impares}`)