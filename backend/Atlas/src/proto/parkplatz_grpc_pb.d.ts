// package: grpc
// file: parkplatz.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as parkplatz_pb from "./parkplatz_pb";

interface IParkplatzService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    reserve: IParkplatzService_IReserve;
    utilization: IParkplatzService_IUtilization;
    terminate: IParkplatzService_ITerminate;
    provide: IParkplatzService_IProvide;
    edit: IParkplatzService_IEdit;
    remove: IParkplatzService_IRemove;
}

interface IParkplatzService_IReserve extends grpc.MethodDefinition<parkplatz_pb.HelloRequest, parkplatz_pb.HelloReply> {
    path: string; // "/grpc.Parkplatz/Reserve"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<parkplatz_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<parkplatz_pb.HelloRequest>;
    responseSerialize: grpc.serialize<parkplatz_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<parkplatz_pb.HelloReply>;
}
interface IParkplatzService_IUtilization extends grpc.MethodDefinition<parkplatz_pb.HelloRequest, parkplatz_pb.HelloReply> {
    path: string; // "/grpc.Parkplatz/Utilization"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<parkplatz_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<parkplatz_pb.HelloRequest>;
    responseSerialize: grpc.serialize<parkplatz_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<parkplatz_pb.HelloReply>;
}
interface IParkplatzService_ITerminate extends grpc.MethodDefinition<parkplatz_pb.HelloRequest, parkplatz_pb.HelloReply> {
    path: string; // "/grpc.Parkplatz/Terminate"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<parkplatz_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<parkplatz_pb.HelloRequest>;
    responseSerialize: grpc.serialize<parkplatz_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<parkplatz_pb.HelloReply>;
}
interface IParkplatzService_IProvide extends grpc.MethodDefinition<parkplatz_pb.HelloRequest, parkplatz_pb.HelloReply> {
    path: string; // "/grpc.Parkplatz/Provide"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<parkplatz_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<parkplatz_pb.HelloRequest>;
    responseSerialize: grpc.serialize<parkplatz_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<parkplatz_pb.HelloReply>;
}
interface IParkplatzService_IEdit extends grpc.MethodDefinition<parkplatz_pb.HelloRequest, parkplatz_pb.HelloReply> {
    path: string; // "/grpc.Parkplatz/Edit"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<parkplatz_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<parkplatz_pb.HelloRequest>;
    responseSerialize: grpc.serialize<parkplatz_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<parkplatz_pb.HelloReply>;
}
interface IParkplatzService_IRemove extends grpc.MethodDefinition<parkplatz_pb.HelloRequest, parkplatz_pb.HelloReply> {
    path: string; // "/grpc.Parkplatz/Remove"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<parkplatz_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<parkplatz_pb.HelloRequest>;
    responseSerialize: grpc.serialize<parkplatz_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<parkplatz_pb.HelloReply>;
}

export const ParkplatzService: IParkplatzService;

export interface IParkplatzServer {
    reserve: grpc.handleUnaryCall<parkplatz_pb.HelloRequest, parkplatz_pb.HelloReply>;
    utilization: grpc.handleUnaryCall<parkplatz_pb.HelloRequest, parkplatz_pb.HelloReply>;
    terminate: grpc.handleUnaryCall<parkplatz_pb.HelloRequest, parkplatz_pb.HelloReply>;
    provide: grpc.handleUnaryCall<parkplatz_pb.HelloRequest, parkplatz_pb.HelloReply>;
    edit: grpc.handleUnaryCall<parkplatz_pb.HelloRequest, parkplatz_pb.HelloReply>;
    remove: grpc.handleUnaryCall<parkplatz_pb.HelloRequest, parkplatz_pb.HelloReply>;
}

export interface IParkplatzClient {
    reserve(request: parkplatz_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    reserve(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    reserve(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    utilization(request: parkplatz_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    utilization(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    utilization(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    terminate(request: parkplatz_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    terminate(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    terminate(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    provide(request: parkplatz_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    provide(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    provide(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    edit(request: parkplatz_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    edit(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    edit(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    remove(request: parkplatz_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    remove(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    remove(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
}

export class ParkplatzClient extends grpc.Client implements IParkplatzClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public reserve(request: parkplatz_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public reserve(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public reserve(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public utilization(request: parkplatz_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public utilization(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public utilization(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public terminate(request: parkplatz_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public terminate(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public terminate(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public provide(request: parkplatz_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public provide(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public provide(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public edit(request: parkplatz_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public edit(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public edit(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public remove(request: parkplatz_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public remove(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public remove(request: parkplatz_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.HelloReply) => void): grpc.ClientUnaryCall;
}
