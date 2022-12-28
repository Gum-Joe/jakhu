#!/usr/bin/env bash

# Sets up a Vagrant Box for building

# update
apt-get update

# Instal git
apt-get install -y git-core
# Install curl
apt-get install -y curl
# Install Node.js and npm
curl --silent --location https://deb.nodesource.com/setup_0.12 | sudo bash -
apt-get install -y nodejs
# Install ruby for gemfile
apt-get install -y ruby-full
gem install bundle
# Global npm
npm install nyc grunt-cli coffee-script istanbul mocha

# Install dependences
cd /vagrant
npm install
bundle install

# Compile
grunt ci
