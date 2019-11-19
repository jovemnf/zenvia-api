# zenvia-api

Um módulo para envio de SMS com a empresa Zenvia

## Install

    npm install zenvia-api --save
    
## Como usar

### Envio de SMS

```js

let zenvia = require("zenvia-api").sendOne;


let body = {
        "from": "Remetente",
        "to": "5521998430601",
        "msg": "Mensagem de teste",
        "callbackOption": "NONE",
        "id": 1,
        "aggregateId": "1111"
    };

zenvia('conta','senha', body)
	.then((response) => console.log(response))
	.catch((err) => console.log(err));

```

#### Respostas 

No caso de sucesso retornará um json como abaixo.

```json
{
  "sendSmsResponse": {
    "statusCode": "00",
    "statusDescription": "Ok",
    "detailCode": "000",
    "detailDescription": "Message Sent"
  }
}

```
No caso de erro em algum dado retornará o json abaixo

```json
{
  "sendSmsResponse": {
    "statusCode": "99",
    "statusDescription": "Nok",
    "detailCode": "999",
    "detailDescription": "Invalid User"
  }
}

```

Caso a conta ou a senha estejam errados a seguinte mensagem será retornada

```json
{
    "sendSmsResponse": {
        "statusCode": "10",
        "statusDescription": "Nok",
        "detailCode": "900",
        "detailDescription": "Authentication error"
    }
}
```

### Consulta de status

```js

let zenvia = require("zenvia-api").getStatus;

zenvia('conta','senha', 1)
	.then((response) => console.log(response))
	.catch((err) => console.log(err));

```

#### Resposta

```json
{
  "getSmsStatusResp" : {
    "id" : "1",
    "received" : "2017-05-10T20:05:11",
    "shortcode" : "27900",
    "mobileOperatorName" : null,
    "statusCode" : "03",
    "statusDescription" : "Delivered",
    "detailCode" : "120",
    "detailDescription" : "Message received by mobile"
  }
}
```

### Buscando retornos de SMS

```js

let zenvia = require("zenvia-api").list;

zenvia('conta','senha')
	.then((response) => console.log(response))
	.catch((err) => console.log(err));

```

#### Resposta

```json
{
  "receivedResponse": {
    "statusCode": "00",
    "statusDescription": "Ok",
    "detailCode": "300",
    "detailDescription": "Received messages found",
    "receivedMessages": [
      {
        "id": 1,
        "dateReceived": "2017-04-22T14:49:36",
        "mobile": "5521998430601",
        "body": "Obrigado por me avisar",
        "shortcode": "30133",
        "mobileOperatorName": "Vivo",
        "mtId": "hs863223748"
      }
    ]
  }
}
```

## License

The [MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2017 Wallace Silva
