.PHONY: clean build test
# SRC for sass files
SSRC=./views/css
# Libs directory
LIB=./libs
# bin
BIN=./bin
# Web env
BOSS_SSRC=./views/css
BOSS_LIB=./libs
BOSS_BIN=./bin
BOSS_ENV=dev
# Spec
COVERALLS_SERVICE_NAME=Makefile
# Node env
NODE_ENV=develpment
@export NODE_ENV=development;
# Check if nodejs is in PATH
ifeq (, $(shell which node))
 $(error "Nodejs not found! Please check you have ran 'nvm use ...', or install node >4.0.0")
endif
# Npm?
ifeq (, $(shell which npm))
 $(error "npm not found! Please check you have ran 'nvm use ...', or install nodejs with npm")
endif
# packages
ifeq (, $(shell which mocha))
 $(error "mocha not found! Please check you have ran 'nvm use ...', or install mocha")
endif
# Compilers
ifndef BOSS_CXX
ifeq (, $(shell which g++-4.8))
ifeq (, $(shell which g++-4.9))
$(error "A g++ compiler >4.8 was not found! Install it using "(sudo) apt-get install g++-4.8"")
else
CXX=g++-4.9
endif

else
CXX=g++-4.8
endif
endif
# Ruby installed?
ifeq (, $(shell which gem))
 $(error "gem command not found! Please check you have ruby installed")
endif
# Ruby installed?
ifeq (, $(shell which bundle))
 $(error "bundle gem not found! Please check you have installed it, or install it with 'gem install bundle'")
endif

# Tasks
# Clean-up
clean:
	@echo Removing code, build & spec...; \
	rm -rf views/css/*.css; \
	rm -rf coveralls; \
	rm -rf build;

build:
	echo 'Build here'

build:
	echo 'test here'


travis:
	clean; \
	build; \
	test;
