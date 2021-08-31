function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 qtdeCarrosVendidos= qtdeCarrosVendidos *100
 valorTotal= valorTotalVendas*0,05
 
 calculaSalario= qtdeCarrosVendidos+valorTotal+2000
 console.log(calculaSalario())
 
}


//ou:
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const salario = 2000 + qtdeCarrosVendidos*100 + valorTotalVendas*0.05
  return salario
}