var x = [];
var y = [];
var n = null

for(let i=0; i < 5; i++) {
    var p = Number(prompt("Digite um valor: "));
    x.push(p);
}

for(let o=0; o < 5; o++){
    n = x[o] * 2;
    y.push(n);
    n = null;
}

console.log(x);
console.log(y);