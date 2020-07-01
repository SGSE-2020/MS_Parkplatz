// package: account
// file: account.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class UserId extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): UserId;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserId.AsObject;
    static toObject(includeInstance: boolean, msg: UserId): UserId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserId;
    static deserializeBinaryFromReader(message: UserId, reader: jspb.BinaryReader): UserId;
}

export namespace UserId {
    export type AsObject = {
        userid: string,
    }
}

export class AccountCreation extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): AccountCreation;

    getDescription(): string;
    setDescription(value: string): AccountCreation;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountCreation.AsObject;
    static toObject(includeInstance: boolean, msg: AccountCreation): AccountCreation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccountCreation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountCreation;
    static deserializeBinaryFromReader(message: AccountCreation, reader: jspb.BinaryReader): AccountCreation;
}

export namespace AccountCreation {
    export type AsObject = {
        userid: string,
        description: string,
    }
}

export class Account extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): Account;

    getIban(): string;
    setIban(value: string): Account;

    getStatus(): string;
    setStatus(value: string): Account;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Account.AsObject;
    static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Account;
    static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
    export type AsObject = {
        userid: string,
        iban: string,
        status: string,
    }
}

export class transferMessage extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): transferMessage;

    getUserid(): string;
    setUserid(value: string): transferMessage;

    getLastname(): string;
    setLastname(value: string): transferMessage;

    getMessage(): string;
    setMessage(value: string): transferMessage;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): transferMessage.AsObject;
    static toObject(includeInstance: boolean, msg: transferMessage): transferMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: transferMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): transferMessage;
    static deserializeBinaryFromReader(message: transferMessage, reader: jspb.BinaryReader): transferMessage;
}

export namespace transferMessage {
    export type AsObject = {
        status: string,
        userid: string,
        lastname: string,
        message: string,
    }
}

export class Transfer extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): Transfer;

    getIban(): string;
    setIban(value: string): Transfer;

    getPurpose(): string;
    setPurpose(value: string): Transfer;

    getDestiban(): string;
    setDestiban(value: string): Transfer;

    getAmount(): string;
    setAmount(value: string): Transfer;

    getStartdate(): string;
    setStartdate(value: string): Transfer;

    getRepeat(): string;
    setRepeat(value: string): Transfer;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Transfer.AsObject;
    static toObject(includeInstance: boolean, msg: Transfer): Transfer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Transfer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Transfer;
    static deserializeBinaryFromReader(message: Transfer, reader: jspb.BinaryReader): Transfer;
}

export namespace Transfer {
    export type AsObject = {
        userid: string,
        iban: string,
        purpose: string,
        destiban: string,
        amount: string,
        startdate: string,
        repeat: string,
    }
}

export class Status extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): Status;

    getMessage(): string;
    setMessage(value: string): Status;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Status.AsObject;
    static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Status;
    static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
    export type AsObject = {
        status: string,
        message: string,
    }
}
