/*
var obj = {
  name: 'Arun'
};

var stringObj = JSON.stringify(obj);

console.log(typeof stringObj);
console.log(stringObj);*/

/*
var personString = '{"name": "ArunTej", "age": 27}'

var person = JSON.parse(personString);

console.log(typeof person);
console.log(person);*/


const fs = require('fs');

var originalNote = {
    title: 'Some Title',
    body: 'Some Body'
}

var originalNoteStr = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteStr);

var noteString = fs.readFileSync('notes.json');

console.log(noteString);

var note = JSON.parse(noteString);
console.log(typeof note, note.title);
