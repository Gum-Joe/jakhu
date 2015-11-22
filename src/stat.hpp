#include <sys/types.h>
#include <sys/stat.h>

struct stat info;
void statapi(pathname) {
  /* code */
  if( stat( pathname, &info ) != 0 )
      printf( "cannot access %s\n", pathname );
  else if( info.st_mode & S_IFDIR )  // S_ISDIR() doesn't exist on my windows
      printf( "%s is a directory\n", pathname );
  else
      printf( "%s is no directory\n", pathname );
}
