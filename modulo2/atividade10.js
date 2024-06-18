function calculadora(numero1, numero2, operador) {
    if (operador == '+') {
        return numero1 + numero2
    } 
    else if (operador == '-') {
    return numero1 - numero2
    }
    else if (operador == '/') {
    return numero1 / numero2
    }
    else {
    return numero1 * numero2
}
}

console.log(calculadora(8,7,'+'))
console.log(calculadora(8,7, '-'))
console.log(calculadora(8,7, '/'))
console.log(calculadora(8,7, '*'))
