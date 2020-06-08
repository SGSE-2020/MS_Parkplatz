import {BaseController} from "../BaseController";
import {RestServer} from "../../server/RestServer";
import {UserService} from "../../services/grpc/UserService";
import {User, UserId} from "../../proto/user_pb";
import {UserServiceClient} from "../../proto/user_grpc_pb";
import {civilOfficeGrpc} from "../../enviroment";
import * as grpc from "grpc";
import * as errors from "restify-errors";
import {UserDTO} from "../../models/dto/UserDTO";

export class GetUserInformation extends BaseController {
    private userService: UserService;

    public initialize(httpServer: RestServer): void {
        httpServer.get('/users', this.execute.bind(this));
    }

    public constructor(userService: UserService) {
        super();
        this.userService = userService;
    }

    protected async executeImpl(): Promise<any> {
        try {
            // @ts-ignore
            const userUid = this.req.userUid;
            const result = await gRpcWrapper(userUid)
            let user = (<User>result)
            let userDTO: UserDTO = {
                firstName: user.getFirstname(),
                lastName: user.getLastname(),
                username: user.getNickname()
            }

            return await this.ok(this.res, userDTO);
        } catch (err) {
            return this.fail(err);
        }
    }
}

function gRpcWrapper(query) {
    return new Promise((resolve, reject) => {
        gRpcVerify(query, (successResponse) => {
            resolve(successResponse);
        }, (errorResponse) => {
            reject(errorResponse)
        });
    });
}

function gRpcVerify(uid, successCallback, errorCallback) {
    const userId = new UserId();
    userId.setUid(uid)

    const userServiceClient = new UserServiceClient(civilOfficeGrpc, grpc.credentials.createInsecure());
    userServiceClient.getUser(userId, function (err, response) {
        if (err !== null) {
            console.log(err);
            errorCallback(new errors.InternalServerError(err));
            // if (err.code == 2) {
            //     errorCallback(new errors.InternalServerError('Backend Civil-Office not reachable.'));
            // } else {
            //     errorCallback(new errors.InternalServerError(err));
            // }
        } else {
            successCallback(response)
        }
    });
}
