echo Building apps
@ECHO OFF
echo Building libs
msbuild console-app-libs.csproj
echo Building app
msbuild console-app.csproj
echo Done!
