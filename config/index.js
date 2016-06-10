const NUM_CPUS = require('os').cpus().length;

module.exports = {

  CPU : NUM_CPUS,
  MASTER_SETUP : {
    exec: './workers/index.js'
  },
  DATA : [1,3,4,55,7,8,6,4,2,34]
};