// basic file operations
#include <iostream>
#include <fstream>
#include <node.h>
#include <stdio.h>
#include <string.h>
using namespace std;

namespace tools {
  int write (char *txt, const char *loc) {
    ofstream myfile;
    myfile.open (loc);
    myfile << strcat(txt, "\n");
    myfile.close();
    return 0;
  }
} /* tools */
