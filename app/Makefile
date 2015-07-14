# here is the console makefile
# for all the aps
run:
	echo Compilling apps; \
	echo Using Gcs; \
	echo Compiling OOBE; \
	cd c-app && $(MAKE) rootOneTest; \
	echo Testing...; \
	cd .. && mkdir -p tmp/tests #; /
	# gmcs web-os-console @#scripts go here; \
	# echo Running...; \
	#@#here; \
	#echo Creating dirs...; \
	#echo Done!

tests:
	echo Runing tests; \
	echo Installing modules; \
	npm install; \
	npm install bower; \
	node node_modules/bower/bin/bower install
	echo Testing...; \
	mocha;

install:
	echo Installing Modules; \
	npm install; \
	npm install bower; \        
	node node_modules/bower/bin/bower install; \
	echo Done;
