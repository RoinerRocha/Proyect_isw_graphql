import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const categorySchema = new Schema({
    name: {type: String, unique:true}
});

export const categoryModel = mongoose.model('categories', categorySchema);
