import {bankGrpc} from "../../enviroment";
import * as errors from "restify-errors";
import * as grpc from "grpc";
import {AccountServiceClient} from "../../proto/account_grpc_pb";
import {Transfer, UserId} from "../../proto/account_pb";

export class PaymentService {

    public gRpcWrapper(query, amount) {
        return new Promise((resolve, reject) => {
            this.gRpcPay(query, amount, (successResponse) => {
                resolve(successResponse);
            }, (errorResponse) => {
                reject(errorResponse)
            });
        });
    }

    public gRpcPay(uid, amount, successCallback, errorCallback) {
        const userId = new UserId();
        userId.setUserId(uid);

        const bankService = new AccountServiceClient(bankGrpc, grpc.credentials.createInsecure())
        bankService.getIban(userId, function (err1, response1) {
            const destUserId = new UserId();
            userId.setUserId('6TbzcPavrSNdq1W1qAKqyfhhvxB2');
            bankService.getIban(destUserId, function (err2, response2) {
                const transfer = new Transfer();
                transfer.setAmount(amount);
                transfer.setIban(response1.getIban());
                transfer.setDestIban(response2.getIban())
                transfer.setPurpose("Parkplatz Abbuchung");
                bankService.transfer(transfer, function (err3, response3) {
                    errorCallback(new errors.InternalServerError('GetBankIBAN:' + err3));
                    successCallback(response3)
                })
            });

            errorCallback(new errors.InternalServerError('GetBankIBAN:' + err1));
        });
    }
}

export const paymentService = new PaymentService();
