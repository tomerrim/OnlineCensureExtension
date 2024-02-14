import mongoose from 'mongoose';
import { website, websiteModel } from '../models/website';



const createWebsite = (websiteData: website) => {
    return new Promise<website>((resolve, reject) => {
        mongoose.connect(process.env.MONGO_URL as string).then(() => {
            if (!websiteModel.collection) {
                websiteModel.createCollection();
            }
            const createdWebsite = websiteModel.create(websiteData).catch(error => {
                reject(error);
            });
            resolve(createdWebsite as unknown as website);
        })
    });
}

const getWebsite = (id: mongoose.Types.ObjectId) => {
    return new Promise<website>((resolve, reject) => {
        mongoose.connect(process.env.MONGO_URL as string).then(async() => {
            if (!websiteModel.collection) {
                websiteModel.createCollection();
                reject("collection not found");
            }
            const foundWebsite = await websiteModel.findById(id).exec().catch(error => {
                reject(error);
            });
            resolve(foundWebsite as website);
        })
    });
};

const updateWebsite = (id: mongoose.Types.ObjectId, updatedWebsiteData: Partial<website>) => {
    return new Promise<website>((resolve, reject) => {
        mongoose.connect(process.env.MONGO_URL as string).then(async () => {
            if (!websiteModel.collection) {
                websiteModel.createCollection();
                reject("collection not found");
            }
            const updatedWebsite = await websiteModel.findByIdAndUpdate(id, updatedWebsiteData).exec().catch(err => {
                if (err || !updatedWebsite) {
                    reject(err ?? "user not found");
                }
                resolve(updatedWebsite as website);
            });
        })
    })
};

const deleteWebsite = (id: mongoose.Types.ObjectId) => {
    return new Promise<void>((resolve, reject) => {
        mongoose.connect(process.env.MONGO_URL as string).then(async () => {
            await websiteModel.findByIdAndDelete(id).exec().catch(err => {
                if (err) {
                    reject(err);
                }
            });
            resolve();
        })
    });
};


export { createWebsite, getWebsite, updateWebsite, deleteWebsite };
