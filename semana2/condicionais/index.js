//**exercicio de interpretacao *//
//primeira questao
//a)ele vai verificar se o número é divisivel por dois, deixando resto 0,se for 
//ele imprime a mensangem:passou no teste, caso contrário
//nao passou no teste
//b)numeros divisiveis por dois, ou seja pares
//c)numeros nao divisiveis por dois, ou seja impar

//**segunda questao**//
 //a)serve para dizer o preço de algumas frutas
 //b)O preço da fruta Maçã é R$2,25
 //c)Ia ser informado o valor de R$5,50

//terceira questao//
//a)solicitando um numero ao usuario
//b)Se o numero fosse 10, a mensagem exibida seria: "Esse numero passou no teste. Essa mensagem é secreta"
//se fosse -10, nada
//c)Sim, pois não tem condição caso numero seja negativo

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)