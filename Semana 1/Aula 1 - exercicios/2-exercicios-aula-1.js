/*2 - Criar uma lista vazia de "categoria de produtos"
(com id, nome, status (se é ativo ou inativo)) e adicionar 5 categorias.
    - Criar uma lista vazia de "produtos" (com id, nome e preço) e adicionar 3 produtos
    - Percorrer a lista e mostrar no console só o "nome dos produtos" da categoria "Eletrônicos".
    - Percorrer a lista e mostrar no console só o "nome das categorias" com produtos com preço menor que 10.
    - Percorrer a lista e mostrar no console só os produtos das categorias desativadas.
    - Percorrer a lista e adicionar na categoria a quantidade de produtos de cada categoria.

*/
//criando lista vazia de "categoria de produtos"
const categoriaDeProdutos = [];

//adicionando itens a lista com status + 5 categorias
categoriaDeProdutos.push({ id: 1, nome: "Escritório", status: "ativo" });
categoriaDeProdutos.push({ id: 2, nome: "Limpeza", status: "inativo" });
categoriaDeProdutos.push({ id: 3, nome: "Decoração", status: "ativo" });
categoriaDeProdutos.push({ id: 4, nome: "Eletrônicos", status: "ativo" });
categoriaDeProdutos.push({ id: 5, nome: "Alimentos", status: "inativo" });

//criando lista vazia de "produtos"
const produtos = [];

//adicionando produtos
produtos.push({ id: 1, nome: "Caneta", preco: 1.5, categoria: "Escritório" });
produtos.push({ id: 2, nome: "Sabão", preco: 4.0, categoria: "Limpeza" });
produtos.push({ id: 3, nome: "Fone de Ouvido", preco: 50.0, categoria: "Eletrônicos",});
produtos.push({ id: 4, nome: "Mouse", preco: 50.0, categoria: "Eletrônicos" });

//1- Percorrer a lista e mostrar no console só o "nome dos produtos" da categoria "Eletrônicos".
console.log("----exercicio 1----");
const procuraProdutoEletronico = produtos.filter(produto => produto.categoria === "Eletrônicos").map(produto => produto.nome);

console.log(procuraProdutoEletronico);

//2- Percorrer a lista e mostrar no console só o "nome das categorias" com produtos com preço menor que 10
console.log("----exercicio 2----");
const procuraPrecoBaixo = produtos.filter(produto => produto.preco < 10).map(produto => produto.nome);

console.log(procuraPrecoBaixo);

//3- Percorrer a lista e mostrar no console só os produtos das categorias desativadas.
console.log("----exercicio 3----");
const procuraCategoriaDesativada = categoriaDeProdutos.map(categoria => {
  if (categoria.status === "inativo") {
    catInativa = categoria.nome;
    produtos.forEach(produto => {
      if (produto.categoria === catInativa) {
        console.log(produto.nome);
      }
    });
  }
});


//4- Percorrer a lista e adicionar na categoria a quantidade de produtos de cada categoria
console.log("----exercicio 4----");
const tudoJunto = categoriaDeProdutos.map((categoria) => {
    const prods = produtos.filter((p) => p.categoria === categoria.nome); // filter no produto da categoria
    return { ...categoria, produtos: prods }; // categoria + produto
});

const numProdutosXCategoria = tudoJunto.map((categoria) => ({
  id: categoria.id,
  nome: categoria.nome,
  numProdutos: categoria.produtos.length,
}));

console.table(numProdutosXCategoria);

// categoriaDeProdutos.filter
// categoriaDeProdutos.produtos.filter
