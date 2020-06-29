// package: parkplatz
// file: parkplatz.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as parkplatz_pb from "./parkplatz_pb";

interface IParkplatzService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    reservation: IParkplatzService_Ireservation;
    termination: IParkplatzService_Itermination;
    utilization: IParkplatzService_Iutilization;
    provision: IParkplatzService_Iprovision;
    expulsion: IParkplatzService_Iexpulsion;
}

interface IParkplatzService_Ireservation extends grpc.MethodDefinition<parkplatz_pb.ReservationRequest, parkplatz_pb.ReservationDetails> {
    path: string; // "/parkplatz.Parkplatz/reservation"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<parkplatz_pb.ReservationRequest>;
    requestDeserialize: grpc.deserialize<parkplatz_pb.ReservationRequest>;
    responseSerialize: grpc.serialize<parkplatz_pb.ReservationDetails>;
    responseDeserialize: grpc.deserialize<parkplatz_pb.ReservationDetails>;
}
interface IParkplatzService_Itermination extends grpc.MethodDefinition<parkplatz_pb.TerminationRequest, parkplatz_pb.ReservationDetails> {
    path: string; // "/parkplatz.Parkplatz/termination"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<parkplatz_pb.TerminationRequest>;
    requestDeserialize: grpc.deserialize<parkplatz_pb.TerminationRequest>;
    responseSerialize: grpc.serialize<parkplatz_pb.ReservationDetails>;
    responseDeserialize: grpc.deserialize<parkplatz_pb.ReservationDetails>;
}
interface IParkplatzService_Iutilization extends grpc.MethodDefinition<parkplatz_pb.UtilizationRequest, parkplatz_pb.UtilizationDetails> {
    path: string; // "/parkplatz.Parkplatz/utilization"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<parkplatz_pb.UtilizationRequest>;
    requestDeserialize: grpc.deserialize<parkplatz_pb.UtilizationRequest>;
    responseSerialize: grpc.serialize<parkplatz_pb.UtilizationDetails>;
    responseDeserialize: grpc.deserialize<parkplatz_pb.UtilizationDetails>;
}
interface IParkplatzService_Iprovision extends grpc.MethodDefinition<parkplatz_pb.AreaRequest, parkplatz_pb.AreaDetails> {
    path: string; // "/parkplatz.Parkplatz/provision"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<parkplatz_pb.AreaRequest>;
    requestDeserialize: grpc.deserialize<parkplatz_pb.AreaRequest>;
    responseSerialize: grpc.serialize<parkplatz_pb.AreaDetails>;
    responseDeserialize: grpc.deserialize<parkplatz_pb.AreaDetails>;
}
interface IParkplatzService_Iexpulsion extends grpc.MethodDefinition<parkplatz_pb.ExpulsionRequest, parkplatz_pb.AreaDetails> {
    path: string; // "/parkplatz.Parkplatz/expulsion"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<parkplatz_pb.ExpulsionRequest>;
    requestDeserialize: grpc.deserialize<parkplatz_pb.ExpulsionRequest>;
    responseSerialize: grpc.serialize<parkplatz_pb.AreaDetails>;
    responseDeserialize: grpc.deserialize<parkplatz_pb.AreaDetails>;
}

export const ParkplatzService: IParkplatzService;

export interface IParkplatzServer {
    reservation: grpc.handleUnaryCall<parkplatz_pb.ReservationRequest, parkplatz_pb.ReservationDetails>;
    termination: grpc.handleUnaryCall<parkplatz_pb.TerminationRequest, parkplatz_pb.ReservationDetails>;
    utilization: grpc.handleServerStreamingCall<parkplatz_pb.UtilizationRequest, parkplatz_pb.UtilizationDetails>;
    provision: grpc.handleUnaryCall<parkplatz_pb.AreaRequest, parkplatz_pb.AreaDetails>;
    expulsion: grpc.handleUnaryCall<parkplatz_pb.ExpulsionRequest, parkplatz_pb.AreaDetails>;
}

export interface IParkplatzClient {
    reservation(request: parkplatz_pb.ReservationRequest, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.ReservationDetails) => void): grpc.ClientUnaryCall;
    reservation(request: parkplatz_pb.ReservationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.ReservationDetails) => void): grpc.ClientUnaryCall;
    reservation(request: parkplatz_pb.ReservationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.ReservationDetails) => void): grpc.ClientUnaryCall;
    termination(request: parkplatz_pb.TerminationRequest, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.ReservationDetails) => void): grpc.ClientUnaryCall;
    termination(request: parkplatz_pb.TerminationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.ReservationDetails) => void): grpc.ClientUnaryCall;
    termination(request: parkplatz_pb.TerminationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.ReservationDetails) => void): grpc.ClientUnaryCall;
    utilization(request: parkplatz_pb.UtilizationRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<parkplatz_pb.UtilizationDetails>;
    utilization(request: parkplatz_pb.UtilizationRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<parkplatz_pb.UtilizationDetails>;
    provision(request: parkplatz_pb.AreaRequest, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.AreaDetails) => void): grpc.ClientUnaryCall;
    provision(request: parkplatz_pb.AreaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.AreaDetails) => void): grpc.ClientUnaryCall;
    provision(request: parkplatz_pb.AreaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.AreaDetails) => void): grpc.ClientUnaryCall;
    expulsion(request: parkplatz_pb.ExpulsionRequest, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.AreaDetails) => void): grpc.ClientUnaryCall;
    expulsion(request: parkplatz_pb.ExpulsionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.AreaDetails) => void): grpc.ClientUnaryCall;
    expulsion(request: parkplatz_pb.ExpulsionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.AreaDetails) => void): grpc.ClientUnaryCall;
}

export class ParkplatzClient extends grpc.Client implements IParkplatzClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public reservation(request: parkplatz_pb.ReservationRequest, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.ReservationDetails) => void): grpc.ClientUnaryCall;
    public reservation(request: parkplatz_pb.ReservationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.ReservationDetails) => void): grpc.ClientUnaryCall;
    public reservation(request: parkplatz_pb.ReservationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.ReservationDetails) => void): grpc.ClientUnaryCall;
    public termination(request: parkplatz_pb.TerminationRequest, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.ReservationDetails) => void): grpc.ClientUnaryCall;
    public termination(request: parkplatz_pb.TerminationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.ReservationDetails) => void): grpc.ClientUnaryCall;
    public termination(request: parkplatz_pb.TerminationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.ReservationDetails) => void): grpc.ClientUnaryCall;
    public utilization(request: parkplatz_pb.UtilizationRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<parkplatz_pb.UtilizationDetails>;
    public utilization(request: parkplatz_pb.UtilizationRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<parkplatz_pb.UtilizationDetails>;
    public provision(request: parkplatz_pb.AreaRequest, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.AreaDetails) => void): grpc.ClientUnaryCall;
    public provision(request: parkplatz_pb.AreaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.AreaDetails) => void): grpc.ClientUnaryCall;
    public provision(request: parkplatz_pb.AreaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.AreaDetails) => void): grpc.ClientUnaryCall;
    public expulsion(request: parkplatz_pb.ExpulsionRequest, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.AreaDetails) => void): grpc.ClientUnaryCall;
    public expulsion(request: parkplatz_pb.ExpulsionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.AreaDetails) => void): grpc.ClientUnaryCall;
    public expulsion(request: parkplatz_pb.ExpulsionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parkplatz_pb.AreaDetails) => void): grpc.ClientUnaryCall;
}
