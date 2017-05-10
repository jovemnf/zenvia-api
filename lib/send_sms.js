let request = require('request');

/**
 *
 * @param conta
 * @param senha
 * @param body
 * @return {Promise}
 */
module.exports = (conta, senha, body) => {

    return new Promise((ok, fail) => {

        try{

            let param = {};

            if (!body.sendSmsRequest){
                param.sendSmsRequest = body;
            }

            let json = JSON.stringify(param);

            let option = {
                method: 'POST',
                url: 'https://api-rest.zenvia360.com.br/services/send-sms',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic '+ require('./index').getBase64(conta, senha),
                    'Accept': 'application/json'
                },
                body: json
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