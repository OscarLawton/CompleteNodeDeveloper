const fs = require('fs')
const chalk = require('chalk');



// Add a Note
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)    

   

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes)
        console.log('Note note added!')
    } else {
        console.log('Note title taken!')
    }
    notes.push({
        title: title,
        body: body
    })
    
}

// Remove A Note
const removeNote = (title) => {
    const notes = loadNotes()
    var found = false
    for(var i = 0; i < notes.length; i++){
        if(notes[i].title === title){
            notes.splice(i,1);
            found = true
        } 
    }
    if (found){
        saveNotes(notes)
        console.log(chalk.green.inverse("Note Removed!!"))
    } else {
        console.log(chalk.red.inverse("No Note Removed"))
    }
    
    
}

// List All Notes
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your notes: "))
    notes.forEach(note => {
        console.log(note.title);
    });
}

// Read A Note
const readNote = (noteTitle) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === noteTitle)
    
    if(note){
        console.log(note.title)
        console.log(chalk.inverse(note.body));
    } else {
        console.log(chalk.red("No Note Found!"))
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return[]
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};