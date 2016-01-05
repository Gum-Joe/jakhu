# jakhu [![Dep Status](https://travis-ci.org/Gum-Joe/jakhu.svg?branch=a1)](https://travis-ci.org/Gum-Joe/jakhu) [![Coverage Status](https://coveralls.io/repos/Gum-Joe/jakhu/badge.svg?branch=a1&service=github)](https://coveralls.io/github/Gum-Joe/jakhu?branch=a1) <a href="https://codeclimate.com/github/Gum-Joe/jakhu"><img src="https://codeclimate.com/github/Gum-Joe/jakhu/badges/gpa.svg" /></a> [![Dependency Status](https://david-dm.org/Gum-Joe/jakhu.svg)](https://david-dm.org/Gum-Joe/jakhu) [![devDependency Status](https://david-dm.org/Gum-Joe/jakhu/dev-status.svg)](https://david-dm.org/Gum-Joe/bos.jss#info=devDependencies)

Jakhu is a simple, nodejs based, app for managing your web-app(s). It has a modern dashboard, lets you run, test and deploy apps to your favourite service provider (coming soon) and - most importantly - keeps a backup of your web-apps.

# Building
## Unix (Debian, Ubuntu, CentOS) and Mac OSX
Prerequisites:
* gcc and g++ 4.8 or newer, or
* clang and clang++ 3.4 or newer (for node-gyp)
* Nodejs v4.0.0 or newer (v5.3.0 reccommended) & npm
* Python
* Ruby
* Docker
* Vagrant (if you want to run and test web-apps in vagrant boxes or run the database in vagrant)
* Virtual box (for vagrant)
* Mongodb (if you don't want to use docker or vagrant)

<h5>Building:</h5>
Install deps:
`$ [sudo] npm install -g coffee-script grunt-cli `

## Setup:
 Make sure you have nodejs, npm and ruby installed.
  1. `git clone https://github.com/Gum-Joe/Jakhu.git`
  2. `npm install -g bower mocha less coffee-script nodemon nyc grunt`,
  3. `npm install`,
  4. `bower install`,
  5. `gem install bundle`
  6. `bundle install`
  7. `grunt`
  8. `export NODE_ENV="dev"` (or `set NODE_ENV="dev"` in windows - this is important or the whole thing will be backed up and you will end up with lots of files. See <a href="https://github.com/Gum-Joe/jakhu/issues/25"><b>#25</b></a>)
  9. `bin/jakhu server`

On Linux:
`make fork && bin/jakhu server`

To run in a Vagrant box (from host):
`bin/jakhu vagrant`

## Test:
`make ci`

# What is a1-dist?
a1-dist is a branch in an distributable state and does not include any features, only oobe
