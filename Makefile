# here is the heroku makefile
run:
	echo Installing bower modules; \
	echo Installing bower; \
	npm install bower; \
	echo Installing components; \
	node node_modules\bower\bin\bower install; \
	echo Deploying....; \
	node app.js

test:
	echo Runing tests; \
	echo Installing modules; \
	npm install; \
	npm install bower; \
	node node_modules\bower\bin\bower install
	echo Testing...; \
	mocha

install:
	echo Installing Modules; /
	npm install; \
	npm install bower; \        
	node node_modules\bower\bin\bower install; \
	echo Done
