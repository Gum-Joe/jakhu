using System;

namespace console_app
{
	class helplib {
		public static void showhelp(string help){
			Console.WriteLine("help goes here");
			if(help == null){
				Console.WriteLine("Showing all help");
			}
		}
	}
}