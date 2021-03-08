/*3 - Criar uma lista vazia de "categoria de produtos" (com id, nome, status (se é ativo ou inativo)) e adicionar 5 categorias.
    - Na lista "categoria de produtos" adicionar para cada uma 3 produtos (com id, nome e preço)
    - Percorrer a lista e mostrar no console só o "nome dos produtos" da categoria "Eletrônicos".
    - Percorrer a lista e mostrar no console só o "nome das categorias" com produtos com preço menor que 10.
    - Percorrer a lista e mostrar no console só os produtos das categorias desativadas.
    - Percorrer a lista e adicionar na categoria a quantidade de produtos de cada categoria.
*/

//criando lista vazia de "categoria de produtos"
const categoriaDeProdutos = [];

//adicionando itens a lista com status + 5 categorias
categoriaDeProdutos.push({ id: 1, nome: 'Escritório', status: 'ativo' });
categoriaDeProdutos.push({ id: 2, nome: 'Limpeza', status: 'inativo' });
categoriaDeProdutos.push({ id: 3, nome: 'Decoração', status: 'ativo' });
categoriaDeProdutos.push({ id: 4, nome: 'Eletrônicos', status: 'ativo' });
categoriaDeProdutos.push({ id: 5, nome: 'Alimentos', status: 'inativo' });

//adicionar 3 produtos para cada categoria
categoriaDeProdutos[0].produto = [
    {id: 1, nome:'Caneta', preco: 1.50},
    {id: 2, nome:'Agenda', preco: 29.90},
    {id: 3, nome:'Post it', preco: 4.99}
];

categoriaDeProdutos[1].produto = [
    {id: 1, nome:'Sabão', preco: 2.50},
    {id: 2, nome:'Vassoura', preco: 11.50},
    {id: 3, nome:'Balde', preco: 6.99}
];

categoriaDeProdutos[2].produto = [
    {id: 1, nome:'Quadro', preco: 12.99},
    {id: 2, nome:'Nicho', preco: 12.99},
    {id: 3, nome:'Luminária', preco: 22.90},
    {id: 4, nome:'Spray', preco: 25.90},
    {id: 5, nome:'Adesivo', preco: 1.99}
];
categoriaDeProdutos[3].produto = [
    {id: 1, nome:'Mouse', preco: 19.90},
    {id: 2, nome:'Fone de Ouvido', preco: 29.90},
    {id: 3, nome:'Calculadora', preco: 15.00}
];
categoriaDeProdutos[4].produto = [
    {id: 1, nome:'Banana', preco: 1.50},
    {id: 2, nome:'Castanha', preco: 29.90},
    {id: 3, nome:'Queijo', preco: 15.00},
    {id: 4, nome:'Mortadela', preco: 5.00}
];

//-1 Percorrer a lista e mostrar no console só o "nome dos produtos" da categoria "Eletrônicos".
const somenteEletronico = categoriaDeProdutos.filter(categoria =>
    categoria.nome === 'Eletrônicos').map(categoria =>
    (categoria.produto).map(somenteNome => somenteNome.nome));

    console.log('Produtos da categoria Eletrônicos')    
    console.log(somenteEletronico)

//2- Percorrer a lista e mostrar no console só o "nome das categorias" com produtos com preço menor que 10.
const somenteMenorQue10 = categoriaDeProdutos.filter(prod => prod.produto).map(prod =>
    (prod.produto).filter(somenteMenor => somenteMenor.preco < 10 ).map(somenteNomeP => somenteNomeP.nome));

    console.log('\nProdutos com preço menor que 10')    
    console.log(somenteMenorQue10)
  
//3- Percorrer a lista e mostrar no console só os produtos das categorias desativadas.
const somenteDesativadas = categoriaDeProdutos.filter(categoria =>
    categoria.status === 'inativo').map(somenteNomeProd => somenteNomeProd.nome)
    console.log('\nProdutos com categoria desativada: ')
    console.log(somenteDesativadas)

//4- Percorrer a lista e adicionar na categoria a quantidade de produtos de cada categoria.
console.log('\nQuantidade de produtos por categoria ')
categoriaDeProdutos.map(categoria => {
    let quantidade = 0;
    categoria.produto.map(() => {
        quantidade+=1;
    });
    categoria.quantidade = quantidade;
})

console.log(categoriaDeProdutos);