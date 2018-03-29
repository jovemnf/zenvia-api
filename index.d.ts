declare module "zenvia-api" {
    export function sendOne(conta: string, senha: string, body: object): Promise<object>;
    export function getStatus(conta: string, senha: string, id: any): Promise<object>;
    export function list(conta: string, senha: string): Promise<IReceivedResponse>;
}

declare interface ISendResponse {
    "sendSmsResponse": {
        "statusCode": string;
        "statusDescription": string;
        "detailCode": string
        "detailDescription": string;
    }
}

declare interface IReceivedMessages {
    "id": number
    "dateReceived": any;
    "mobile": string;
    "body": string;
    "shortcode": string;
    "mobileOperatorName": string;
    "mtId": string;
}

declare interface IReceivedResponse {
    "receivedResponse": {
        "statusCode": string;
        "statusDescription": string;
        "detailCode": string;
        "detailDescription": string;
        "receivedMessages": IReceivedMessages[] | null;
    }
}
