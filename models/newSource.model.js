import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const newSourceSchema = new Schema({
    url: { type: String },
    name: {type: String},
    user_id: {type: String},
    category_id: {type: String}
});

export const newSourceModel = mongoose.model('newSources', newSourceSchema);
