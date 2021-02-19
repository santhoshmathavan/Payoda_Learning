var fs = require('fs');
fs.readdir('.', function (err, files) {
 if (err)
    throw err;
 for (var index in files) {
    console.log(files[index]);
 }
 });