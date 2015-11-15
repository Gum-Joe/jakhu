{
  "targets": [
    {
      "target_name": "api",
      "conditions": [["OS == 'win'", {
        "sources": ["src/mkdir_windows.cc", "src/mkdir_windows_bash.cc", "src/pem.cc", "src/pemg.cc", "src/write.cc"]
      }], ['OS=="linux"', {
        "sources": ["src/decrypt.cc", "src/pem.cc", "src/filesystem.cc", "src/filesystem_encrypt.cc", "src/filesystem_decrypt.cc"]
      }]]
    },
    {
      "target_name": "pem",
        "sources": ["src/pem.cc", "src/pemg.cc"]
    },
]}
