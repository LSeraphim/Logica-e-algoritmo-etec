var ano = parseInt(prompt("Digite seu ano de nascimento"))
var anoAtual = parseInt(prompt("Informe o ano atual"))
var idadeAno = anoAtual - ano
var idadeMeses = idadeAno*12
var idadeSemanas = idadeAno*52
var idadeDias = idadeAno*365

alert(`Sua idade em anos é ${idadeAno} em meses ${idadeMeses} em semanas ${idadeSemanas} em dias ${idadeDias}`)
