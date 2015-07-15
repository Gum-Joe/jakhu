# here is the console makefile
# for all the aps
rootOneTest:
	echo Compilling OOBE...; \
	node-gyp rebuild; \
	echo done; \
	

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
