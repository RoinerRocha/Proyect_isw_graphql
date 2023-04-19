import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const playerSchema = new Schema({
  fname: { type: String },
  lname: { type: String },
  email: {type: String, unique:true},
  password: {type: String},
  role: {type: String}
});

export const playerModel = mongoose.model('players', playerSchema);
