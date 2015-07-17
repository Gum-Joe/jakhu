using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks; 

using CommandLineParser;

namespace console_app
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, and welcome to the web-os manager app");
            Console.WriteLine("To get started, please give us arguments");
            Console.WriteLine("Help");
            CommandLineParser.CommandLineParser parser = 
            new CommandLineParser.CommandLineParser();
                //switch argument is meant for true/false logic
                CommandLineParser.SwitchArgument showArgument = new SwitchArgument(
                    's', "show", "Set whether show or not", true);
                ValueArgument<decimal> version = new ValueArgument(
                    'v', "version", "Set desired version");
                EnumeratedValueArgument<string> color = new EnumeratedValueArgument(
                    'c', "color", new string[] { "red", "green", "blue" });
                
                parser.Arguments.Add(showArgument);
                parser.Arguments.Add(version);
                parser.Arguments.Add(color);

            /*if(args.Length == 1){
                 if(args[1] == "help"){
                help.showhelp(null);
                }
            } else if(args.Length == 2){
                if(args[1] == "install"){
                scripts.install(args[2]);
                }
            }
            if(args.Length == 0){
                Console.WriteLine("Help");
            } else if(args[1] == "install"){
                scripts.install(args[1]);
            } else if(args[1] == "--help"){
                help.showhelp(null);
            }*/

        }
    }
}
