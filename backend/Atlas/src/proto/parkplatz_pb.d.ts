// package: parkplatz
// file: parkplatz.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ReservationRequest extends jspb.Message { 
    getAreaid(): string;
    setAreaid(value: string): ReservationRequest;

    getUserid(): string;
    setUserid(value: string): ReservationRequest;

    getStartdatetime(): number;
    setStartdatetime(value: number): ReservationRequest;

    getEnddatetime(): number;
    setEnddatetime(value: number): ReservationRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReservationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReservationRequest): ReservationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReservationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReservationRequest;
    static deserializeBinaryFromReader(message: ReservationRequest, reader: jspb.BinaryReader): ReservationRequest;
}

export namespace ReservationRequest {
    export type AsObject = {
        areaid: string,
        userid: string,
        startdatetime: number,
        enddatetime: number,
    }
}

export class ReservationDetails extends jspb.Message { 
    getReservationid(): string;
    setReservationid(value: string): ReservationDetails;

    getStatus(): string;
    setStatus(value: string): ReservationDetails;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReservationDetails.AsObject;
    static toObject(includeInstance: boolean, msg: ReservationDetails): ReservationDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReservationDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReservationDetails;
    static deserializeBinaryFromReader(message: ReservationDetails, reader: jspb.BinaryReader): ReservationDetails;
}

export namespace ReservationDetails {
    export type AsObject = {
        reservationid: string,
        status: string,
    }
}

export class TerminationRequest extends jspb.Message { 
    getReservationid(): string;
    setReservationid(value: string): TerminationRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TerminationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TerminationRequest): TerminationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TerminationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TerminationRequest;
    static deserializeBinaryFromReader(message: TerminationRequest, reader: jspb.BinaryReader): TerminationRequest;
}

export namespace TerminationRequest {
    export type AsObject = {
        reservationid: string,
    }
}

export class AreaRequest extends jspb.Message { 
    getDisplayname(): string;
    setDisplayname(value: string): AreaRequest;


    hasAreadetails(): boolean;
    clearAreadetails(): void;
    getAreadetails(): AreaDetails | undefined;
    setAreadetails(value?: AreaDetails): AreaRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AreaRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AreaRequest): AreaRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AreaRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AreaRequest;
    static deserializeBinaryFromReader(message: AreaRequest, reader: jspb.BinaryReader): AreaRequest;
}

export namespace AreaRequest {
    export type AsObject = {
        displayname: string,
        areadetails?: AreaDetails.AsObject,
    }
}

export class AreaDetails extends jspb.Message { 
    getAreaid(): string;
    setAreaid(value: string): AreaDetails;

    getTotalspots(): number;
    setTotalspots(value: number): AreaDetails;

    getFoodDrink(): boolean;
    setFoodDrink(value: boolean): AreaDetails;

    getBar(): boolean;
    setBar(value: boolean): AreaDetails;

    getFastFood(): boolean;
    setFastFood(value: boolean): AreaDetails;

    getAmenities(): boolean;
    setAmenities(value: boolean): AreaDetails;

    getShopping(): boolean;
    setShopping(value: boolean): AreaDetails;

    getFacilities(): boolean;
    setFacilities(value: boolean): AreaDetails;

    getTwoWheeler(): boolean;
    setTwoWheeler(value: boolean): AreaDetails;

    getHotel(): boolean;
    setHotel(value: boolean): AreaDetails;

    getGrill(): boolean;
    setGrill(value: boolean): AreaDetails;

    getMedicalAid(): boolean;
    setMedicalAid(value: boolean): AreaDetails;

    getGas(): boolean;
    setGas(value: boolean): AreaDetails;

    getCharging(): boolean;
    setCharging(value: boolean): AreaDetails;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AreaDetails.AsObject;
    static toObject(includeInstance: boolean, msg: AreaDetails): AreaDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AreaDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AreaDetails;
    static deserializeBinaryFromReader(message: AreaDetails, reader: jspb.BinaryReader): AreaDetails;
}

export namespace AreaDetails {
    export type AsObject = {
        areaid: string,
        totalspots: number,
        foodDrink: boolean,
        bar: boolean,
        fastFood: boolean,
        amenities: boolean,
        shopping: boolean,
        facilities: boolean,
        twoWheeler: boolean,
        hotel: boolean,
        grill: boolean,
        medicalAid: boolean,
        gas: boolean,
        charging: boolean,
    }
}

export class ExpulsionRequest extends jspb.Message { 
    getAreaid(): string;
    setAreaid(value: string): ExpulsionRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExpulsionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExpulsionRequest): ExpulsionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExpulsionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExpulsionRequest;
    static deserializeBinaryFromReader(message: ExpulsionRequest, reader: jspb.BinaryReader): ExpulsionRequest;
}

export namespace ExpulsionRequest {
    export type AsObject = {
        areaid: string,
    }
}

export class UtilizationRequest extends jspb.Message { 
    getServicename(): string;
    setServicename(value: string): UtilizationRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UtilizationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UtilizationRequest): UtilizationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UtilizationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UtilizationRequest;
    static deserializeBinaryFromReader(message: UtilizationRequest, reader: jspb.BinaryReader): UtilizationRequest;
}

export namespace UtilizationRequest {
    export type AsObject = {
        servicename: string,
    }
}

export class UtilizationDetails extends jspb.Message { 
    getDisplayname(): string;
    setDisplayname(value: string): UtilizationDetails;

    getTotalspots(): number;
    setTotalspots(value: number): UtilizationDetails;

    getUtilizedspots(): number;
    setUtilizedspots(value: number): UtilizationDetails;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UtilizationDetails.AsObject;
    static toObject(includeInstance: boolean, msg: UtilizationDetails): UtilizationDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UtilizationDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UtilizationDetails;
    static deserializeBinaryFromReader(message: UtilizationDetails, reader: jspb.BinaryReader): UtilizationDetails;
}

export namespace UtilizationDetails {
    export type AsObject = {
        displayname: string,
        totalspots: number,
        utilizedspots: number,
    }
}
