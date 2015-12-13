.PHONY: clean build test
# SRC for sass files
SSRC := ./views/css
# Libs directory
LIB := ./libs
# bin
BIN ?= ./bin
# env
ENV ?=dev
# packages
PACKAGE_JSON ?= package.json
# Web env
BOSS_SSRC := $(SSRC)
BOSS_LIB ?= $(LIB)
BOSS_BIN ?= $(BIN)
BOSS_ENV ?= $(ENV)
# Spec
COVERALLS_SERVICE_NAME=Makefile
# Node env
NODE_ENV=$(ENV)
# INSTALLES
NPM ?= npm
NPM_INSTALL ?= install
NPM_SCRIPT ?= start
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
CXX=g++
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
	echo Removing code, build & spec...; \
	rm -rf views/css/*.css; \
	rm -rf coveralls; \
	rm -rf build;

build:
	@echo Building boss.js
	echo "NPM(install) node_modules"
	$(NPM) $(NPM_INSTALL); \
	echo "BUNDLE(install) node_modules"
	$(BUNDLE) $(BUNDLE_INSTALL)
	echo "CXX(compile) "$(SRC)

test:
	echo 'test here'


travis: clean build test
