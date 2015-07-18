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
		public static void showallhelp(string help){
			Console.WriteLine("help goes here");
			if(help == null){
				Console.WriteLine("Option:			Usage:									Help:");
				Console.WriteLine("		install		install [Switches] <package> 				Used to install a new package");
			}
			
		}
	}
}