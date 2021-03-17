// //5 - Corrigir as duas últimas linhas para mostrar a lista corretamente usando callback
// ///////////////////////
var list = [];
const databaseInsert = function (data, callback) {
  setTimeout(function () {
    list.push(data);
    if (callback) {
      callback();
    }
  }, 0);
};

databaseInsert({ meuobjeto: "a" }, () => {
  console.log("\nCom Callback / lista:\n ", list);
});
///////////////////////

//6 - Refatorar para promise

var list2 = [];
const databaseInsert2 = function (data) {
  const promise = new Promise((resolve, reject) => {
    list2.push(data);
    resolve(list2);
  });
  return promise;
};

databaseInsert2({ meuobjeto: "a" }).then((resultado) =>
  console.log("\nCom Promise / lista:\n ", resultado)
);
///////////////////////

// //7 - Refatorar para async / await
var list3 = [];


const databaseInsert3 = function (data) {
  const promise = new Promise((resolve, reject) => {
    list3.push(data);
    resolve(list3);
  });
  return promise;
};

async function main(data){
  const valor = await databaseInsert3(data);
  console.log("\nCom Async / lista:\n ", valor)
}
main({ meuobjeto: "a" })


// databaseInsert3({ meuobjeto: "a" }).then((resultado) =>
//   console.log("\nCom Async / lista:\n ", resultado)
// );

///////////////////////
