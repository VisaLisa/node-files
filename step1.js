const fs = require('fs');
const process = require('process');

/** read file at path and print it out. */

function cat(path) {
    //   read a file, error-check, print out file
  fs.readFile(path, 'utf8', function(err, data) {
    if (err) {
      console.error(`Error reading ${path}: ${err}`);
      process.exit(1);
    } else {
      console.log(data);
    }
  });
}

cat(process.argv[2]);
// cat('one.txt');