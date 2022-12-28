#include <sys/types.h>
#include <sys/stat.h>

struct stat info;
int statapi(const char *const pathname) {
  /* code */
  if( stat( pathname, &info ) != 0 )
      return false;
  else if( info.st_mode & S_IFDIR )  // S_ISDIR() doesn't exist on my windows
      return true;
  else
      return false;
}
