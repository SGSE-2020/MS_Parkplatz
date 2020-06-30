import 'reflect-metadata';
import {Server} from './server';
import * as grpc from "grpc";
import {IParkplatzServer, ParkplatzService} from "./proto/parkplatz_grpc_pb";
import {ParkplatzServer} from "./server/GrpcServer";

const restServer = new Server();
console.log(`SERVER: REST listening on ${process.env.HTTP_PORT || 8080}`);
restServer.start(+process.env.HTTP_PORT || 8080);

const grpcServer = new grpc.Server();
grpcServer.addService<IParkplatzServer>(ParkplatzService, new ParkplatzServer());
console.log(`SERVER: gRPC listening on ${process.env.GRPC_PORT || 50051}`);
grpcServer.bind(`0.0.0.0:${process.env.GRPC_PORT || 50051}`, grpc.ServerCredentials.createInsecure());
grpcServer.start();
