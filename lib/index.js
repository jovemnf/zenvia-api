/**
 *
 * @param conta
 * @param senha
 * @return {string}
 */
exports.getBase64 = (conta, senha) => {
    return new Buffer(conta +":"+ senha).toString('base64');
};