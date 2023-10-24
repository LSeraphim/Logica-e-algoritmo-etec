let total = null;
while(true) {
    pedido = parseInt(prompt('Digite o código do produto que deseja(Digite 0 para encerrar)'));
    if (pedido === 100) {
        total = total + 1.70;
    }
    if (pedido === 101) {
        total = total + 2.30;
    }
    if (pedido === 102) {
        total = total + 2.60;
    }
    if (pedido === 103) {
        total = total + 2.40;
    }
    if (pedido === 104) {
        total = total + 2.50;
    }
    if (pedido === 105) {
        total = total + 1.00;
    }

    if(pedido === 0) {
        break;
    }
}

console.log('O valor total ficou: ' + total+'R$');