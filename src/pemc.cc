#include <node.h>
#include "pem.h"

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

void pemccc(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  //Generate key pair
  generate();
  args.GetReturnValue().Set(String::NewFromUtf8(isolate, "Done."));
}

void initpem(Local<Object> exports) {
  NODE_SET_METHOD(exports, "pemcc", pemccc);
};

NODE_MODULE(pem, initpem)
