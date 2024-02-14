import mongoose from 'mongoose';
import { user, userModel } from '../models/user';


const createUser = (userData: user) => {
    return new Promise<user>((resolve, reject) => {
        mongoose.connect(process.env.MONGO_URL as string).then(() => {
            if (!userModel.collection) {
                userModel.createCollection();
            }
            const createdUser = userModel.create(userData).catch(error => {
                reject(error);
            });
            resolve(createdUser as unknown as user);
        })
    });
}

const getUser = (id: mongoose.Types.ObjectId) => {
    return new Promise<user>((resolve, reject) => {
        mongoose.connect(process.env.MONGO_URL as string).then(async () => {
            if (!userModel.collection) {
                userModel.createCollection();
                reject("collection not found");
            }
            const foundUser = await userModel.findById(id).exec().catch((error) => {
                reject(error);
            });
            resolve(foundUser as user);
        })
    });
};

const updateUser = (id: mongoose.Types.ObjectId, updatedUserData: Partial<user>) => {
    return new Promise<user>((resolve, reject) => {
        mongoose.connect(process.env.MONGO_URL as string).then(async () => {
            if (!userModel.collection) {
                userModel.createCollection();
                reject("collection not found");
            }
            const updatedUser = await userModel.findByIdAndUpdate(id, updatedUserData).exec().catch(err => {
                if (err || !updatedUser) {
                    reject(err ?? "user not found");
                }
                resolve(updatedUser as user);
            })
        });
    })
};

const deleteUser = (id: mongoose.Types.ObjectId) => {
    return new Promise<void>(async (resolve, reject) => {
        mongoose.connect(process.env.MONGO_URL as string).then(async () => {
            await userModel.findByIdAndDelete(id).exec().catch(err => {
                if (err) {
                    reject(err);
                }
            });
            resolve();
        });
    })
}



export { createUser, getUser, updateUser, deleteUser };
