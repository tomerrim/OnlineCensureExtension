import mongoose from 'mongoose';
import { email, emailModel } from '../models/email';
import { connectToMongoDB } from './mongo';

const createEmail = (mailData: email) => {
    return new Promise<email>((resolve, reject) => {
        connectToMongoDB()
            .then(() => {
                emailModel.create(mailData, (err: string, createdEmail: email) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(createdEmail);
                });
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const getEmail = (id: mongoose.Types.ObjectId) => {
    return new Promise<email>((resolve, reject) => {
        connectToMongoDB()
            .then(() => {
                emailModel.findById(id, (err: string, foundEmail: email) => {
                    if (err || !foundEmail) {
                        reject(err ?? "mail not found");
                    }
                    resolve(foundEmail);
                });
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const updateEmail = (id: mongoose.Types.ObjectId, updatedEmailData: Partial<email>) => {
    return new Promise<email>((resolve, reject) => {
        connectToMongoDB()
            .then(() => {
                emailModel.findByIdAndUpdate(
                    id,
                    updatedEmailData,
                    (err: string, updatedEmail: email) => {
                        if (err || !updatedEmail) {
                            reject(err ?? "mail not found");
                        }
                        resolve(updatedEmail);
                    }
                );
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const deleteEmail = (id: mongoose.Types.ObjectId) => {
    return new Promise<void>((resolve, reject) => {
        connectToMongoDB()
            .then(() => {
                emailModel.findByIdAndDelete(id, (err: string) => {
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

export { createEmail, getEmail, updateEmail, deleteEmail };

