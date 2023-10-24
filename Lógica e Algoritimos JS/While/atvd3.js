var numeros = null;
var contador = 0;
var soma = 0
while (numeros != 0) {
    numeros = Number(prompt('Digite um número (0 encerra o programa)'));
    soma += numeros;
    contador += 1;
}

contador = contador - 1;
console.log(soma)
console.log(contador)
let media = soma/contador;
console.log('A média dos números digitados é: ' + media);