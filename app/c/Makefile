# here is the console makefile
run:
	echo Compilling app; \
	echo Using Gcs; \
	gmcs web-os-console @#scripts go here; \
	echo Running...; \
	node node_modules/bower/bin/bower install; \
	echo Creating dirs...; \
	mkdir -v logs; \
	mkdir -v api; \
	mkdir -v api/data; \
	echo Creating Log Files; \
	DATE = ${date}; \
	echo "---------Heroku Logs---------" >> logs/all-logs.log; \
	echo "---------Heroku Logs for Web-OS---------" >> logs/wos.log; \
	echo Deploying....; \
	node node_modules/mongodb/bin/mongod --dbpath ./api/data | node app.js;

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
