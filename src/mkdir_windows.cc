#include <node.h>
#include <direct.h>
#include <stdlib.h>
#include <string.h>
//#include "mkdirwindows.h"

namespace mkdirp {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

void Mkc(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  const char *env = getenv("HOMEPATH");
  char *drive = getenv("SystemDrive");
  const char *dir = "/web";
  char *homedir = strcat(drive, env);
  const char *home = strcat(homedir, dir);
  mkdir(home);
  args.GetReturnValue().Set(String::NewFromUtf8(isolate, "Done."));
}

void initcmd(Local<Object> exports) {
  NODE_SET_METHOD(exports, "mk", Mkc);
}

NODE_MODULE(mkdirp, initcmd)

}  // namespace demo
