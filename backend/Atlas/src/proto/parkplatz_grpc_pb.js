// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var parkplatz_pb = require('./parkplatz_pb.js');

function serialize_grpc_HelloReply(arg) {
  if (!(arg instanceof parkplatz_pb.HelloReply)) {
    throw new Error('Expected argument of type grpc.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_HelloReply(buffer_arg) {
  return parkplatz_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_HelloRequest(arg) {
  if (!(arg instanceof parkplatz_pb.HelloRequest)) {
    throw new Error('Expected argument of type grpc.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_HelloRequest(buffer_arg) {
  return parkplatz_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ParkplatzService = exports.ParkplatzService = {
  reserve: {
    path: '/grpc.Parkplatz/Reserve',
    requestStream: false,
    responseStream: false,
    requestType: parkplatz_pb.HelloRequest,
    responseType: parkplatz_pb.HelloReply,
    requestSerialize: serialize_grpc_HelloRequest,
    requestDeserialize: deserialize_grpc_HelloRequest,
    responseSerialize: serialize_grpc_HelloReply,
    responseDeserialize: deserialize_grpc_HelloReply,
  },
  utilization: {
    path: '/grpc.Parkplatz/Utilization',
    requestStream: false,
    responseStream: false,
    requestType: parkplatz_pb.HelloRequest,
    responseType: parkplatz_pb.HelloReply,
    requestSerialize: serialize_grpc_HelloRequest,
    requestDeserialize: deserialize_grpc_HelloRequest,
    responseSerialize: serialize_grpc_HelloReply,
    responseDeserialize: deserialize_grpc_HelloReply,
  },
  terminate: {
    path: '/grpc.Parkplatz/Terminate',
    requestStream: false,
    responseStream: false,
    requestType: parkplatz_pb.HelloRequest,
    responseType: parkplatz_pb.HelloReply,
    requestSerialize: serialize_grpc_HelloRequest,
    requestDeserialize: deserialize_grpc_HelloRequest,
    responseSerialize: serialize_grpc_HelloReply,
    responseDeserialize: deserialize_grpc_HelloReply,
  },
  provide: {
    path: '/grpc.Parkplatz/Provide',
    requestStream: false,
    responseStream: false,
    requestType: parkplatz_pb.HelloRequest,
    responseType: parkplatz_pb.HelloReply,
    requestSerialize: serialize_grpc_HelloRequest,
    requestDeserialize: deserialize_grpc_HelloRequest,
    responseSerialize: serialize_grpc_HelloReply,
    responseDeserialize: deserialize_grpc_HelloReply,
  },
  edit: {
    path: '/grpc.Parkplatz/Edit',
    requestStream: false,
    responseStream: false,
    requestType: parkplatz_pb.HelloRequest,
    responseType: parkplatz_pb.HelloReply,
    requestSerialize: serialize_grpc_HelloRequest,
    requestDeserialize: deserialize_grpc_HelloRequest,
    responseSerialize: serialize_grpc_HelloReply,
    responseDeserialize: deserialize_grpc_HelloReply,
  },
  remove: {
    path: '/grpc.Parkplatz/Remove',
    requestStream: false,
    responseStream: false,
    requestType: parkplatz_pb.HelloRequest,
    responseType: parkplatz_pb.HelloReply,
    requestSerialize: serialize_grpc_HelloRequest,
    requestDeserialize: deserialize_grpc_HelloRequest,
    responseSerialize: serialize_grpc_HelloReply,
    responseDeserialize: deserialize_grpc_HelloReply,
  },
};

exports.ParkplatzClient = grpc.makeGenericClientConstructor(ParkplatzService);
