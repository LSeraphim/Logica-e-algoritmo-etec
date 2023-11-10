var x = [];
var cp = null;
var ci = null;

for (let i = 0; i < 5; i++) {
    let p = Number(prompt("Digite um valor: "));
    x.push(p);
}

for (let i = 0; i < x.length; i++) {
    if (x[i] % 2 == 0) {
        cp++;

    } else {
        ci++;
    }
}

console.log(cp + " numeros pares");
console.log(ci + " numeros impares");