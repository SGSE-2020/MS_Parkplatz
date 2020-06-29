// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var parkplatz_pb = require('./parkplatz_pb.js');

function serialize_parkplatz_AreaDetails(arg) {
  if (!(arg instanceof parkplatz_pb.AreaDetails)) {
    throw new Error('Expected argument of type parkplatz.AreaDetails');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_parkplatz_AreaDetails(buffer_arg) {
  return parkplatz_pb.AreaDetails.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_parkplatz_AreaRequest(arg) {
  if (!(arg instanceof parkplatz_pb.AreaRequest)) {
    throw new Error('Expected argument of type parkplatz.AreaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_parkplatz_AreaRequest(buffer_arg) {
  return parkplatz_pb.AreaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_parkplatz_ExpulsionRequest(arg) {
  if (!(arg instanceof parkplatz_pb.ExpulsionRequest)) {
    throw new Error('Expected argument of type parkplatz.ExpulsionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_parkplatz_ExpulsionRequest(buffer_arg) {
  return parkplatz_pb.ExpulsionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_parkplatz_ReservationDetails(arg) {
  if (!(arg instanceof parkplatz_pb.ReservationDetails)) {
    throw new Error('Expected argument of type parkplatz.ReservationDetails');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_parkplatz_ReservationDetails(buffer_arg) {
  return parkplatz_pb.ReservationDetails.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_parkplatz_ReservationRequest(arg) {
  if (!(arg instanceof parkplatz_pb.ReservationRequest)) {
    throw new Error('Expected argument of type parkplatz.ReservationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_parkplatz_ReservationRequest(buffer_arg) {
  return parkplatz_pb.ReservationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_parkplatz_TerminationRequest(arg) {
  if (!(arg instanceof parkplatz_pb.TerminationRequest)) {
    throw new Error('Expected argument of type parkplatz.TerminationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_parkplatz_TerminationRequest(buffer_arg) {
  return parkplatz_pb.TerminationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_parkplatz_UtilizationDetails(arg) {
  if (!(arg instanceof parkplatz_pb.UtilizationDetails)) {
    throw new Error('Expected argument of type parkplatz.UtilizationDetails');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_parkplatz_UtilizationDetails(buffer_arg) {
  return parkplatz_pb.UtilizationDetails.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_parkplatz_UtilizationRequest(arg) {
  if (!(arg instanceof parkplatz_pb.UtilizationRequest)) {
    throw new Error('Expected argument of type parkplatz.UtilizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_parkplatz_UtilizationRequest(buffer_arg) {
  return parkplatz_pb.UtilizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ParkplatzService = exports.ParkplatzService = {
  reservation: {
    path: '/parkplatz.Parkplatz/reservation',
    requestStream: false,
    responseStream: false,
    requestType: parkplatz_pb.ReservationRequest,
    responseType: parkplatz_pb.ReservationDetails,
    requestSerialize: serialize_parkplatz_ReservationRequest,
    requestDeserialize: deserialize_parkplatz_ReservationRequest,
    responseSerialize: serialize_parkplatz_ReservationDetails,
    responseDeserialize: deserialize_parkplatz_ReservationDetails,
  },
  termination: {
    path: '/parkplatz.Parkplatz/termination',
    requestStream: false,
    responseStream: false,
    requestType: parkplatz_pb.TerminationRequest,
    responseType: parkplatz_pb.ReservationDetails,
    requestSerialize: serialize_parkplatz_TerminationRequest,
    requestDeserialize: deserialize_parkplatz_TerminationRequest,
    responseSerialize: serialize_parkplatz_ReservationDetails,
    responseDeserialize: deserialize_parkplatz_ReservationDetails,
  },
  utilization: {
    path: '/parkplatz.Parkplatz/utilization',
    requestStream: false,
    responseStream: true,
    requestType: parkplatz_pb.UtilizationRequest,
    responseType: parkplatz_pb.UtilizationDetails,
    requestSerialize: serialize_parkplatz_UtilizationRequest,
    requestDeserialize: deserialize_parkplatz_UtilizationRequest,
    responseSerialize: serialize_parkplatz_UtilizationDetails,
    responseDeserialize: deserialize_parkplatz_UtilizationDetails,
  },
  provision: {
    path: '/parkplatz.Parkplatz/provision',
    requestStream: false,
    responseStream: false,
    requestType: parkplatz_pb.AreaRequest,
    responseType: parkplatz_pb.AreaDetails,
    requestSerialize: serialize_parkplatz_AreaRequest,
    requestDeserialize: deserialize_parkplatz_AreaRequest,
    responseSerialize: serialize_parkplatz_AreaDetails,
    responseDeserialize: deserialize_parkplatz_AreaDetails,
  },
  expulsion: {
    path: '/parkplatz.Parkplatz/expulsion',
    requestStream: false,
    responseStream: false,
    requestType: parkplatz_pb.ExpulsionRequest,
    responseType: parkplatz_pb.AreaDetails,
    requestSerialize: serialize_parkplatz_ExpulsionRequest,
    requestDeserialize: deserialize_parkplatz_ExpulsionRequest,
    responseSerialize: serialize_parkplatz_AreaDetails,
    responseDeserialize: deserialize_parkplatz_AreaDetails,
  },
};

exports.ParkplatzClient = grpc.makeGenericClientConstructor(ParkplatzService);
