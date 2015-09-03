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
	echo Installing modules; \
	npm install; \
	npm install --dev; \
	npm install -g bower mocha nodemon; \
	bower install; \
	gem install bundle; \
	bundle install; \
	nyc npm test; \
	echo Done; \

fork:
	echo Installing Modules and compileing; \
	npm install; \
	npm install -g bower nodemon coffee-script nodemon nyc; \
	gem install bundle; \
	bundle install; \
	sass views/css/main.scss:views/css/main.css; \
	echo Done; \

install:
	echo Installing Modules and compileing; \
	npm install; \
	npm install -g bower nodemon coffee-script nodemon nyc; \
	gem install bundle; \
	bundle install; \
	sass views/css/main.scss:views/css/main.css; \
	echo Done; \

test-coveralls:
	@NODE_ENV=test Web-OS_COVERAGE=1 ./node_modules/.bin/istanbul cover \
	./node_modules/mocha/bin/_mocha --report lcovonly -- -R spec && \
		cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js --verbose

ci:
	sass views/css/main.scss:views/css/main.css; \
	nyc npm test

#.PHONY test

#.PHONY test
