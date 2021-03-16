const loginApi = (username, password) => new Promise((resolve, reject) => {
    // if (username === "william") {
    //     reject('William foi banido'); // Se for o william dispara erro e cai no catch
    // }
    if ((username === "william" && password == "123456") ||
        (username === "victor" && password == "654321") ||
        (username === "karina" && password == "558877")) {

        // resolve({
        //     status: 'login.ok.',
        //     username,
        // });

        // resolve('login.ok.' + username);
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

async function qualquerNome() {
    // const promiseLoginWill = loginApi(william.username, william.password);

    // promiseLoginWill.then(resultado => fazAlgo(resultado)) // define o que vai ser feito quando a promise for resolvida
    // promiseLoginWill.catch(erro => fazAlgoComErro(erro)) // define o que vai ser feito quando a promise for rejeitada


    try {
        // await loginApi(william.username, william.password) // chama loginApi aguardando só resolve 
        const resultadoWill = await loginApi(william.username, william.password); // chama loginApi aguardando resolve e o resultado
        // loginsOk.push(resultadoWill.username); //quando resolve um objeto
        loginsOk.push(resultadoWill);

        // Se der erro no login do william o código abaixo não roda
        const resultadoVictor = await loginApi(victor.username, victor.password);
        loginsOk.push(resultadoVictor.username);//quando resolve um objeto
        loginsOk.push(resultadoVictor);
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


qualquerNome()

