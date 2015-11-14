// basic file operations
#include <iostream>
#include <fstream>
#include <node.h>
#include <stdio.h>
#include <string.h>
//#include "write.hpp"
using namespace std;

int writeex (char *txt, const char *loc) {
  ofstream myfile;
  myfile.open (loc);
  myfile << strcat(txt, "\n");
  myfile.close();
  return 0;
}

namespace write {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

void writee(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  // get the param
  v8::String::Utf8Value param1(args[0]->ToString());
  v8::String::Utf8Value param2(args[1]->ToString());
    // convert it to string
  std::string p1 = std::string(*param1);
  std::string p2 = std::string(*param2);
  char *con = new char[p2.size() + 1];
  std::copy(p2.begin(), p2.end(), con);
  con[p2.size()] = '\0'; // don't forget the terminating 0
  // don't forget to free the string after finished using it
  delete[] con;
  // arg 1 -> const char *
  const char *locat = p1.c_str();
  writeex(con, locat);
  args.GetReturnValue().Set(String::NewFromUtf8(isolate, "Done."));
}

void initwrite(Local<Object> exports) {
  NODE_SET_METHOD(exports, "write", writee);
};

NODE_MODULE(write, initwrite)

}  // namespace demo
