var candidatoClaudia = null;
var candidatoCarlos = null;
var candidatoNeves = null;
var nulos = null;
var brancos = null;
var contador = null;
while(true) {
    let voto = Number(prompt('Vote nos candidatos de 1 a 3 (1 - Claudia Rodrigues; 2 - Carlos Luz; 3 - Neves Rocha); 4 - Nulo; 5- Branco 0 - para encerrar as votações'));
    if (voto === 1) {
        candidatoClaudia +=1;
    }
    if (voto === 2) {
        candidatoCarlos +=1;
    }
    if (voto === 3) {
        candidatoNeves +=1;
    }
    if (voto === 4) {
        nulos +=1;
    }
    if (voto === 5) {
        brancos +=1;
    }
    if (voto === 0) {
        break;
    }

    if (voto > 5) {
        console.log('valor inválido');
    }
    contador += 1;
}

let porcentagemNulos = (nulos/contador)*100;
let porcentagemBrancos = (brancos/contador)*100;
console.log('A candidata Claudia rodrigues teve: ' + candidatoClaudia + ' votos');
console.log('O candidato Carlos Luz teve: ' + candidatoCarlos + ' votos')
console.log('O candidato Neves Rocha teve: ' + candidatoNeves + ' votos');
console.log('A porcentagem de votos nulos é: ' + porcentagemNulos +'%');
console.log('A porcentagem de votos nulos é: ' + porcentagemBrancos +'%');
