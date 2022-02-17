let request = require('request');

/**
 *
 * @param conta
 * @param senha
 * @param body
 * @return {Promise}
 */
module.exports = (conta, senha, body) => {

    return new Promise((resolve, reject) => {

        try{

            let param = {};

            if (!body.sendSmsRequest){
                param.sendSmsRequest = body;
            }

            let json = JSON.stringify(param);

            let option = {
                method: 'POST',
                url: 'https://api-rest.zenvia.com/services/send-sms',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic '+ require('./index').getBase64(conta, senha),
                    'Accept': 'application/json'
                },
                body: json
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
                return resolve( JSON.parse(body));
            });

        } catch (err) {
            return fail(err);
        }

    });


};
