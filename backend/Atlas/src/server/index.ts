import {RestServer} from './RestServer';
import {RequestHandler, Server as RestifyServer} from 'restify';
import * as restify from 'restify';
import {CONTROLLERS} from "../controllers";
import {isProduction} from "../config";
import {tokenInterceptor} from "./handler/TokenInterceptor";
import * as corsMiddleware from "restify-cors-middleware";

const cors = corsMiddleware({
    origins: ['*'],
    allowHeaders: ["Authorization"],
    exposeHeaders: ["Authorization"]
})

export class Server implements RestServer {
    private restify: RestifyServer;

    public get(url: string, requestHandler: RequestHandler): void {
        this.addRoute('get', url, requestHandler);
    }

    public post(url: string, requestHandler: RequestHandler): void {
        this.addRoute('post', url, requestHandler);
    }

    public delete(url: string, requestHandler: RequestHandler): void {
        this.addRoute('del', url, requestHandler);
    }

    public put(url: string, requestHandler: RequestHandler): void {
        this.addRoute('put', url, requestHandler);
    }

    private addRoute(method: 'get' | 'post' | 'put' | 'del', url: string, requestHandler: RequestHandler): void {
        this.restify[method](url, requestHandler);
        console.log(`Added route ${method.toUpperCase()} ${url}`);
    }

    public start(port: number): void {
        this.restify = restify.createServer();

        this.restify.use(restify.plugins.queryParser());
        this.restify.use(restify.plugins.bodyParser());
        this.restify.use(tokenInterceptor);

        if (isProduction === false) {
            console.log('SERVER: REST enabled CORS');
            this.restify.pre(cors.preflight);
            this.restify.use(cors.actual);
        }

        this.addControllers();

        this.restify.listen(port, () => console.log(`Server is up & running on port ${port}`));
    }

    private addControllers(): void {
        CONTROLLERS.forEach(controller => controller.initialize(this));
    }
}
