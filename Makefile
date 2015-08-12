# here is the heroku makefile
run:
	echo Installing bower modules; \
	echo Installing bower; \
	npm install bower; \
	echo Installing components; \
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
	node node_modules/bower/bin/bower install; \
	echo Testing...; \
	npm test; \
	echo ; \
	echo Done; \
	echo Now testing C#; \
	cd app && make run; \
	echo Done; \

install:
	echo Installing Modules; \
	npm install; \
	npm install bower; \        
	node node_modules/bower/bin/bower install; \
	echo Done;
