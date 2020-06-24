// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var parkplatz_pb = require('./parkplatz_pb.js');

function serialize_grpc_AreaDetails(arg) {
  if (!(arg instanceof parkplatz_pb.AreaDetails)) {
    throw new Error('Expected argument of type grpc.AreaDetails');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_AreaDetails(buffer_arg) {
  return parkplatz_pb.AreaDetails.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_AreaRequest(arg) {
  if (!(arg instanceof parkplatz_pb.AreaRequest)) {
    throw new Error('Expected argument of type grpc.AreaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_AreaRequest(buffer_arg) {
  return parkplatz_pb.AreaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_ExpulsionRequest(arg) {
  if (!(arg instanceof parkplatz_pb.ExpulsionRequest)) {
    throw new Error('Expected argument of type grpc.ExpulsionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_ExpulsionRequest(buffer_arg) {
  return parkplatz_pb.ExpulsionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_ReservationDetails(arg) {
  if (!(arg instanceof parkplatz_pb.ReservationDetails)) {
    throw new Error('Expected argument of type grpc.ReservationDetails');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_ReservationDetails(buffer_arg) {
  return parkplatz_pb.ReservationDetails.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_ReservationRequest(arg) {
  if (!(arg instanceof parkplatz_pb.ReservationRequest)) {
    throw new Error('Expected argument of type grpc.ReservationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_ReservationRequest(buffer_arg) {
  return parkplatz_pb.ReservationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_TerminationRequest(arg) {
  if (!(arg instanceof parkplatz_pb.TerminationRequest)) {
    throw new Error('Expected argument of type grpc.TerminationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_TerminationRequest(buffer_arg) {
  return parkplatz_pb.TerminationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_UtilizationDetails(arg) {
  if (!(arg instanceof parkplatz_pb.UtilizationDetails)) {
    throw new Error('Expected argument of type grpc.UtilizationDetails');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_UtilizationDetails(buffer_arg) {
  return parkplatz_pb.UtilizationDetails.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_UtilizationRequest(arg) {
  if (!(arg instanceof parkplatz_pb.UtilizationRequest)) {
    throw new Error('Expected argument of type grpc.UtilizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_UtilizationRequest(buffer_arg) {
  return parkplatz_pb.UtilizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ParkplatzService = exports.ParkplatzService = {
  reservation: {
    path: '/grpc.Parkplatz/reservation',
    requestStream: false,
    responseStream: false,
    requestType: parkplatz_pb.ReservationRequest,
    responseType: parkplatz_pb.ReservationDetails,
    requestSerialize: serialize_grpc_ReservationRequest,
    requestDeserialize: deserialize_grpc_ReservationRequest,
    responseSerialize: serialize_grpc_ReservationDetails,
    responseDeserialize: deserialize_grpc_ReservationDetails,
  },
  termination: {
    path: '/grpc.Parkplatz/termination',
    requestStream: false,
    responseStream: false,
    requestType: parkplatz_pb.TerminationRequest,
    responseType: parkplatz_pb.ReservationDetails,
    requestSerialize: serialize_grpc_TerminationRequest,
    requestDeserialize: deserialize_grpc_TerminationRequest,
    responseSerialize: serialize_grpc_ReservationDetails,
    responseDeserialize: deserialize_grpc_ReservationDetails,
  },
  utilization: {
    path: '/grpc.Parkplatz/utilization',
    requestStream: false,
    responseStream: true,
    requestType: parkplatz_pb.UtilizationRequest,
    responseType: parkplatz_pb.UtilizationDetails,
    requestSerialize: serialize_grpc_UtilizationRequest,
    requestDeserialize: deserialize_grpc_UtilizationRequest,
    responseSerialize: serialize_grpc_UtilizationDetails,
    responseDeserialize: deserialize_grpc_UtilizationDetails,
  },
  provision: {
    path: '/grpc.Parkplatz/provision',
    requestStream: false,
    responseStream: false,
    requestType: parkplatz_pb.AreaRequest,
    responseType: parkplatz_pb.AreaDetails,
    requestSerialize: serialize_grpc_AreaRequest,
    requestDeserialize: deserialize_grpc_AreaRequest,
    responseSerialize: serialize_grpc_AreaDetails,
    responseDeserialize: deserialize_grpc_AreaDetails,
  },
  expulsion: {
    path: '/grpc.Parkplatz/expulsion',
    requestStream: false,
    responseStream: false,
    requestType: parkplatz_pb.ExpulsionRequest,
    responseType: parkplatz_pb.AreaDetails,
    requestSerialize: serialize_grpc_ExpulsionRequest,
    requestDeserialize: deserialize_grpc_ExpulsionRequest,
    responseSerialize: serialize_grpc_AreaDetails,
    responseDeserialize: deserialize_grpc_AreaDetails,
  },
};

exports.ParkplatzClient = grpc.makeGenericClientConstructor(ParkplatzService);
