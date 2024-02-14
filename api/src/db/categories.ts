import mongoose from 'mongoose';
import { category, categoryModel } from '../models/category';
import dotenv from 'dotenv';

dotenv.config();

// mongoose.connect("mongodb+srv://shmuel:dkLtpzj30rEsBm5r@censure-extension.cktgnej.mongodb.net/");

const createCategory = (categoryData: category) => {
    return new Promise<category>((resolve, reject) => {
        mongoose.connect(process.env.MONGO_URL as string).then(() => {
            if (!categoryModel.collection) {
                categoryModel.createCollection();
            }
            const createdCategory = categoryModel.create(categoryData).catch((error) => {
                reject(error);
            });
            resolve(createdCategory as unknown as category);
        });
    });
}

const getCategory = (id: mongoose.Types.ObjectId) => {
    return new Promise<category>((resolve, reject) => {
        mongoose.connect(process.env.MONGO_URL as string).then(async () => {
            if (!categoryModel.collection) {
                categoryModel.createCollection();
                reject("collection not found");
            }
            const foundCategory = await categoryModel.findById(id).exec().catch((error) => {
                reject(error);
            })
            resolve(foundCategory as category);
        });
    })
}


const updateCategory = (id: mongoose.Types.ObjectId, updatedCategoryData: Partial<category>) => {
    return new Promise<category>(async (resolve, reject) => {
        mongoose.connect(process.env.MONGO_URL as string).then(async () => {
            if (!categoryModel.collection) {
                categoryModel.createCollection();
                reject("collection not found");
            }
            const updatedCategory = await categoryModel.findByIdAndUpdate(id, updatedCategoryData).exec().catch((err: string) => {
                if (err || !updatedCategory) {
                    reject(err ?? "category not found");
                }
                resolve(updatedCategory as category);
            }
            );
        })
    })
};

const deleteCategory = (id: mongoose.Types.ObjectId) => {
    return new Promise<void>(async (resolve, reject) => {
        mongoose.connect(process.env.MONGO_URL as string).then(async () => {
            await categoryModel.findByIdAndDelete(id).exec().catch((err: string) => {
                if (err) {
                    reject(err);
                }
            });
            resolve();
        });
    });
};

export { createCategory, getCategory, updateCategory, deleteCategory };
