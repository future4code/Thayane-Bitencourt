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


console.log("Boas vindas ao jogo de Blackjack")
if (confirm("Quer iniciar uma nova rodada?")) {
   //faz o sorteio das cartas
   const cartaUsuario = comprarCarta()
   const cartaComputador = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   const cartaComputador2 = comprarCarta()

   //vai receber as cartas e valores

   cartaUsuarioTexto = cartaUsuario.texto + cartaUsuario2.texto
   cartaComputadorTexto = cartaComputador.texto + cartaComputador2.texto
   cartaUsuarioValor = cartaUsuario.valor + cartaUsuario2.valor
   cartaComputadorTexto = cartaComputador.valor + cartaComputador2.valor

   //imprimi o que esta pedindo, o nome do jogador, as cartas e a pontuação

   console.log("Usuário- cartas- ", cartaUsuarioTexto, ", pontuação - ", cartaUsuarioValor)
   console.log("Computador- cartas- ", cartaComputadorTexto, ", pontuação - ", cartaComputadorValor)

   //resultado do jogo

   if (cartaUsuarioTotal > cartaComputadorTotal) {
      console.log("O Usuário ganhou")
   }
   if (cartaUsuarioTotal = cartaComputadorTotal) {
      console.log("Empate!!")
   }
   if (cartaUsuarioTotal < cartaComputadorTotal) {
      console.log("O computador ganhou!")
   }

}
// caso ele nao queira continuar a jogar
else {
   console.log("O jogo acabou!")
}

