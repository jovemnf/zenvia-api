let request = require('request');

/**
 *
 * @param conta
 * @param senha
 * @return {Promise}
 */
module.exports = (conta, senha) => {

    return new Promise((ok, fail) => {

        try{

            let option = {
                method: 'POST',
                url: 'https://api-rest.zenvia360.com.br/services/received/list',
                headers: {
                    'Authorization': 'Basic '+ require('./index').getBase64(conta, senha),
                    'Accept': 'application/json'
                }
            };

            request(option, (error, response, body) => {
                if(error){
                    return fail(error);
                }
                return ok(body);
            });

        } catch (err) {
            return fail(err);
        }

    });


};