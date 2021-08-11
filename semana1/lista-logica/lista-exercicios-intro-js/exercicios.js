// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
 function soma(num1, num2) {
// receber os números
   prompt("Informe um numero", num1)
  prompt("Informe outro número", num2)
   return num1 + num2

 }

// EXERCÍCIO 0B
 function imprimeMensagem() {
//vai imprimir mensagem no console
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
 }

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
 function calculaAreaRetangulo(base,altura) {
   const altura = prompt("Informe a altura")
   const base = prompt("Informe a base")
   calculaAreaRetangulo = altura * base
   console.log(calculaAreaRetangulo)
 }

// EXERCÍCIO 02
 function imprimeIdade() {
   const anoAtual = prompt("Informe ano atual")
   const anoNascimento = prompt("Informe o ano de nascimento")
   imprimeIdade = anoAtual - anoNascimento
  console.log(imprimeIdade)
  

}

// EXERCÍCIO 03
 function calculaIMC(peso, altura) {
   const valorAltura = altura * altura
   calculaIMC =  peso /valorAltura
   console.log(calculaIMC)
   }

// EXERCÍCIO 04
 function imprimeInformacoesUsuario() {
 const nome = prompt("Qual o seu nome?")
 const idade = prompt("Qual a sua idade?")
 const email = prompt("Qual seu email?")
 imprimeInformacoesUsuario(`Meu nome é:` ${nome}, `tenho`${idade}`anos,e o meu email é :`${email})
 }

// EXERCÍCIO 05
 function imprimeTresCoresFavoritas (cor1,cor2,cor3){
 const cor1 =prompt("Qual sua cor favorita 1? ")
 const cor2 =prompt("Qual sua cor favorita 2? ")
 const cor3 =prompt("Qual sua cor favorita 3? ")
 console.log(imprimeCoresFavoritas())

 }

// EXERCÍCIO 06
 function retornaStringEmMaiuscula(string) {
 const string = prompt("diga uma coisa qualquer")
 console.log(retornaStringEmMaiuscula.toUpperCase())
 }

// EXERCÍCIO 07
 function calculaIngressosEspetaculo(custo, valorIngresso) {
   calculaIngressosEspetaculo= custo/valorIngresso
  console.log("O preço do ingresso precisa ser" + calculaIngressos())
 )

 }

// EXERCÍCIO 08
 function checaStringsMesmoTamanho(string1, string2) {
  console.log(checaStringsMesmoTamanho ((string1.lenght)===(string2.lenght))

 }

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
   console.log(array[0])
 }

// EXERCÍCIO 10
 function retornaUltimoElemento(array) {
   const arrayPrimeiro = array[0]
   const ultimoArray = [array.lenght -1]
   console.log(arrayPrimeiro,ultimoArray)

 }

// EXERCÍCIO 11
 function trocaPrimeiroEUltimo(array) {
   const arrayPrimeiro = array[0]
   const ultimoArray = [array.lenght -1]
   ultimoArray<= arrayPrimeiro

 }

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase (string1, string2) {
  (checaIgualdadeDesconsiderandoCase.toUpperCase());
  
  return string1>=string2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = prompt(Number("Informe o ano atual")
  var anoNascimento = prompt(Number("Informe o ano de nascimento")
  const anoEmissao = prompt(Number("Informe o ano de emissao da carteira")
 
  checaRenovacaoRG = anoAtual-anoNascimento{
 if(resultado<=20){
   
 }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}