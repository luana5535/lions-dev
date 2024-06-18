function calculadora(numero1, numero2, operador)  {
    switch (operador) {
        case '+':
        return numero1 + numero2

        case '-':
        return numero1 - numero2
        
        case  '/':
        return numero1 / numero2
        
        case '*':
        return numero1 * numero2

}
}

console.log(calculadora(9,7, '+'))

