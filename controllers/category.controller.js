import { categoryModel } from "../models/category.model.js";

export const getCategoryById = async function (id) {
    //get categories by id
    try {
        const category = await categoryModel.findById(id);
        if (category) {
            return category;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}

export const getCategories = async function () {
    //get all categories
    try {
        const category = await categoryModel.find();
        if (category) {
            return category;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}