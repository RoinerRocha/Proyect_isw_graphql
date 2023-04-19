import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const newsSchema = new Schema({
    title: { type: String },
    short_description: { type: String },
    permalink: {type: String},
    date: {type: String},
    news_sources_id: {type: String},
    user_id: {type: String},
    category_id: {type: String}
});

export const newsModel = mongoose.model('news', newsSchema);
