// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class UserId extends jspb.Message { 
    getUid(): string;
    setUid(value: string): UserId;


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
        uid: string,
    }
}

export class UserToken extends jspb.Message { 
    getToken(): string;
    setToken(value: string): UserToken;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserToken.AsObject;
    static toObject(includeInstance: boolean, msg: UserToken): UserToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserToken;
    static deserializeBinaryFromReader(message: UserToken, reader: jspb.BinaryReader): UserToken;
}

export namespace UserToken {
    export type AsObject = {
        token: string,
    }
}

export class User extends jspb.Message { 
    getUid(): string;
    setUid(value: string): User;

    getGender(): number;
    setGender(value: number): User;

    getFirstname(): string;
    setFirstname(value: string): User;

    getLastname(): string;
    setLastname(value: string): User;

    getNickname(): string;
    setNickname(value: string): User;

    getEmail(): string;
    setEmail(value: string): User;


    hasBirthdate(): boolean;
    clearBirthdate(): void;
    getBirthdate(): Date | undefined;
    setBirthdate(value?: Date): User;

    getStreetaddress(): string;
    setStreetaddress(value: string): User;

    getZipcode(): string;
    setZipcode(value: string): User;

    getCity(): string;
    setCity(value: string): User;

    getPhone(): string;
    setPhone(value: string): User;

    getImage(): string;
    setImage(value: string): User;

    getIactive(): boolean;
    setIactive(value: boolean): User;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        uid: string,
        gender: number,
        firstname: string,
        lastname: string,
        nickname: string,
        email: string,
        birthdate?: Date.AsObject,
        streetaddress: string,
        zipcode: string,
        city: string,
        phone: string,
        image: string,
        iactive: boolean,
    }
}

export class Date extends jspb.Message { 
    getYear(): number;
    setYear(value: number): Date;

    getMonth(): number;
    setMonth(value: number): Date;

    getDay(): number;
    setDay(value: number): Date;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Date.AsObject;
    static toObject(includeInstance: boolean, msg: Date): Date.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Date, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Date;
    static deserializeBinaryFromReader(message: Date, reader: jspb.BinaryReader): Date;
}

export namespace Date {
    export type AsObject = {
        year: number,
        month: number,
        day: number,
    }
}
