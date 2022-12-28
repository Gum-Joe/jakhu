#include <node.h>
#include <stdlib.h>
#include <string>
#include <iostream>

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

const char *convertToStringV8(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  // get the param
  v8::String::Utf8Value param1(args[0]->ToString());
    // convert it to string
  std::string foo = std::string(*param1);
  //const char *dir = foo.c_str();
    return foo.c_str();
  }
