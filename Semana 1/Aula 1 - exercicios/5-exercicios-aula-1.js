//5 - Corrigir as duas últimas linhas para mostrar a lista corretamente

var list = []
const databaseInsert = function (data, callback) {​​​​​​​
    setTimeout(function () {​​​​​​​
        list.push(data);
        if (callback) {​​​​​​​
            callback();
        }​​​​​​​
    }​​​​​​​,);
}​​​​​​​;
///////////////////////
databaseInsert("a"​​​​​​​, function(){console.log(list)});
