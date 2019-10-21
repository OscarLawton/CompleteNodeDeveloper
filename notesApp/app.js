const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0')

// Create add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true
        }
    },
    handler: function(argv){
        console.log('Adding a new note!', argv);
    }
})

// Create remove Command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function(){
        console.log('Removed a note!');
    }
})


// Create list Command
yargs.command({
    command: 'list',
    describe: 'lists all notes',
    handler: function(){
        console.log('All the notes here!');
    }
})

// Create read Comment
yargs.command({
    command: 'read',
    describe: 'Read body of note in full',
    handler: function(){
        console.log("Full body of note!");
    }
})

console.log(yargs.argv)