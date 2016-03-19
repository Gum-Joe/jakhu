// Git method
'use strict'

/**
 * Modules dependencies
*/
const Git = require('nodegit-build');
const path = require('path');
// Use gitex as module.exports
let gitex = module.export = {}
// String methods
/**
 * Repo class
 * @param dir {String} Directory of repo
 */
/**
 * Repo info class
*/
function RepoInfo(dir) {
  var commitSHA = this.commitSHA;
  Git.Repository.open(dir).then((repo) => {
    commitSHA = repo.getMasterCommit();
  })
  console.log(this.commitSHA);
}
/**
 * Clone method
 * @param url {String} Repo url
*/
function Repo(dir) {
  this.dir = path.resolve(path.normalize(dir));
}
Repo.prototype = {};
Repo.prototype.clone = function(url, callback) {
  if (url.startsWith('https://') || url.startsWith('http://') || url.startsWith('git@') || url.startsWith('git://')) {
    // Do nothing
  } else {
    const errmessage = new Error("Invalid repo format - must start with 'https://', 'http://', 'git@' or 'git://'")
    if (callback) {
      callback(errmessage)
    } else {
      throw errmessage;
    }
  }
  // Clone
  Git.clone(url, this.dir)
  // Return class git.RepoInfo
  return new RepoInfo(thgis.dir)
};
// test
let clone = new Repo('../app/repo')
clone.clone('https://github.com/jakhu/leeba');
