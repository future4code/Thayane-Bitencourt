/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log prompt("Boas vindas ao jogo de Blackjack")
const confirmaSeContinua=(){
   const querJogar = confirm(prompt("Quer iniciar uma nova rodada?"))
 if(querJogar==="ok") {
 returne true
  }
 else {
console.log("O jogo acabou")
   returne false
  }  
}
     confirmaSeContinua()
