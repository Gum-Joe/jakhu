using System;

namespace console_app
{
	class help {
		public static void showhelp(string help){
			Console.WriteLine("help goes here");
			if(help == null){
				Console.WriteLine("Showing all help");
			}
		}
		public static void showallhelp(){
			Console.WriteLine("Help:");
			Console.WriteLine("install");
			Console.WriteLine("    Usage: install [Switches....] <package> [Swithches...]");
			Console.WriteLine("    Info: Used to install a new package");
			Console.WriteLine("    -l, --location     Set the location to install the package - default is 'web-os_plugins'");
		}
	}
}