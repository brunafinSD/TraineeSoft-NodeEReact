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

async function main() {

    try {
        loginsOk.push(await loginApi(william.username, william.password))
    } catch (e) {
        loginsError.push(e);
    }

    try {
        loginsOk.push(await loginApi(victor.username, victor.password))
    } catch (e) {
        loginsError.push(e);
    }

    try {
        loginsOk.push(await loginApi(karina.username, karina.password))
    } catch (e) {
        loginsError.push(e);
    }

    console.log("Login Sucesso: " + loginsOk)
    console.log("Login Erro: " + loginsError)

}


main()

