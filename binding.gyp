{
  "targets": [
    {
      "target_name": "api",
      "conditions": [["OS == 'win'", {
        "sources": ["src/mkdir_windows.cc", "src/mkdir_windows_bash.cc", "src/decrypt.cc", "src/pem.cc", "src/filesystem.cc", "src/filesystem_encrypt.cc", "src/filesystem_decrypt.cc"]
      }], ['OS=="linux"', {
        "sources": ["src/decrypt.cc", "src/pem.cc", "src/filesystem.cc", "src/filesystem_encrypt.cc", "src/filesystem_decrypt.cc"]
      }]]
    }
]}
