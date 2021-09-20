/*
3) Construa uma função que receba um número.

a) Se o número for  positivo, mostrar a informação de que ele é positivo.
b) Se o número for negativo, mostrar a informação de que ele é negativo.
*/

function positive(numero){
  if(numero < 0){
    return "O valor número é um Número negativo."
  }else if(numero === 0){
    return "O valor número é um Número neutro."
  }else {
    return "O valor número é um Número positivo."
  }
}
console.log(positive(-10));
console.log(positive(0));
console.log(positive(50));
