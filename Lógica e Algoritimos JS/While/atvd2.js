var senha = 'Corinthians melhor time';
var pergunta = prompt('Digite a senha');
while(pergunta != senha) {
    console.log('Senha incorreta, tente novamente!')
    pergunta = prompt('Digite a senha novamente');
}

if (pergunta === senha) {
    console.log('Senha correta!');
}