// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');

function serialize_user_User(arg) {
  if (!(arg instanceof user_pb.User)) {
    throw new Error('Expected argument of type user.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_User(buffer_arg) {
  return user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserId(arg) {
  if (!(arg instanceof user_pb.UserId)) {
    throw new Error('Expected argument of type user.UserId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserId(buffer_arg) {
  return user_pb.UserId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserToken(arg) {
  if (!(arg instanceof user_pb.UserToken)) {
    throw new Error('Expected argument of type user.UserToken');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserToken(buffer_arg) {
  return user_pb.UserToken.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  verifyUser: {
    path: '/user.UserService/verifyUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserToken,
    responseType: user_pb.UserId,
    requestSerialize: serialize_user_UserToken,
    requestDeserialize: deserialize_user_UserToken,
    responseSerialize: serialize_user_UserId,
    responseDeserialize: deserialize_user_UserId,
  },
  getUser: {
    path: '/user.UserService/getUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserId,
    responseType: user_pb.User,
    requestSerialize: serialize_user_UserId,
    requestDeserialize: deserialize_user_UserId,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
