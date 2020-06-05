#!/bin/bash

# JavaScript code generation
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./src/proto --grpc_out=./src/proto --proto_path=./protos parkplatz.proto user.proto

# TypeScript code generation
grpc_tools_node_protoc --ts_out=import_style=commonjs,binary:./src/proto --grpc_out=./src/proto --proto_path=./protos parkplatz.proto user.proto
