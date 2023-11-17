var x = [];

for (let i = 0; i < 5; i++) {
    var n = parseInt(prompt('Digite um número: '));
    x.push(n);
}
x = x.sort();
console.log(x[4]);
