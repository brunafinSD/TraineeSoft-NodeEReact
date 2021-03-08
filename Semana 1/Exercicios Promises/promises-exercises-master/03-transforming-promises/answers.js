/**
 *
 * EXERCISE 1
 *
 * @param {*} promise
 * @param {*} transformer
 * @returns {Promise}
 */
function mapPromise(promise, transformer) {
  return new Promise((resolve, reject) => {
    /* IMPLEMENT ME!! */
    // promise.then(transformer).then(resolve);
    // promise.then(transformer).catch(reject);
    // promise.catch('erro na primeira promise');
    promise
      .then((data) => transformer(data))
      .catch((err) => {
        reject(err);
      })
      .then((data) => {
        resolve(data);
      });
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return numberPromise
    .then(data => {
      const number = Number(data)
      if (Number.isNaN(number)) {
      return Promise.reject(`Cannot convert '${data}' to a number!`);
      } else {
      return Math.pow(number, 2);
      }
    })
}

/**
 * EXERCISE 3
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise).catch(/* IMPLEMENT ME! */);
}

/**
 * EXERCISE 4
 *
 * @param {Promise} promise
 * @returns {Promise}
 */
function switcheroo(promise) {
  return promise.then(/* IMPLEMENT ME */);
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};
