// Welcome to the Chalkboard Printer!
const input = require('sync-input');

let name, surname, message, numberOfRepeats;

name = input('Enter name: ');
surname = input('Enter surname: ');
message = input('Enter message: ');
numberOfRepeats = input('Enter number of repeats: ');

// Log the message to the console 5 times.
for (let i = 0; i < numberOfRepeats; i++) {
    console.log(`This is ${name} ${surname} and ${message}`);
}