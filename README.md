# zenvia-api

Um módulo para envio de SMS com a empresa Zenvia

## Install

    npm install zenvia-api --save
    
## Usage

### Exemplo de Envio de SMS

```js

let zenvia = require("zenvia-api").send_sms;


let body = {
        "from": "Remetente",
        "to": "5522998430601",
        "msg": "Mensagem de teste",
        "callbackOption": "NONE",
        "id": "003",
        "aggregateId": "1111"
    };

zenvia('conta','senha', body)
	.then((response) => console.log(response))
	.catch((err) => console.log(err));

```

## License

The [MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2017 Wallace Silva
