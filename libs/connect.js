var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var request = require("request");

var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var clicolour = require('cli-color');
var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
// awaiting solve
// var bcrypt = require('bcrypt');

// connect
exports.stadaradconnect = function (x, callback) {
		var url = 'mongodb://localhost:27017/Jakhu';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
	if(x !== 'test'){
		console.log(clicolour.cyanBright("jakhu ") + clicolour.magentaBright("database ") + "Connected correctly to mongo server.");
	} else {
		if(err){
			callback('error');
		} else {
			callback('connected');
		};
	};
	db.close();
});
};

function startdbrun(argument) {
	var dockermac = process.env.DOCKER_HOST;
	var dockerip = dockermac.slice(6,dockermac.length-5) || "0.0.0.0";
	// body...
	exec('docker run --name jakhumongodb -p 27018:27017 -d mongo', (err, stdout, stderr) => {
  	if (err) {
			//console.error("Error when starting mongodb!");
    	//console.error(err);
    	return;
  	}
	});
	connect("no", `${dockerip}:27018`);
}

function startdb() {
	// body...
	// stop container
	var dockermac = process.env.DOCKER_HOST;
	var dockerip = dockermac.slice(6,dockermac.length-5);
	if (process.env.JAKHU_RUN_TYPE == "docker" || process.env.JAKHU_RUN_TYPE == undefined) {
		exec('docker stop jakhumongodb', (err, stdout, stderr) => {
	  	if (err) {
				//console.error("Error when stoping mongodb docker container!");
	    	return;
	  	}
		});
		// start it.
		// hide errors
		exec('docker start jakhumongodb', (err, stdout, stderr) => {
	  	if (err) {
				//console.error("Error when starting mongodb docker container!");
	    	//console.error(err);
				startdbrun();
	    	return;
	  	} else {
				connect("no", `${dockerip}:27018`);
			}
		});
	}
}

exports.connect = function (x, call) {
	// Start db
	// Check if started
	if (process.env.JAKHU_RUN_TYPE === "docker") {
                var dockerhost = process.env.DOCKER_HOST;
	        var dockerip = dockerhost.slice(6,dockerhost.length-5) || "0.0.0.0";
		request("http://"+dockerip+":32771", function(error, response, body) {
	  	if (error) {
				// start db
				console.log(clicolour.cyanBright("jakhu ") + clicolour.magentaBright("database ") + "Starting MongoDB in a docker container...");
				startdb()
	  	}
		});
	} else {
		if (x === "test") {
			connect("test", "localhost:27017");
		} else {
			connect("localhost:27017");
		}
	}
}

function connect(type, porttt) {
	mongoose.connect(`mongodb://${porttt}/jakhu`);

db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
		console.log(clicolour.cyanBright("jakhu ") + clicolour.magentaBright("database ") + "Yay! We succefully connected to the db");
});
}
