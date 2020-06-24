import {UserToken} from "../../proto/user_pb";
import {UserServiceClient} from "../../proto/user_grpc_pb";
import {civilOfficeGrpc} from "../../enviroment";
import * as errors from "restify-errors";
import * as grpc from "grpc";

export class VerificationService {

    public gRpcWrapper(query) {
        return new Promise((resolve, reject) => {
            this.gRpcVerify(query, (successResponse) => {
                resolve(successResponse);
            }, (errorResponse) => {
                reject(errorResponse)
            });
        });
    }

    private gRpcVerify(tokenString, successCallback, errorCallback) {
        const userToken = new UserToken();
        userToken.setToken(tokenString)

        const userServiceClient = new UserServiceClient(civilOfficeGrpc, grpc.credentials.createInsecure());
        userServiceClient.verifyUser(userToken, function (err, response) {
            if (err !== null) {
                console.log(err);
                errorCallback(new errors.InternalServerError('tokenInterceptor:' + err));
            } else {
                successCallback(response.getUid())
            }
        });
    }
}

export const verificationService = new VerificationService();
