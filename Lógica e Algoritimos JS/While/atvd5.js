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
console.log('A candidata Claudia Rodrigues teve: ' + candidatoClaudia + ' votos');
console.log('O candidato Carlos Luz teve: ' + candidatoCarlos + ' votos')
console.log('O candidato Neves Rocha teve: ' + candidatoNeves + ' votos');
console.log('A porcentagem de votos nulos é: ' + porcentagemNulos +'%');
console.log('A porcentagem de votos brancos é: ' + porcentagemBrancos +'%');

if(candidatoClaudia > candidatoCarlos && candidatoClaudia > candidatoNeves) {
    console.log(`A candidata Claudia Rodrigues foi a vencedora`);
}
if( candidatoNeves > candidatoClaudia && candidatoNeves > candidatoCarlos) {
    console.log(`O candidato Neves Rocha foi o vencedor`);
}
if (candidatoCarlos > candidatoClaudia && candidatoCarlos > candidatoNeves) {
    console.log('O candidato Carlos Luz foi o vencedor');
}
if (brancos > nulos && brancos > candidatoCarlos && brancos > candidatoClaudia && brancos > candidatoNeves) {
    console.log('O maior número de votos é branco');
}
if (nulos > brancos && nulos > candidatoCarlos && nulos > candidatoClaudia && nulos > candidatoNeves) {
    console.log('O maior número de votos é nulo');
}
if (candidatoCarlos === candidatoClaudia && candidatoNeves === candidatoCarlos) {
    console.log('Todos candidatos empataram');
}
if (candidatoCarlos === candidatoClaudia && candidatoCarlos > candidatoNeves) {
    console.log('Os candidatos Carlos Luz e Claudia Rodrigues empataram');
}
if (candidatoNeves === candidatoClaudia && candidatoNeves > candidatoCarlos) {
    console.log('Os candidatos Neves Rocha e Claudia Rodrigues empataram');
}
if (candidatoNeves === candidatoCarlos && candidatoNeves > candidatoClaudia) {
    console.log('Os candidatos Carlos Luz e Neves Rocha empataram');
}
