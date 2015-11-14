// basic file operations
#include <iostream>
#include <fstream>
#include <node.h>
#include <stdio.h>
#include <string.h>
#include "write.hpp"
using namespace std;

namespace api {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;
using namespace tools;

void Mkc(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  // get the param
  v8::String::Utf8Value param1(args[0]->ToString());
  v8::String::Utf8Value param2(args[1]->ToString());
    // convert it to string
  std::string foo = std::string(*param1);
  std::string foo2 = std::string(*param2);
  char *dir = new char[foo2.size() + 1];
  std::copy(foo2.begin(), foo2.end(), dir);
  dir[foo2.size()] = '\0'; // don't forget the terminating 0
  // don't forget to free the string after finished using it
  delete[] dir;
  // arg 1 -> const char *
  const char *loca = foo.c_str();
  tools::write(dir, loca);
  args.GetReturnValue().Set(String::NewFromUtf8(isolate, "Done."));
}

void initcmd(Local<Object> exports) {
  NODE_SET_METHOD(exports, "pem", Mkc);
};

NODE_MODULE(api, initcmd)

}  // namespace demo
