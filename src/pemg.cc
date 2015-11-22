#include <openssl/rsa.h>
#include <openssl/pem.h>
#include <openssl/err.h>
#include <stdio.h>
#include <string.h>
#include <node.h>
//#include "write.hpp"
#include "pem.hpp"

namespace api {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

void pem(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  //Generate key pair
  generate_key();
  args.GetReturnValue().Set(String::NewFromUtf8(isolate, "Done."));
}

void initpem(Local<Object> exports) {
  NODE_SET_METHOD(exports, "generatepem", pem);
};

NODE_MODULE(pem, initpem)

};  // namespace demo
