var fs = require('fs');

fs.readFile('./read.txt', 'utf8', function(err, data){
  if(err) throw err;
  console.log(data)
  //console.log('Hello Async')
})

console.log('Hello')
