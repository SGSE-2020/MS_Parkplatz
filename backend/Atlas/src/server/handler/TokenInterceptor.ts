import * as errors from "restify-errors";
import {verificationService} from "../../services/grpc/VerificationService";

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
        req.userUid = await verificationService.gRpcWrapper(bearerSplit[1]);
    } catch (error) {
        return next(error);
    }

    return next();
}

