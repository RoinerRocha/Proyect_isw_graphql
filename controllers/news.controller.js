import { newsModel } from "../models/news.model.js";

export const getNewsByCat = async function (id, cat) {
    //get news by user id and category
    try {
        const news = await newsModel.find({user_id: id, category_id: cat});
        if (news) {
            return news;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}

export const getNews = async function (id) {
    //get all news by user id
    try {
        const news = await newsModel.find({user_id: id});
        if (news) {
            return news;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}