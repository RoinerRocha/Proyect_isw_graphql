import { newSourceModel } from "../models/newSource.model.js";

export const getNewSourceById = async function (id) {
    //get news source by id
    try {
        const source = await newSourceModel.find({user_id: id});
        if (source) {
            return source;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}

export const getNewSources = async function () {
    //get all news sources
    try {
        const source = await newSourceModel.find();
        if (source) {
            return source;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}