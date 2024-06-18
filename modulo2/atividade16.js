let todosOsNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numerosImpares = []
 for(let i = 0; i < 10; i < todosOsNumeros.length; i += 1) {
if (todosOsNumeros[i]%2 != 0)
numerosImpares.push(todosOsNumeros[i])
 } 

console.log(numerosImpares)