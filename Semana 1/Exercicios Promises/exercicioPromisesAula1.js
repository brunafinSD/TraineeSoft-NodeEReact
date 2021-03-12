//5 - Corrigir as duas últimas linhas para mostrar a lista corretamente usando callback
///////////////////////
var list = [];
const databaseInsert = function (data, callback) {
  setTimeout(function () {
    list.push(data);
    if (callback) {
      callback();
    }
  }, 0);
};
///////////////////////
databaseInsert({ meuobjeto: "a" }, () => {
  console.log("Com Callback / lista:\n ", list);
});

//6 - Refatorar para promise

var list2 = [];
const databaseInsert2 = function (data, callback) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(function () {
      list2.push(data);
      if (callback) {
        resolve(callback());
      }
    }, 0);
  });
  return promise;
};
///////////////////////
databaseInsert2({ meuobjeto: "a" }, () => {
  console.log("\nCom Promises / lista: \n ", list2);
}).then();

//7 - Refatorar para async / await
var list3 = [];
const databaseInsert3 = async function (data, callback) {
  await setTimeout(function () {
    list3.push(data);
    if (callback) {
      callback();
    }
  }, 0);
};
///////////////////////
databaseInsert3({ meuobjeto: "a" }, () => {
  console.log("\nCom Async Await / lista: \n ", list3);
}).then();
