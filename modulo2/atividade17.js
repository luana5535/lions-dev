let todosOsNumeros = [27, 10, 3, 0, 20, 5, 6, 3]
let numerosImpares = []
let numerosPares = [] 

    todosOsNumeros.push(17)

    for(let i = 0; i < todosOsNumeros.length; i++) {
    if (todosOsNumeros[i]%2 == 0) 
        numerosImpares.push(todosOsNumeros[i])
    else {
        numerosPares.push(todosOsNumeros[i])
    }
    }

    console.log(`Os numeros pares são ${numerosPares}, os impares são ${numerosImpares} e todos os numeros são ${todosOsNumeros}`)




