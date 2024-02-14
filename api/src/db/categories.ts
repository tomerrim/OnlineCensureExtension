import mongoose from 'mongoose';
import { category, categoryModel } from '../models/category';
import { connectToMongoDB, db } from './mongo';


const createCategory = (categoryData: category) => {
    return new Promise<category>((resolve, reject) => {
        connectToMongoDB()
            .then(() => {
                if (!categoryModel.collection) {
                    categoryModel.createCollection();
                }
                categoryModel.create(categoryData).then((createdCategory) => {
                    resolve(createdCategory);
                })
                    .catch((error) => {
                        reject(error);
                    });
            });
    });
}

const getCategory = (id: mongoose.Types.ObjectId) => {
    return new Promise<category>((resolve, reject) => {
        connectToMongoDB()
            .then(() => {
                if (!categoryModel.collection) {
                    categoryModel.createCollection();
                    reject("collection not found");
                }
                categoryModel.findById(id).then((foundCategory) => {
                    if (!foundCategory) {
                        reject("category not found");
                    }
                    resolve(foundCategory);
                }).catch((error) => {
                    reject(error);
                })
                    .catch((error) => {
                        reject(error);
                    });
            });
    })
};

const updateCategory = (id: mongoose.Types.ObjectId, updatedCategoryData: Partial<category>) => {
    return new Promise<category>((resolve, reject) => {
        connectToMongoDB()
            .then(() => {
                categoryModel.findByIdAndUpdate(
                    id,
                    updatedCategoryData,
                    (err: string, updatedCategory: category) => {
                        if (err || !updatedCategory) {
                            reject(err ?? "category not found");
                        }
                        resolve(updatedCategory);
                    }
                );
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const deleteCategory = (id: mongoose.Types.ObjectId) => {
    return new Promise<void>((resolve, reject) => {
        connectToMongoDB()
            .then(() => {
                categoryModel.findByIdAndDelete(id, (err: string) => {
                    if (err) {
                        reject(err);
                    }
                    resolve();
                });
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export { createCategory, getCategory, updateCategory, deleteCategory };







// const getcategory = (id: mongoose.Types.ObjectId) => {
//     return new Promise<category>((resolve, reject) => {
//         connectToMongoDB()
//             .then(() => {
//                 categoryModel.findById(id, (err: string, category: category) => {
//                     if (err || !category) {
//                         reject(err ?? "category not found");
//                     }
//                     resolve(category);
//                 });
//             })
//             .catch((error) => {
//                 reject(error);
//             }
//             );
//     });
// }



// return categorySchema.findById(id);};