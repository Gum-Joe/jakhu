{
  "targets": [
    {
      "target_name": "mkdir",
      "conditions": [["OS == 'win'", {
        "sources": ["src/mkdir_windows.cc"]
      }], ['OS=="linux"', {
        "sources": ["src/mkdir_linux.cc"]
      }]]
    },
    {
      "target_name": "pem",
      "sources": ["src/pem.cc"]
    },
    {
      "target_name": "write",
      "sources": ["src/write.cc"]
    },
    {
      "target_name": "stat",
      "sources": ["src/stat.cc"]
    },
]}
