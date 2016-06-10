var cluster = require('cluster');
var http = require('http');

const {MASTER_SETUP, CPU } = require('./config/');


  cluster.setupMaster(MASTER_SETUP);


  for (var i = 0; i < CPU; i++) {
    cluster.fork();
  }

  cluster.on('online', (worker) => {
    console.log('Worker ' + worker.process.pid + ' is online');
  });

  for(var w in cluster.workers) {
    cluster.workers[w].send({
      data : 'Hello!'
    })
  }

  cluster.on('message', (worker,mess) => {
    console.log(`Hi I am ${worker.id}, your message is ${mess.data}`)
  });