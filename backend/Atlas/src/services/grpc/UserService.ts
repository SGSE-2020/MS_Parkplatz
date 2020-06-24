import {UserId} from "../../proto/user_pb";
import {UserServiceClient} from "../../proto/user_grpc_pb";
import {civilOfficeGrpc} from "../../enviroment";
import * as errors from "restify-errors";
import * as grpc from "grpc";

export class UserService{

    public gRpcWrapper(query) {
        return new Promise((resolve, reject) => {
            this.gRpcVerify(query, (successResponse) => {
                resolve(successResponse);
            }, (errorResponse) => {
                reject(errorResponse)
            });
        });
    }

    public gRpcVerify(uid, successCallback, errorCallback) {
        const userId = new UserId();
        userId.setUid(uid)

        const userServiceClient = new UserServiceClient(civilOfficeGrpc, grpc.credentials.createInsecure());
        userServiceClient.getUser(userId, function (err, response) {
            if (err !== null) {
                console.log(err);
                errorCallback(new errors.InternalServerError('GetUserInformation:' + err));
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
}

export const userService = new UserService();
