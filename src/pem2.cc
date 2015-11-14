#include <memory>
using std::unique_ptr;

#include <openssl/bn.h>
#include <openssl/rsa.h>
#include <openssl/pem.h>
#include <openssl/bio.h>
#include <openssl/x509.h>

#include <cassert>
#define ASSERT assert

using BN_ptr = std::unique_ptr<BIGNUM, decltype(&::BN_free)>;
using RSA_ptr = std::unique_ptr<RSA, decltype(&::RSA_free)>;
using EVP_KEY_ptr = std::unique_ptr<EVP_PKEY, decltype(&::EVP_PKEY_free)>;
using BIO_FILE_ptr = std::unique_ptr<BIO, decltype(&::BIO_free)>;

int main(int argc, char* argv[])
{
    int rc;

    RSA_ptr rsa(RSA_new(), ::RSA_free);
    BN_ptr bn(BN_new(), ::BN_free);

    BIO_FILE_ptr pem1(BIO_new_file("rsa-public-1.pem", "w"), ::BIO_free);
    BIO_FILE_ptr pem2(BIO_new_file("rsa-public-2.pem", "w"), ::BIO_free);
    BIO_FILE_ptr pem3(BIO_new_file("rsa-private-1.pem", "w"), ::BIO_free);
    BIO_FILE_ptr pem4(BIO_new_file("rsa-private-2.pem", "w"), ::BIO_free);
    BIO_FILE_ptr pem5(BIO_new_file("rsa-private-3.pem", "w"), ::BIO_free);
    BIO_FILE_ptr der1(BIO_new_file("rsa-public.der", "w"), ::BIO_free);
    BIO_FILE_ptr der2(BIO_new_file("rsa-private.der", "w"), ::BIO_free);

    rc = BN_set_word(bn.get(), RSA_F4);
    ASSERT(rc == 1);

    // Generate key
    rc = RSA_generate_key_ex(rsa.get(), 2048, bn.get(), NULL);
    ASSERT(rc == 1);

    // Convert RSA to PKEY
    EVP_KEY_ptr pkey(EVP_PKEY_new(), ::EVP_PKEY_free);
    rc = EVP_PKEY_set1_RSA(pkey.get(), rsa.get());
    ASSERT(rc == 1);

    //////////

    // Write public key in Traditional PEM
    rc = PEM_write_bio_PUBKEY(pem2.get(), pkey.get());
    ASSERT(rc == 1);

    //////////

    // Write private key in Traditional PEM
    rc = PEM_write_bio_RSAPrivateKey(pem5.get(), rsa.get(), NULL, NULL, 0, NULL, NULL);
    ASSERT(rc == 1);

    return 0;
}
