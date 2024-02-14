import mongoose from 'mongoose';
import { website, websiteModel } from '../models/website';
import { connectToMongoDB } from './mongo';

const createWebsite = (websiteData: website) => {
    return new Promise<website>((resolve, reject) => {
        connectToMongoDB()
            .then(() => {
                websiteModel.create(websiteData, (err: string, createdWebsite: website) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(createdWebsite);
                });
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const getWebsite = (id: mongoose.Types.ObjectId) => {
    return new Promise<website>((resolve, reject) => {
        connectToMongoDB()
            .then(() => {
                websiteModel.findById(id, (err: string, foundWebsite: website) => {
                    if (err || !foundWebsite) {
                        reject(err ?? "website not found");
                    }
                    resolve(foundWebsite);
                });
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const updateWebsite = (id: mongoose.Types.ObjectId, updatedWebsiteData: Partial<website>) => {
    return new Promise<website>((resolve, reject) => {
        connectToMongoDB()
            .then(() => {
                websiteModel.findByIdAndUpdate(
                    id,
                    updatedWebsiteData,
                    (err: string, updatedWebsite: website) => {
                        if (err || !updatedWebsite) {
                            reject(err ?? "website not found");
                        }
                        resolve(updatedWebsite);
                    }
                );
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const deleteWebsite = (id: mongoose.Types.ObjectId) => {
    return new Promise<void>((resolve, reject) => {
        connectToMongoDB()
            .then(() => {
                websiteModel.findByIdAndDelete(id, (err: string) => {
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

export { createWebsite, getWebsite, updateWebsite, deleteWebsite };
