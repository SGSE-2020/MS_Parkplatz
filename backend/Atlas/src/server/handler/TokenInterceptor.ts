import * as errors from "restify-errors";
import {civilOfficeGrpc} from "../../enviroment";
import * as grpc from "grpc";
import {UserServiceClient} from "../../proto/user_grpc_pb";
import {UserId, UserToken} from "../../proto/user_pb";

export async function tokenInterceptor(req: any, res: any, next: any) {
    const bearer = req.header('Authorization');
    if (bearer === undefined) {
        return next(new errors.UnauthorizedError('\'Authorization\' header not provided.'));
    }

    let bearerSplit = bearer.split(' ');
    if (bearerSplit.length !== 2) {
        return next(new errors.UnauthorizedError('\'Authorization\' header invalid format.'));
    }

    if (bearerSplit[0] !== 'Bearer') {
        return next(new errors.UnauthorizedError('\'Authorization\' header \'Bearer\' not provided.'));
    }
    try {
        const result = await gRpcWrapper(bearerSplit[1])
        req.userUid = (<UserId>result).getUid();
    } catch (error) {
        return next(error);
    }

    return next();
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

function gRpcVerify(tokenString, successCallback, errorCallback) {
    const userToken = new UserToken();
    userToken.setToken(tokenString)

    const userServiceClient = new UserServiceClient(civilOfficeGrpc, grpc.credentials.createInsecure());
    userServiceClient.verifyUser(userToken, function (err, response) {
        if (err !== null) {
            console.log(err);

            if (err.code == 14) {
                errorCallback(new errors.UnauthorizedError('Invalid \'Bearer\' token.'));
            } else if (err.code == 2) {
                errorCallback(new errors.InternalServerError('Backend Civil-Office not reachable.'));
            } else {
                errorCallback(new errors.InternalServerError(err));
            }
        } else {
            successCallback(response)
        }
    });
}
