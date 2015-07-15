# here is the console makefile
# for all the aps
run:
	echo Compilling apps; \
	echo Using gcs; \
	echo Compiling OOBE; \
	cd oobe && $(MAKE) rootOneTest; \
	echo Testing...; \
	cd .. && mkdir -p tmp/tests/oobe ; \
	cp -pv ./oobe/bin/Debug/*.exe ./tmp/tests/oobe; \
	cd tmp/tests/oobe; \
	mono *.exe ; \
	cd ".."; \
	echo "Done testing OOBE!"; \
	echo Coppying result...; \
	# make required dirs; \
	mkdir -p tmp/results/oobe; \
	mkdir -p results/oobe; \
	# copy; \
	cp -avr ./tmp/tests/oobe ./tmp/results ./results; \
	# next tests; \
	echo "Preparing for next test"; \
	cd ./tmp/tests; \
	mkdir -p ./console-app; \
	cp -R ./oobe/* ./console-app; \
	echo "Done!"; \
	# compile; \
	echo Compiling Console app; \
	cd ..; \
	cd ..; \
	cd console-app && $(MAKE) rootTwoTest; \
	# test; \
	echo Testing...; \
	cd ".."; \
	cp -pv ./console-app/bin/Debug/*.exe ./tmp/tests/console-app; \
	echo Executing; \
	cd ./tmp/tests/console-app; \
	mono *; \
	echo "Done!"; \
	echo Coppying result; \
	# make required dirs; \
	mkdir -p tmp/results/console-app; \
	mkdir -p results/console-app; \
	# copy; \
	cp -avr ./tmp/tests/console-app ./tmp/results ./results; \
	echo ; \
	echo "Sucess (well, we hope)! C# Tests copleted"; \
	# node stuff
	echo; \
	echo Now Executing node tests; \
	# node testes got here; \
	echo;
	

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
