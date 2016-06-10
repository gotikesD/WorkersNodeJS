var algoritm = require('../algoritms/quicksort');


process.on('message', (mess) => {
  console.log(algoritm(mess.part));
   process.send({
     sortedPart : algoritm(mess.part)
   })
});