#include <node.h>
#include <stdlib.h>
#include <string.h>
#include <sys/types.h>
#include <sys/stat.h>
//#include "mkdir-linux.h"

namespace api {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

void Mkdir(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  char *env = getenv("HOME");
  const char *dir = "/.jakhu";
  const char *home = strcat(env, dir);
  mkdir(home, S_IRWXU | S_IRWXG | S_IROTH | S_IXOTH);
  args.GetReturnValue().Set(String::NewFromUtf8(isolate, "Done."));
}

void init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "mkdir", Mkdir);
}

NODE_MODULE(mkdirlinux, init)

}  // namespace demo
