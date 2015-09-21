istanbul cover ./node_modules/mocha/bin/_mocha test/**/*.js --reporter=lcovonly -- -R spec && cat coverage/lcov.info | node_modules/.bin/coveralls
