var num = null;
while(num !== 0 ) {
    num = Number(prompt('Digite um número (Digite 0 para encerrar o programa)'));
    let dobro = num*2;
    let quadrado = num*num;
    let cubo = num*num*num;
    console.log(`O valor digitado foi ${num}, o dobro é ${dobro}, o quadrado é ${quadrado}, o cubo é ${cubo}`);
}