// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_pb from "./user_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    verifyUser: IUserServiceService_IverifyUser;
    getUser: IUserServiceService_IgetUser;
}

interface IUserServiceService_IverifyUser extends grpc.MethodDefinition<user_pb.UserToken, user_pb.UserId> {
    path: string; // "/user.UserService/verifyUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<user_pb.UserToken>;
    requestDeserialize: grpc.deserialize<user_pb.UserToken>;
    responseSerialize: grpc.serialize<user_pb.UserId>;
    responseDeserialize: grpc.deserialize<user_pb.UserId>;
}
interface IUserServiceService_IgetUser extends grpc.MethodDefinition<user_pb.UserId, user_pb.User> {
    path: string; // "/user.UserService/getUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<user_pb.UserId>;
    requestDeserialize: grpc.deserialize<user_pb.UserId>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    verifyUser: grpc.handleUnaryCall<user_pb.UserToken, user_pb.UserId>;
    getUser: grpc.handleUnaryCall<user_pb.UserId, user_pb.User>;
}

export interface IUserServiceClient {
    verifyUser(request: user_pb.UserToken, callback: (error: grpc.ServiceError | null, response: user_pb.UserId) => void): grpc.ClientUnaryCall;
    verifyUser(request: user_pb.UserToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserId) => void): grpc.ClientUnaryCall;
    verifyUser(request: user_pb.UserToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserId) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.UserId, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.UserId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.UserId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public verifyUser(request: user_pb.UserToken, callback: (error: grpc.ServiceError | null, response: user_pb.UserId) => void): grpc.ClientUnaryCall;
    public verifyUser(request: user_pb.UserToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserId) => void): grpc.ClientUnaryCall;
    public verifyUser(request: user_pb.UserToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserId) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.UserId, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.UserId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.UserId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
}
