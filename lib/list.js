let request = require('request');

/**
 *
 * @param conta
 * @param senha
 * @return {Promise}
 */
module.exports = (conta, senha) => {

    return new Promise((resolve, reject) => {

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
                    return reject(error);
                }
                if (response.statusCode === 401) {
                    return resolve({
                        "sendSmsResponse": {
                            "statusCode": "10",
                            "statusDescription": "Nok",
                            "detailCode": "900",
                            "detailDescription": "Authentication error"
                        }
                    });
                }
                return response(JSON.parse(body));
            });

        } catch (err) {
            return fail(err);
        }

    });


};