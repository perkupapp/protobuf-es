// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

// A proto file used to test a message type with no explicit field presence.

// @generated by protoc-gen-es v0.0.2-alpha.2 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/unittest_no_field_presence.proto (package proto2_nofieldpresence_unittest, syntax proto3)
/* eslint-disable */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";
import type {TestAllTypes as TestAllTypes$1, TestRequired} from "./unittest_pb.js";

/**
 * @generated from enum proto2_nofieldpresence_unittest.ForeignEnum
 */
export declare enum ForeignEnum {

    /**
     * @generated from enum value: FOREIGN_FOO = 0;
     */
    FOREIGN_FOO = 0,

    /**
     * @generated from enum value: FOREIGN_BAR = 1;
     */
    FOREIGN_BAR = 1,

    /**
     * @generated from enum value: FOREIGN_BAZ = 2;
     */
    FOREIGN_BAZ = 2,

}


/**
 * This proto includes every type of field in both singular and repeated
 * forms.
 *
 * @generated from message proto2_nofieldpresence_unittest.TestAllTypes
 */
export declare class TestAllTypes extends Message<TestAllTypes> {

    /**
     * Singular
     * TODO: remove 'optional' labels as soon as CL 69188077 is LGTM'd to make
     * 'optional' optional.
     *
     * @generated from field: int32 optional_int32 = 1;
     */
    optionalInt32: number;

    /**
     * @generated from field: int64 optional_int64 = 2;
     */
    optionalInt64: bigint;

    /**
     * @generated from field: uint32 optional_uint32 = 3;
     */
    optionalUint32: number;

    /**
     * @generated from field: uint64 optional_uint64 = 4;
     */
    optionalUint64: bigint;

    /**
     * @generated from field: sint32 optional_sint32 = 5;
     */
    optionalSint32: number;

    /**
     * @generated from field: sint64 optional_sint64 = 6;
     */
    optionalSint64: bigint;

    /**
     * @generated from field: fixed32 optional_fixed32 = 7;
     */
    optionalFixed32: number;

    /**
     * @generated from field: fixed64 optional_fixed64 = 8;
     */
    optionalFixed64: bigint;

    /**
     * @generated from field: sfixed32 optional_sfixed32 = 9;
     */
    optionalSfixed32: number;

    /**
     * @generated from field: sfixed64 optional_sfixed64 = 10;
     */
    optionalSfixed64: bigint;

    /**
     * @generated from field: float optional_float = 11;
     */
    optionalFloat: number;

    /**
     * @generated from field: double optional_double = 12;
     */
    optionalDouble: number;

    /**
     * @generated from field: bool optional_bool = 13;
     */
    optionalBool: boolean;

    /**
     * @generated from field: string optional_string = 14;
     */
    optionalString: string;

    /**
     * @generated from field: bytes optional_bytes = 15;
     */
    optionalBytes: Uint8Array;

    /**
     * @generated from field: proto2_nofieldpresence_unittest.TestAllTypes.NestedMessage optional_nested_message = 18;
     */
    optionalNestedMessage?: TestAllTypes_NestedMessage;

    /**
     * @generated from field: proto2_nofieldpresence_unittest.ForeignMessage optional_foreign_message = 19;
     */
    optionalForeignMessage?: ForeignMessage;

    /**
     * @generated from field: protobuf_unittest.TestAllTypes optional_proto2_message = 20;
     */
    optionalProto2Message?: TestAllTypes$1;

    /**
     * @generated from field: proto2_nofieldpresence_unittest.TestAllTypes.NestedEnum optional_nested_enum = 21;
     */
    optionalNestedEnum: TestAllTypes_NestedEnum;

    /**
     * N.B.: proto2-enum-type fields not allowed, because their default values
     * might not be zero.
     *optional protobuf_unittest.ForeignEnum          optional_proto2_enum     = 23;
     *
     * @generated from field: proto2_nofieldpresence_unittest.ForeignEnum optional_foreign_enum = 22;
     */
    optionalForeignEnum: ForeignEnum;

    /**
     * @generated from field: string optional_string_piece = 24;
     */
    optionalStringPiece: string;

    /**
     * @generated from field: string optional_cord = 25;
     */
    optionalCord: string;

    /**
     * @generated from field: proto2_nofieldpresence_unittest.TestAllTypes.NestedMessage optional_lazy_message = 30;
     */
    optionalLazyMessage?: TestAllTypes_NestedMessage;

    /**
     * Repeated
     *
     * @generated from field: repeated int32 repeated_int32 = 31;
     */
    repeatedInt32: number[];

    /**
     * @generated from field: repeated int64 repeated_int64 = 32;
     */
    repeatedInt64: bigint[];

    /**
     * @generated from field: repeated uint32 repeated_uint32 = 33;
     */
    repeatedUint32: number[];

    /**
     * @generated from field: repeated uint64 repeated_uint64 = 34;
     */
    repeatedUint64: bigint[];

    /**
     * @generated from field: repeated sint32 repeated_sint32 = 35;
     */
    repeatedSint32: number[];

    /**
     * @generated from field: repeated sint64 repeated_sint64 = 36;
     */
    repeatedSint64: bigint[];

    /**
     * @generated from field: repeated fixed32 repeated_fixed32 = 37;
     */
    repeatedFixed32: number[];

    /**
     * @generated from field: repeated fixed64 repeated_fixed64 = 38;
     */
    repeatedFixed64: bigint[];

    /**
     * @generated from field: repeated sfixed32 repeated_sfixed32 = 39;
     */
    repeatedSfixed32: number[];

    /**
     * @generated from field: repeated sfixed64 repeated_sfixed64 = 40;
     */
    repeatedSfixed64: bigint[];

    /**
     * @generated from field: repeated float repeated_float = 41;
     */
    repeatedFloat: number[];

    /**
     * @generated from field: repeated double repeated_double = 42;
     */
    repeatedDouble: number[];

    /**
     * @generated from field: repeated bool repeated_bool = 43;
     */
    repeatedBool: boolean[];

    /**
     * @generated from field: repeated string repeated_string = 44;
     */
    repeatedString: string[];

    /**
     * @generated from field: repeated bytes repeated_bytes = 45;
     */
    repeatedBytes: Uint8Array[];

    /**
     * @generated from field: repeated proto2_nofieldpresence_unittest.TestAllTypes.NestedMessage repeated_nested_message = 48;
     */
    repeatedNestedMessage: TestAllTypes_NestedMessage[];

    /**
     * @generated from field: repeated proto2_nofieldpresence_unittest.ForeignMessage repeated_foreign_message = 49;
     */
    repeatedForeignMessage: ForeignMessage[];

    /**
     * @generated from field: repeated protobuf_unittest.TestAllTypes repeated_proto2_message = 50;
     */
    repeatedProto2Message: TestAllTypes$1[];

    /**
     * @generated from field: repeated proto2_nofieldpresence_unittest.TestAllTypes.NestedEnum repeated_nested_enum = 51;
     */
    repeatedNestedEnum: TestAllTypes_NestedEnum[];

    /**
     * @generated from field: repeated proto2_nofieldpresence_unittest.ForeignEnum repeated_foreign_enum = 52;
     */
    repeatedForeignEnum: ForeignEnum[];

    /**
     * @generated from field: repeated string repeated_string_piece = 54;
     */
    repeatedStringPiece: string[];

    /**
     * @generated from field: repeated string repeated_cord = 55;
     */
    repeatedCord: string[];

    /**
     * @generated from field: repeated proto2_nofieldpresence_unittest.TestAllTypes.NestedMessage repeated_lazy_message = 57;
     */
    repeatedLazyMessage: TestAllTypes_NestedMessage[];

    /**
     * @generated from oneof proto2_nofieldpresence_unittest.TestAllTypes.oneof_field
     */
    oneofField: {
        /**
         * @generated from field: uint32 oneof_uint32 = 111;
         */
        value: number;
        case: "oneofUint32";
    } | {
        /**
         * @generated from field: proto2_nofieldpresence_unittest.TestAllTypes.NestedMessage oneof_nested_message = 112;
         */
        value: TestAllTypes_NestedMessage;
        case: "oneofNestedMessage";
    } | {
        /**
         * @generated from field: string oneof_string = 113;
         */
        value: string;
        case: "oneofString";
    } | {
        /**
         * @generated from field: proto2_nofieldpresence_unittest.TestAllTypes.NestedEnum oneof_enum = 114;
         */
        value: TestAllTypes_NestedEnum;
        case: "oneofEnum";
    } | { case: undefined; value?: undefined };

    constructor(data?: PartialMessage<TestAllTypes>);

    static readonly runtime: typeof proto3;
    static readonly typeName = "proto2_nofieldpresence_unittest.TestAllTypes";
    static readonly fields: FieldList;

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestAllTypes;

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestAllTypes;

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestAllTypes;

    static equals(a: TestAllTypes | PlainMessage<TestAllTypes> | undefined, b: TestAllTypes | PlainMessage<TestAllTypes> | undefined): boolean;

}

/**
 * @generated from enum proto2_nofieldpresence_unittest.TestAllTypes.NestedEnum
 */
export declare enum TestAllTypes_NestedEnum {

    /**
     * @generated from enum value: FOO = 0;
     */
    FOO = 0,

    /**
     * @generated from enum value: BAR = 1;
     */
    BAR = 1,

    /**
     * @generated from enum value: BAZ = 2;
     */
    BAZ = 2,

}


/**
 * @generated from message proto2_nofieldpresence_unittest.TestAllTypes.NestedMessage
 */
export declare class TestAllTypes_NestedMessage extends Message<TestAllTypes_NestedMessage> {

    /**
     * @generated from field: int32 bb = 1;
     */
    bb: number;

    constructor(data?: PartialMessage<TestAllTypes_NestedMessage>);

    static readonly runtime: typeof proto3;
    static readonly typeName = "proto2_nofieldpresence_unittest.TestAllTypes.NestedMessage";
    static readonly fields: FieldList;

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestAllTypes_NestedMessage;

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestAllTypes_NestedMessage;

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestAllTypes_NestedMessage;

    static equals(a: TestAllTypes_NestedMessage | PlainMessage<TestAllTypes_NestedMessage> | undefined, b: TestAllTypes_NestedMessage | PlainMessage<TestAllTypes_NestedMessage> | undefined): boolean;

}



/**
 * @generated from message proto2_nofieldpresence_unittest.TestProto2Required
 */
export declare class TestProto2Required extends Message<TestProto2Required> {

    /**
     * @generated from field: protobuf_unittest.TestRequired proto2 = 1;
     */
    proto2?: TestRequired;

    constructor(data?: PartialMessage<TestProto2Required>);

    static readonly runtime: typeof proto3;
    static readonly typeName = "proto2_nofieldpresence_unittest.TestProto2Required";
    static readonly fields: FieldList;

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestProto2Required;

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestProto2Required;

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestProto2Required;

    static equals(a: TestProto2Required | PlainMessage<TestProto2Required> | undefined, b: TestProto2Required | PlainMessage<TestProto2Required> | undefined): boolean;

}


/**
 * Define these after TestAllTypes to make sure the compiler can handle
 * that.
 *
 * @generated from message proto2_nofieldpresence_unittest.ForeignMessage
 */
export declare class ForeignMessage extends Message<ForeignMessage> {

    /**
     * @generated from field: int32 c = 1;
     */
    c: number;

    constructor(data?: PartialMessage<ForeignMessage>);

    static readonly runtime: typeof proto3;
    static readonly typeName = "proto2_nofieldpresence_unittest.ForeignMessage";
    static readonly fields: FieldList;

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ForeignMessage;

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ForeignMessage;

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ForeignMessage;

    static equals(a: ForeignMessage | PlainMessage<ForeignMessage> | undefined, b: ForeignMessage | PlainMessage<ForeignMessage> | undefined): boolean;

}

