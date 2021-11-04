const fs = require('fs');

fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    let db = JSON.parse(data);


    let outputBase = db.establishments.map(base => {





        return {
            "estabelecimento": base.name, "id": base.id,


            "produtos": base.productsId.map(productsId => {

                let product = db.products.find(p => p.id == productsId)
                let categorias = []
                product.categoriesId.forEach(categorie => {

                    let categoria = db.categories.find(c => c.id == categorie)

                   
                  
                    categorias.push(categoria)

                });

               

                product['categorias'] = categorias

                return { products: product }



            })
        }



    })

    let jsonOutput = []
   outputBase.forEach(base=>{


    
    
        base.produtos.forEach(produto=>{

         produto.products.categorias.forEach(categoria=>{

        
                let nomeEstabeleciment= base.estabelecimento;
                let nomeCategoria=categoria.name
                let nomeProduto = produto.name

                

                let obj={

                    [nomeEstabeleciment]:{[nomeCategoria]:[nomeProduto],price:produto.products.price/100}
                }


                jsonOutput.push(obj)


           })


        })



   })
    
   console.log(jsonOutput)
   
})



        
