#include <node.h>
#include <direct.h>
#include <stdlib.h>
#include <iostream>
#include <string.h>
#include <sys/types.h>
#include <sys/stat.h>
#include "stat.hpp"

namespace stattttttt {
  using v8::FunctionCallbackInfo;
  using v8::Isolate;
  using v8::Local;
  using v8::Object;
  using v8::String;
  using v8::Value;

  void sta(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = args.GetIsolate();
    // get the param
    v8::String::Utf8Value param1(args[0]->ToString());
      // convert it to string
    std::string foo = std::string(*param1);
    const char *const dir = foo.c_str();

    if( stat( dir, &info ) != 0 )
        args.GetReturnValue().Set(String::NewFromUtf8(isolate, "false"));
    else if( info.st_mode & S_IFDIR )  // S_ISDIR() doesn't exist on my windows
        args.GetReturnValue().Set(String::NewFromUtf8(isolate, "true"));
    else
        args.GetReturnValue().Set(String::NewFromUtf8(isolate, "false"));
    //v8::String::NewFromUtf8 outttt = statapi(dir);
  }

  void initbash(Local<Object> exports) {
    NODE_SET_METHOD(exports, "stat", sta);
  }

  NODE_MODULE(stattttttt, initbash)
} /* stat */
