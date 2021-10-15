function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  const counter = arrayDeNumeros.filter((num)=>numero===numeroEscolhido).lenght;
  
  if (counter = 0){
    return `Numero nao encontrado`
  } 
  
else{
  return `O número $(numeroEscolhido) aparece $(counter) x`; 
}
}