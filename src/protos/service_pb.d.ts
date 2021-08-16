// package: test_user
// file: service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class User extends jspb.Message { 
    getFirstname(): string;
    setFirstname(value: string): User;
    getLastname(): string;
    setLastname(value: string): User;
    getSex(): string;
    setSex(value: string): User;
    getEmail(): string;
    setEmail(value: string): User;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): User.Location | undefined;
    setLocation(value?: User.Location): User;

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
        firstname: string,
        lastname: string,
        sex: string,
        email: string,
        location?: User.Location.AsObject,
    }


    export class Location extends jspb.Message { 
        getState(): string;
        setState(value: string): Location;
        getCity(): string;
        setCity(value: string): Location;
        getStreet(): string;
        setStreet(value: string): Location;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Location.AsObject;
        static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Location;
        static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
    }

    export namespace Location {
        export type AsObject = {
            state: string,
            city: string,
            street: string,
        }
    }

}

export class UsersRequest extends jspb.Message { 
    getResultcount(): number;
    setResultcount(value: number): UsersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UsersRequest): UsersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsersRequest;
    static deserializeBinaryFromReader(message: UsersRequest, reader: jspb.BinaryReader): UsersRequest;
}

export namespace UsersRequest {
    export type AsObject = {
        resultcount: number,
    }
}

export class UsersReply extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<User>;
    setUsersList(value: Array<User>): UsersReply;
    addUsers(value?: User, index?: number): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsersReply.AsObject;
    static toObject(includeInstance: boolean, msg: UsersReply): UsersReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsersReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsersReply;
    static deserializeBinaryFromReader(message: UsersReply, reader: jspb.BinaryReader): UsersReply;
}

export namespace UsersReply {
    export type AsObject = {
        usersList: Array<User.AsObject>,
    }
}
