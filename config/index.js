const NUM_CPUS = require('os').cpus().length;

module.exports = {

  CPU : NUM_CPUS,
  MASTER_SETUP : {
    exec: './workers/index.js'
  }
};