/*
Thiago Drumond Gomes tem 31 anos, pesa 74 kg
tem 1.8 de altura e seu IMC é de 22.839506172839506

*/
const nome = 'Thiago Drumond'
const sobrenome = 'Gomes'
const idade = 31
const peso = 74
const altura = 1.80
let imc  ;
let anoNascimento;

imc = peso / (altura * altura)
anoNascimento = 2023 - idade;

//templete string

console.log(`${nome} ${sobrenome} 
tem ${idade} anos, nasceu em ${anoNascimento} pesa ${peso} kg` )
console.log(`tem ${altura} de altura e seu imc é de ${imc}`)