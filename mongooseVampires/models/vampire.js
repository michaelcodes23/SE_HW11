const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vampireSchema = new Schema({
  // add your code here to set up your schema
  name: {type: String, required: true, unique: true},
  title: String,
  hair_color: {type: String, default: 'Blonde'},
  eye_color: String,
  dob: {type: Date, default: Date.now()},
  loves: [{type: String}],
  location: String,
  gender: String,
  victims: {type: Number, min: [0, 'No vampire has less than 0 victims!']}
},{timestamps: true});

const Vampire = mongoose.model('Vampire', vampireSchema);

//make this exportable to be accessed in `app.js`
module.exports = Vampire;