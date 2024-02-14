import mongoose from 'mongoose';
import { user, userModel } from '../models/user';
import { connectToMongoDB } from './mongo';

const createUser = (userData: user) => {
    return new Promise<user>((resolve, reject) => {
        connectToMongoDB()
            .then(() => {
                userModel.create(userData, (err: string, createdUser: user) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(createdUser);
                });
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const getUser = (id: mongoose.Types.ObjectId) => {
    return new Promise<user>((resolve, reject) => {
        connectToMongoDB()
            .then(() => {
                userModel.findById(id, (err: string, foundUser: user) => {
                    if (err || !foundUser) {
                        reject(err ?? "User not found");
                    }
                    resolve(foundUser);
                });
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const updateUser = (id: mongoose.Types.ObjectId, updatedUserData: Partial<user>) => {
    return new Promise<user>((resolve, reject) => {
        connectToMongoDB()
            .then(() => {
                userModel.findByIdAndUpdate(
                    id,
                    updatedUserData,
                    (err: string, updatedUser: user) => {
                        if (err || !updatedUser) {
                            reject(err ?? "User not found");
                        }
                        resolve(updatedUser);
                    }
                );
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const deleteUser = (id: mongoose.Types.ObjectId) => {
    return new Promise<void>((resolve, reject) => {
        connectToMongoDB()
            .then(() => {
                userModel.findByIdAndDelete(id, (err: string) => {
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

export { createUser, getUser, updateUser, deleteUser };
