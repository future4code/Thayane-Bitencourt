//EXERCICIO DE INTERPRETACAO

//PRIMEIRA QUESTAO
//A- VAI SER IMPRESSO TODO CONTEUDO DA ARRAY, NOME E APELIDO DELAS

//SEGUNDA QUESTAO
//A- NESSE CASO SERA IMPRESSO APENAS OS NOMES DA ARRAY

//TERCEIRA QUESTAO
//A- VAI IMPRIMIR QUEM TEM O APELIDO DIFERENTE DE CHIJO.


//ESCRITA DE CÓDIGO

//primeira questao

//letra a
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 const novoArrayB = pets.map((item, array) => {
    return item.nome
 })
 
 console.log(novoArrayB)

 // letra b
 const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
const novoArrayC = pets.filter((item, array) => {
   return item.raca == "Salsicha"
})

console.log(novoArrayC)

//letra c
 
 


