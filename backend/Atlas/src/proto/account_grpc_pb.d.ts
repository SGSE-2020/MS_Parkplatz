// package: account
// file: account.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as account_pb from "./account_pb";

interface IAccountServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createAccount: IAccountServiceService_IcreateAccount;
    transfer: IAccountServiceService_Itransfer;
    deleteAccount: IAccountServiceService_IdeleteAccount;
    getIban: IAccountServiceService_IgetIban;
}

interface IAccountServiceService_IcreateAccount extends grpc.MethodDefinition<account_pb.AccountCreation, account_pb.Account> {
    path: string; // "/account.AccountService/createAccount"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.AccountCreation>;
    requestDeserialize: grpc.deserialize<account_pb.AccountCreation>;
    responseSerialize: grpc.serialize<account_pb.Account>;
    responseDeserialize: grpc.deserialize<account_pb.Account>;
}
interface IAccountServiceService_Itransfer extends grpc.MethodDefinition<account_pb.Transfer, account_pb.transferMessage> {
    path: string; // "/account.AccountService/transfer"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.Transfer>;
    requestDeserialize: grpc.deserialize<account_pb.Transfer>;
    responseSerialize: grpc.serialize<account_pb.transferMessage>;
    responseDeserialize: grpc.deserialize<account_pb.transferMessage>;
}
interface IAccountServiceService_IdeleteAccount extends grpc.MethodDefinition<account_pb.Account, account_pb.Status> {
    path: string; // "/account.AccountService/deleteAccount"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.Account>;
    requestDeserialize: grpc.deserialize<account_pb.Account>;
    responseSerialize: grpc.serialize<account_pb.Status>;
    responseDeserialize: grpc.deserialize<account_pb.Status>;
}
interface IAccountServiceService_IgetIban extends grpc.MethodDefinition<account_pb.UserId, account_pb.Account> {
    path: string; // "/account.AccountService/getIban"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.UserId>;
    requestDeserialize: grpc.deserialize<account_pb.UserId>;
    responseSerialize: grpc.serialize<account_pb.Account>;
    responseDeserialize: grpc.deserialize<account_pb.Account>;
}

export const AccountServiceService: IAccountServiceService;

export interface IAccountServiceServer {
    createAccount: grpc.handleUnaryCall<account_pb.AccountCreation, account_pb.Account>;
    transfer: grpc.handleUnaryCall<account_pb.Transfer, account_pb.transferMessage>;
    deleteAccount: grpc.handleUnaryCall<account_pb.Account, account_pb.Status>;
    getIban: grpc.handleUnaryCall<account_pb.UserId, account_pb.Account>;
}

export interface IAccountServiceClient {
    createAccount(request: account_pb.AccountCreation, callback: (error: grpc.ServiceError | null, response: account_pb.Account) => void): grpc.ClientUnaryCall;
    createAccount(request: account_pb.AccountCreation, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.Account) => void): grpc.ClientUnaryCall;
    createAccount(request: account_pb.AccountCreation, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.Account) => void): grpc.ClientUnaryCall;
    transfer(request: account_pb.Transfer, callback: (error: grpc.ServiceError | null, response: account_pb.transferMessage) => void): grpc.ClientUnaryCall;
    transfer(request: account_pb.Transfer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.transferMessage) => void): grpc.ClientUnaryCall;
    transfer(request: account_pb.Transfer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.transferMessage) => void): grpc.ClientUnaryCall;
    deleteAccount(request: account_pb.Account, callback: (error: grpc.ServiceError | null, response: account_pb.Status) => void): grpc.ClientUnaryCall;
    deleteAccount(request: account_pb.Account, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.Status) => void): grpc.ClientUnaryCall;
    deleteAccount(request: account_pb.Account, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.Status) => void): grpc.ClientUnaryCall;
    getIban(request: account_pb.UserId, callback: (error: grpc.ServiceError | null, response: account_pb.Account) => void): grpc.ClientUnaryCall;
    getIban(request: account_pb.UserId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.Account) => void): grpc.ClientUnaryCall;
    getIban(request: account_pb.UserId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.Account) => void): grpc.ClientUnaryCall;
}

export class AccountServiceClient extends grpc.Client implements IAccountServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createAccount(request: account_pb.AccountCreation, callback: (error: grpc.ServiceError | null, response: account_pb.Account) => void): grpc.ClientUnaryCall;
    public createAccount(request: account_pb.AccountCreation, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.Account) => void): grpc.ClientUnaryCall;
    public createAccount(request: account_pb.AccountCreation, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.Account) => void): grpc.ClientUnaryCall;
    public transfer(request: account_pb.Transfer, callback: (error: grpc.ServiceError | null, response: account_pb.transferMessage) => void): grpc.ClientUnaryCall;
    public transfer(request: account_pb.Transfer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.transferMessage) => void): grpc.ClientUnaryCall;
    public transfer(request: account_pb.Transfer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.transferMessage) => void): grpc.ClientUnaryCall;
    public deleteAccount(request: account_pb.Account, callback: (error: grpc.ServiceError | null, response: account_pb.Status) => void): grpc.ClientUnaryCall;
    public deleteAccount(request: account_pb.Account, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.Status) => void): grpc.ClientUnaryCall;
    public deleteAccount(request: account_pb.Account, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.Status) => void): grpc.ClientUnaryCall;
    public getIban(request: account_pb.UserId, callback: (error: grpc.ServiceError | null, response: account_pb.Account) => void): grpc.ClientUnaryCall;
    public getIban(request: account_pb.UserId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.Account) => void): grpc.ClientUnaryCall;
    public getIban(request: account_pb.UserId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.Account) => void): grpc.ClientUnaryCall;
}
