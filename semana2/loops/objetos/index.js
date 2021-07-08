//*Exercicio de interpretação*//
//********************************//
//Primeira questão//

// a) Matheus Machtergaele//
// Virginia Cavendish//
// canal: "Globo", horario: "14h"//

//Segunda questao//
//a)(nome:"Juca",  idade:3 ; raça"SRD")// 
//(nome:"Juba",  idade:3 ; raça"SRD")//
//(nome:"Jubo",  idade:3 ; raça"SRD")//
//b) a sintaxe de espalhamento faz uma copia de objeto do que vem depois, pode ser objeto ou array//

//Terceira questao//
//a) false //
//      undefined//
//b)a funcao minhaFuncao recebe um objeto
// e o nome de uma propriedade que o objeto ´
//possua ou nao e retorna o valor dela//
//o primeiro console log solicitou a propriedade
//existente e a segunda retornou undefined pois nao
//possui a propriedade declarada//

//Exercicio escrita de codigo//
//primeira questao//
//a)//
//entrada//
const pessoa = {
    nome: "Thayane ",
    apelidos: [" Thay ", " Tatay", " Tata"]
};
//saida//
console.log("Eu sou $(pessoa,nome), mas pode me chamar de: $(pessoa,apelidos[0]),$(pessoa,apelidos[1]) ou $(pessoa,apelidos[2])")
