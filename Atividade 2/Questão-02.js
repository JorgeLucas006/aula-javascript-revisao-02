/**
2) Criar um bloco de código, onde deverá ter três variáveis do tipo inteiro: a, b, c. Verifique se:

a) Se todos os lados são iguais, o triângulo será equilátero;
b) Se todos os lados forem diferentes, será escaleno;
c) Se nenhuma das duas condições anteriores for atendida, será isósceles.
*/

function triangulo(lado1, lado2, lado3){
  if(lado1 === lado2 && lado2 === lado3){
    return "O triângulo é equilátero"
  }else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3){
    return "O triângulo é escaleno"
  }else {
    return "O triângulo é isósceles"
  }
}

console.log(triangulo(3,4,3));
console.log(triangulo(1,2,3));
console.log(triangulo(5,5,5));
