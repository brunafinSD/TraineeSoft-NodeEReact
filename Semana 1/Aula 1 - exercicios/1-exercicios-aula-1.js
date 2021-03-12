/*1 - Criar uma lista vazia de "categoria de produtos" (com id, nome) e adicionar 5 categorias.
   - Percorrer a lista e mostrar no console só o nome da categoria.
   - Percorrer a lista e mostrar no console só a categoria "Eletrônicos".
 */

//criando lista vazia de "categoria de produtos"
const categoriaDeProdutos = [];

//adicionando itens a lista + 5 categorias
categoriaDeProdutos.push({ id: 1, nome: "Escritório" });
categoriaDeProdutos.push({ id: 2, nome: "Limpeza" });
categoriaDeProdutos.push({ id: 3, nome: "Decoração" });
categoriaDeProdutos.push({ id: 4, nome: "Eletrônicos" });
categoriaDeProdutos.push({ id: 5, nome: "Alimentos" });

//percorrendo a lista mostrando somente as categorias
categoriaDeProdutos.forEach(nome => console.log(nome.nome));

//percorrendo a lista e mostrando somente a categoria "Eletrônicos"
console.log("-----------------------------");

procuraCategoria = categoriaDeProdutos
  .filter(categoria => categoria.nome === "Eletrônicos")
  .map(somenteNome => somenteNome.nome);

console.log(procuraCategoria);
