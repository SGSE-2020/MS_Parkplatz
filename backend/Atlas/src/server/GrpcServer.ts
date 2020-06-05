import {IParkplatzServer} from "../proto/parkplatz_grpc_pb";
import {sendUnaryData, ServerUnaryCall} from "grpc";
import {HelloReply, HelloRequest} from "../proto/parkplatz_pb";

export class ParkplatzServer implements IParkplatzServer {
    edit(call: ServerUnaryCall<HelloRequest>, callback: sendUnaryData<HelloReply>): void {
    }

    provide(call: ServerUnaryCall<HelloRequest>, callback: sendUnaryData<HelloReply>): void {
    }

    remove(call: ServerUnaryCall<HelloRequest>, callback: sendUnaryData<HelloReply>): void {
    }

    reserve(call: ServerUnaryCall<HelloRequest>, callback: sendUnaryData<HelloReply>): void {
    }

    terminate(call: ServerUnaryCall<HelloRequest>, callback: sendUnaryData<HelloReply>): void {
    }

    utilization(call: ServerUnaryCall<HelloRequest>, callback: sendUnaryData<HelloReply>): void {
    }

}
