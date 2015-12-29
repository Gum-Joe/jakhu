# jakhu (Jakhu) [![Dep Status](https://travis-ci.org/Gum-Joe/jakhu.svg?branch=a1)](https://travis-ci.org/Gum-Joe/jakhu) [![Coverage Status](https://coveralls.io/repos/Gum-Joe/jakhu/badge.svg?branch=a1&service=github)](https://coveralls.io/github/Gum-Joe/jakhu?branch=a1) <a href="https://codeclimate.com/github/Gum-Joe/jakhu"><img src="https://codeclimate.com/github/Gum-Joe/jakhu/badges/gpa.svg" /></a> [![Dependency Status](https://david-dm.org/Gum-Joe/jakhu.svg)](https://david-dm.org/Gum-Joe/jakhu) [![devDependency Status](https://david-dm.org/Gum-Joe/jakhu/dev-status.svg)](https://david-dm.org/Gum-Joe/bos.jss#info=devDependencies) [![Inline docs](http://inch-ci.org/github/Gum-Joe/jakhu.svg?branch=master)](http://inch-ci.org/github/Gum-Joe/jakhu)

# What is Jakhu?
It is a simple, nodejs based, app for managing your web-app(s).
# When do I use it?
Say you have 2 web-apps/apps, on different/the same service providers, and want a easy to use way of natively managing the way it works, how it is doing (up time/down time) or want to deploy a new web-app.  This is where we come in. We can import the web-app and tell you about its up-time, down-time, warn you about attacks and check if it works (building, tests, linting .etc). In addition, we can help you deploy new web-apps.

# Features:
* Easy management for ports, scripts, web-app config, apps, login, databases, mobile apps and servers and more. You can do this all from the Jakhu in-app dashboard or the Jakhu online access portal (to be developed).

* Easy recovery tools. These include rollback (for those little errors you Web-app has), reset (In case you need to wipe your Web-app's data (databases, file .etc), or remove the current config), web-terminal (For running commands) and refresh (In case you accidentally remove a important file, replace it without using rollback.)

* Easy deployment. Simply select your hosting provider, provide an address and command to run and Jakhu will deploy your web-app if it runs successfully. In addition, add a Github Repo/Git repo/Service to host your open-source code (like we are doing, on GitHub)

# Start developing
Simply clone or fork this branch (the a1 branch) and start developing.
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
