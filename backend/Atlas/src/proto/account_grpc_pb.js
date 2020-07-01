// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var account_pb = require('./account_pb.js');

function serialize_account_Account(arg) {
  if (!(arg instanceof account_pb.Account)) {
    throw new Error('Expected argument of type account.Account');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_account_Account(buffer_arg) {
  return account_pb.Account.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_account_AccountCreation(arg) {
  if (!(arg instanceof account_pb.AccountCreation)) {
    throw new Error('Expected argument of type account.AccountCreation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_account_AccountCreation(buffer_arg) {
  return account_pb.AccountCreation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_account_Status(arg) {
  if (!(arg instanceof account_pb.Status)) {
    throw new Error('Expected argument of type account.Status');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_account_Status(buffer_arg) {
  return account_pb.Status.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_account_Transfer(arg) {
  if (!(arg instanceof account_pb.Transfer)) {
    throw new Error('Expected argument of type account.Transfer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_account_Transfer(buffer_arg) {
  return account_pb.Transfer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_account_UserId(arg) {
  if (!(arg instanceof account_pb.UserId)) {
    throw new Error('Expected argument of type account.UserId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_account_UserId(buffer_arg) {
  return account_pb.UserId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_account_transferMessage(arg) {
  if (!(arg instanceof account_pb.transferMessage)) {
    throw new Error('Expected argument of type account.transferMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_account_transferMessage(buffer_arg) {
  return account_pb.transferMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountServiceService = exports.AccountServiceService = {
  createAccount: {
    path: '/account.AccountService/createAccount',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.AccountCreation,
    responseType: account_pb.Account,
    requestSerialize: serialize_account_AccountCreation,
    requestDeserialize: deserialize_account_AccountCreation,
    responseSerialize: serialize_account_Account,
    responseDeserialize: deserialize_account_Account,
  },
  transfer: {
    path: '/account.AccountService/transfer',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.Transfer,
    responseType: account_pb.transferMessage,
    requestSerialize: serialize_account_Transfer,
    requestDeserialize: deserialize_account_Transfer,
    responseSerialize: serialize_account_transferMessage,
    responseDeserialize: deserialize_account_transferMessage,
  },
  deleteAccount: {
    path: '/account.AccountService/deleteAccount',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.Account,
    responseType: account_pb.Status,
    requestSerialize: serialize_account_Account,
    requestDeserialize: deserialize_account_Account,
    responseSerialize: serialize_account_Status,
    responseDeserialize: deserialize_account_Status,
  },
  getIban: {
    path: '/account.AccountService/getIban',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.UserId,
    responseType: account_pb.Account,
    requestSerialize: serialize_account_UserId,
    requestDeserialize: deserialize_account_UserId,
    responseSerialize: serialize_account_Account,
    responseDeserialize: deserialize_account_Account,
  },
};

exports.AccountServiceClient = grpc.makeGenericClientConstructor(AccountServiceService);
