# Web-OS [![Dep Status](https://travis-ci.org/Gum-Joe/Web-OS.svg?branch=master)](https://travis-ci.org/Gum-Joe/Web-OS) [![app veyor Build status](https://ci.appveyor.com/api/projects/status/93bp43bnds9wl230?svg=true)](https://ci.appveyor.com/project/Gum-Joe/web-os) [![Dependency Status](https://david-dm.org/Gum-Joe/Web-OS.svg)](https://david-dm.org/Gum-Joe/Web-OS) [![devDependency Status](https://david-dm.org/Gum-Joe/Web-OS/dev-status.svg)](https://david-dm.org/Gum-Joe/Web-OS#info=devDependencies) [![Inline docs](http://inch-ci.org/github/Gum-Joe/Web-OS.svg?branch=master)](http://inch-ci.org/github/Gum-Joe/Web-OS)
A brand new way to manage your web-apps: recovery, backup, managment and more.

# What is Web-OS?
Web-OS is a nodejs based system for managing your web-app(s). Features include:
* Easy management for ports, scripts, web-app config, apps, login, databases, mobile apps and servers and more. You can do this all from the Web-OS in-app dashboard or the Web-OS online access portal (to be developed).

* Easy recovery tools. These include rollback (for those little errors you Web-app has), reset (In case you need to wipe your Web-app's data (databases, file .etc), or remove the current config), web-terminal (For running commands) and refresh (In case you accidentally remove a important file, replace it without using rollback.)

* Easy deployment. Simply select your hosting provider, provide an address and command to run and Web-OS will deploy your web-app if it runs successfully. In addition, add a Github Repo/Git repo/Service to host your open-source code (like we are doing, on GitHub).

* Easy migration of existing web-apps (coming soon). Simply download the wizard to migrate your web-app in Web-OS.

* Free online portal (coming soon). No need to log into your web-app via the web-app its self, use the secure Web-OS online portal for management.

# Start developing
Simply clone or fork this branch (the a1 branch) and start developing.
## Setup:
 Make sure you have nodejs and npm installed.
  1. `npm install -g bower mocha less coffee-script nodemon`,

  2. `npm install`,

  3. `bower install`,

  4. `coffee libs/*/*.coffee libs/*/*/*.coffee libs/*.coffee`,

  * make sure the environment is dev...

  5. `export NODE_ENV="dev"` (or `set NODE_ENV="deve"` in windows)

  * and finally...

  6. `npm start`

# How does our branching system work?
First, a new branch, called a1 (alpha 1), is created off the master. This is the the first stage of development, which has the most bugs and is not ready for release. Secondly, we make a new branch called b1 (beta 1) . This is where all of the fixing and adding of extra features goes on in addition to community testing and contributing (you can also test and contribute to the alpha branch). To add to this, two new branches, alpha-master (for previous alpha branches merged into the beta branches) and beta-master (for previous beta branches merged into the master branch), are created.  When ready, the a1 branch is merged into alpha-master and b1.  Finally, when b1 is ready, it is merged into beta-master and master. So it is basically ax is merged into alpha-master, then bx is merged into beta-master and master when ready.

Here's an image of it:
![branches](https://raw.githubusercontent.com/Gum-Joe/Web-OS/master/Web-OS-branches.jpg)
