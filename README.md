Protobuf-ES
===========

A complete implementation of [protocol buffers](https://developers.google.com/protocol-buffers) in TypeScript,
suitable for web browsers and Node.js.

For example, the following definition:

```protobuf
message Person {
  string name = 1;
  int32 id = 2;  // Unique ID number for this person.
  string email = 3;
}
```

Is compiled to an ECMAScript class that can be used like this:

```typescript
let pete = new Person({
  name: "pete",
  id: 123
});

let bytes = pete.toBinary();
pete = Person.fromBinary(bytes);
pete = Person.fromJsonString('{"name": "pete", "id": 123}');
```

To learn more, have a look at a complete [code example](packages/example), the documentation
for the [generated code](docs/generated_code.md), and the documentation for the 
[runtime API](docs/runtime_api.md).


### How does this compare to protoc's JavaScript generator?

[`js_generator.cc`](https://github.com/protocolbuffers/protobuf-javascript/blob/main/generator/js_generator.cc)
is rarely updated, and has fallen behind the quickly moving world of JavaScript.

For example:
- it does not support ECMAScript modules
- it cannot generate TypeScript (3rd party plugins are necessary)
- it does not support the [canonical JSON format](https://developers.google.com/protocol-buffers/docs/proto3#json)
- it does not carry over comments from your `.proto` files

Because of this, we want to provide a solid, modern alternative with Protobuf-ES.

The main differences of the generated code:
- we use plain properties for fields, where protoc uses getter and setter methods
- we implement the canonical JSON format
- we generate [much smaller bundles](packages/bench-codesize)
- we rely on standard APIs instead of the [Closure Library](http://googlecode.blogspot.com/2009/11/introducing-closure-tools.html)

See the [migration guides](docs/migrating.md) for details.


### What features are implemented

We implement all proto3 features, including the canonical JSON format.  
We implement all proto2 features, except for extensions and the text format.  
The implementation is covered by the protocol buffers 
[conformance tests](packages/conformance-test).



### Copyright

The [code to encode and decode varint](packages/protobuf/src/google/varint.ts) is Copyright 2008 Google Inc., licensed 
under BSD-3-Clause.  
All other files are licensed under Apache-2.0, see [LICENSE](LICENSE).
