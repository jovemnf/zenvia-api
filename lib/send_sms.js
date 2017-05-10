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

            if (!json.sendSmsRequest){
                param.sendSmsRequest = json;
            }

            let body = JSON.stringify(body);

            let option = {
                method: 'POST',
                url: 'https://api-rest.zenvia360.com.br/services/send-sms',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic '+ require('./index').getBase64(conta, senha),
                    'Accept': 'application/json'
                },
                body: body
            };

            request(option, (error, response, body) => {
                if(err){
                    return fail(error);
                }
                return ok(body);
            });

        } catch (e) {
            return fail(err);
        }

    });


};