var fs = require("fs");
var data = 'Write to a file.Node js Learning';

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
   console.log("Write to a file is done.");
});

writerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");