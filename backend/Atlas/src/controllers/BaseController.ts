import {Request, Response} from 'restify';
import {RestServer} from "../server/RestServer";

export abstract class BaseController {

    protected req: Request;
    protected res: Response;

    protected abstract executeImpl(): Promise<void | any>;

    public abstract initialize(httpServer: RestServer): void;

    public execute(req: Request, res: Response): void {
        this.req = req;
        this.res = res;

        this.executeImpl();
    }

    public static jsonResponse(res: Response, code: number, message: string) {
        return res.json(code, message)
    }

    public ok<T>(res: Response, dto?: T) {
        if (!!dto) {
            return res.json(200, dto);
        } else {
            return res.send(200);
        }
    }

    public created(res: Response) {
        return res.send(201);
    }

    public clientError(message?: string) {
        return BaseController.jsonResponse(this.res, 400, message ? message : 'Unauthorized');
    }

    public unauthorized(message?: string) {
        return BaseController.jsonResponse(this.res, 401, message ? message : 'Unauthorized');
    }

    public paymentRequired(message?: string) {
        return BaseController.jsonResponse(this.res, 402, message ? message : 'Payment required');
    }

    public forbidden(message?: string) {
        return BaseController.jsonResponse(this.res, 403, message ? message : 'Forbidden');
    }

    public notFound(message?: string) {
        return BaseController.jsonResponse(this.res, 404, message ? message : 'Not found');
    }

    public conflict(message?: string) {
        return BaseController.jsonResponse(this.res, 409, message ? message : 'Conflict');
    }

    public tooMany(message?: string) {
        return BaseController.jsonResponse(this.res, 429, message ? message : 'Too many requests');
    }

    public todo() {
        return BaseController.jsonResponse(this.res, 400, 'TODO');
    }

    public fail(error: Error | string) {
        console.log(error);
        return this.res.json(500, {
            message: error.toString()
        })
    }
}
