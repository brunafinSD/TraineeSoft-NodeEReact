const loginApi = (username, password) => new Promise((resolve, reject) => {
    if ((username === "william" && password == "123456") ||
        (username === "victor" && password == "654321") ||
        (username === "karina" && password == "558877")) {
        resolve('login.ok.' + username);
    } else {
        reject('invalid.password.for.' + username);
    }
})

const loginsOk = [];
const loginsError = [];

const william = {
    username: "william",
    password: "123456",
};

const victor = {
    username: "victor",
    password: "548712",
};

const karina = {
    username: "karina",
    password: "558877",
};

/***
 *   Chamar a loginApi para os usuarios william, victor, karina
 *
 *   se o login der certo adicionar no array loginsOk o retorno da promisse
 *   se o login der errado adicionar no array loginsError o retorno da promisse
 *
 *   APÓS chamar a api para os 3 users fazer um console.log nos arrays
 *
 * ****/

loginApi(william.username, william.password).then((resultado)=>{loginsOk.push(resultado)}).catch((resultado)=>{loginsError.push(resultado)})
loginApi(victor.username, victor.password).then((resultado)=>{loginsOk.push(resultado)}).catch((resultado)=>{loginsError.push(resultado)})
loginApi(karina.username, karina.password).then((resultado)=>{loginsOk.push(resultado)}).catch((resultado)=>{loginsError.push(resultado)})


function exibir(){
    setTimeout(() => {
        console.log("logins OK: \n" + loginsOk)
        console.log("\nlogins Erro: \n" + loginsError)
    }, 3000);
    
}

exibir()