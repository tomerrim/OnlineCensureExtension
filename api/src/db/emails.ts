import mongoose from 'mongoose';
import { email, emailModel } from '../models/email';

const createEmail = (mailData: email) => {
    return new Promise<email>(async (resolve, reject) => {
        mongoose.connect(process.env.MONGO_URL as string).then(async () => {
            if (!emailModel.collection) {
                emailModel.createCollection();
            }
            const createdEmail = await emailModel.create(mailData).catch(err => {
                if (err) {
                    reject(err);
                }
            })
            resolve(createdEmail as email);
        })
    });
};

const getEmail = (id: mongoose.Types.ObjectId) => {
    return new Promise<email>(async (resolve, reject) => {
        mongoose.connect(process.env.MONGO_URL as string).then(async () => {
            if (!emailModel.collection) {
                emailModel.createCollection();
                reject("collection not found");
            }
            const foundEmail = await emailModel.findById(id).catch((error) => {
                reject(error);
            });
            resolve(foundEmail as email);
        });
    });
};

const updateEmail = (id: mongoose.Types.ObjectId, updatedEmailData: Partial<email>) => {
    return new Promise<email>(async (resolve, reject) => {
        mongoose.connect(process.env.MONGO_URL as string).then(async () => {
            if (!emailModel.collection) {
                emailModel.createCollection();
                reject("collection not found");
            }
            const updatedEmail = await emailModel.findByIdAndUpdate(id, updatedEmailData,)
                .catch((error) => {
                    reject(error);
                });
            resolve(updatedEmail as email);
        })
    });
};

const deleteEmail = (id: mongoose.Types.ObjectId) => {
    return new Promise<void>((resolve, reject) => {
        mongoose.connect(process.env.MONGO_URL as string).then(() => {
            if (!emailModel.collection) {
                emailModel.createCollection();
                reject("collection not found");
            }
            emailModel.findByIdAndDelete(id).catch((err: string) => {
                if (err) {
                    reject(err);
                }
            });
            resolve();
        })
    });
};

export { createEmail, getEmail, updateEmail, deleteEmail };

