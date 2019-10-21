var fs = require("fs");

fs.writeFileSync("notes.txt", "hello world, this file was created by Node.js!");

fs.appendFileSync("notes.txt", "This text was appended using Node.js!");