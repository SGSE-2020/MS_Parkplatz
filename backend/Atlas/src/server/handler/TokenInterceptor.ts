// import {UserServiceClient} from "../../proto/user_grpc_pb";
// import * as grpc from "grpc";
// import {UserToken} from "../../proto/user_pb";
import * as errors from "restify-errors";

export function tokenInterceptor(req: any, res: any, next: any) {
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

    // const userToken = new UserToken();
    // userToken.setToken(bearerSplit[1])

    //FIXME this is here for test purposes only
    // const userServiceClient = new UserServiceClient('localhost:9000', grpc.credentials.createInsecure());
    // userServiceClient.verifyUser(userToken, function (err, response) {
    //     if (err.code.valueOf() === 14) {
    //         console.log('ERROR: ' + err.message);
    //         console.log('ERROR: gRPC user.proto backend not available');
    //     } else {
    //         console.log('uid:', response.getUid());
    //     }
    // });

    return next();
}
