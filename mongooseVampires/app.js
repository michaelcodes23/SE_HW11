/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require('mongoose');
const seedData = require('./models/seed_vampires.js');
const Vampire = require('./models/vampire.js');

// Configuration
const mongoURI = 'mongodb://localhost:27017/'+ 'vampires';
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect( mongoURI );

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on( 'open' , ()=>{
  console.log('Connection made!');
});

/**********************************************************************
Write Your Code Below
**********************************************************************/
// var vampire = {
//   name: 'Chocula',
//   title: 'Count',
//   hair_color: 'brown',
//   eye_color: 'brown',
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ['cereal', 'marshmallows'],
//   location: 'Minneapolis, Minnesota, US',
//   gender: 'm',
//   victims: 2
// }
// Commenting out to avoid uploading the data twice
Vampire.insertMany(seedData, (err, vampires) => {
  if (err) {console.log(err)}
  console.log("added provided vampire data", vampires)
  mongoose.connection.close();
});

let michael = {
    name: 'King Michelangelo',
    hair_color: 'black',
    eye_color: 'brown',
    loves: ['Ceviche','Music','Comedies'],
    location: 'New York, NY, US',
    gender: 'm',
    victims: 27
}

let cindarella = {
    name: 'Count Cindarella',
    hair_color: 'black',
    eye_color: 'blue',
    loves: ['Dancing','Cleaning','Shoes'],
    dob: new Date(1578, 10, 8, 5, 3),
    location: 'Far Far Away',
    gender: 'f',
    victims: 1
}

let charming = {
    name: 'Prince Charming',
    eye_color: 'blue',
    loves: ['Dancing','Investigating','Fighting'],
    dob: new Date(1576, 10, 8, 5, 3),
    location: 'Far Far Away',
    gender: 'm',
    victims: 0
}

let now = {
    name: 'Random',
    eye_color: 'brown',
    loves: ['Cooking','Studying','Coding'],
    location: 'NY',
    gender: 'f',
    victims: 50
}

Vampire.insertMany([michael, cindarella, charming, now], (err, vampires) => {
  if (err) {console.log(err)}
  console.log("added provided vampire data", vampires)
  mongoose.connection.close();
});