// Git method
'use strict'

/**
 * Modules dependencies
*/
const Git = require('nodegit');
const path = require('path');
const debug = require('debug')('git');
// Use gitex as module.exports
let gitex = module.exports = {}
/**
 * Normalize a url (i.e remove the x://)
 * @param url {String} Dir to Normalize
 * @return {String}
*/
const normalizeURL = (url) => {
  if (url.startsWith('https://')) {
    return url.slice(8, url.length)
  }
  if (url.startsWith('http://')) {
    return url.slice(7, url.length)
  }
  if (url.startsWith('git://')) {
    return url.slice(6, url.length)
  }
  return url;
}
// String methods
/**
 * Repo class
 * @param dir {String} Directory of repo
 */
/**
 * Repo info class
*/
function GetSHA(dir) {
  var commitSHA = this.commitSHA;
  Git.Repository.open('./').then((repo) => {
    commitSHA = repo.getMasterCommit();
    console.log(commitSHA);
  })
  return commitSHA;
}
/**
 * Clone method
 * @param url {String} Repo url
*/
function Repo(dir) {
  this.dir = dir;
}
Repo.prototype.clone = function(url, callback) {
  if (url.startsWith('https://') || url.startsWith('http://') || url.startsWith('git://')) {
    // Clone
    debug('Repo format valid');
    debug("url: %o", url)
    debug("dir: %o", this.dir)
    Git.Clone(url, this.dir).then(callback);
  } else {
    debug('Repo format invalid');
    const errmessage = new Error("Invalid repo format - must start with 'https://', 'http://' or 'git://'")
    if (callback) {
      callback(null, errmessage)
    } else {
      throw errmessage;
    }
  }
  // Return class git.RepoInfo
  return 'Cloned'
};
gitex.Repo = Repo;
gitex.normalizeURL = normalizeURL;
