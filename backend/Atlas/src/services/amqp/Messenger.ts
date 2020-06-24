import * as Amqp from "amqp-ts";

export class Messenger {
    public async send(type: string, message: any) {
        const connection = new Amqp.Connection("amqp://ms-rabbitmq:5672");
        const exchange = connection.declareExchange("parkplatz");

        connection.completeConfiguration().then(() => {
            const msg = new Amqp.Message(message, {
                type: type,
                appId: 'parkplatz'
            });
            exchange.send(msg);
        });
    }
}
