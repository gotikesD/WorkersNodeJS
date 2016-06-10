var cluster = require('cluster');

const {MASTER_SETUP, CPU , DATA } = require('./config/');


  cluster.setupMaster(MASTER_SETUP);

  for (var i = 0; i < CPU; i++) {
    cluster.fork();
  }

  let a = 0;

  cluster.on('online', (worker) => {

    let partSize = DATA.length/CPU;
    let part = DATA.slice(a, partSize + a);
      cluster.workers[worker.id].send({
        part : part
      });
    a += 5;
  });

  cluster.on('message', (mess) => {
    console.log(mess.sortedPart)
  });