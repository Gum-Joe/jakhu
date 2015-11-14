#include <stdio.h>
#include <node.h>
#include <openssl/rsa.h>
#include <openssl/pem.h>

bool generate_key()
{

  const int kBits = 1024;
  const int kExp = 3;

  int keylen;
  //char *pem_key;

  RSA *rsa = RSA_generate_key(kBits, kExp, 0, 0);

  /* To get the C-string PEM form: */
  BIO *bio = BIO_new(BIO_s_mem());
  PEM_write_bio_RSAPrivateKey(bio, rsa, NULL, NULL, 0, NULL, NULL);

  keylen = BIO_pending(bio);
  void *pem_key = calloc(keylen+1, 1); /* Null-terminate */
  BIO_read(bio, pem_key, keylen);

  printf("%s", pem_key);

  BIO_free_all(bio);
  RSA_free(rsa);
  free(pem_key);
}


namespace api {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

void Mkc(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  generate_key();
  args.GetReturnValue().Set(String::NewFromUtf8(isolate, "Done."));
}

void initcmd(Local<Object> exports) {
  NODE_SET_METHOD(exports, "pem", Mkc);
}

NODE_MODULE(api, initcmd)

}  // namespace demo
