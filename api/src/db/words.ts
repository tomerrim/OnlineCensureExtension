import mongoose from 'mongoose';
import { word, wordModel } from '../models/word';
import { connectToMongoDB } from './mongo';

const createWord = (wordData: word) => {
    return new Promise<word>((resolve, reject) => {
        connectToMongoDB()
            .then(() => {
                wordModel.create(wordData, (err: string, createdWord: word) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(createdWord);
                });
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const getWord = (id: mongoose.Types.ObjectId) => {
    return new Promise<word>((resolve, reject) => {
        connectToMongoDB()
            .then(() => {
                wordModel.findById(id, (err: string, foundWord: word) => {
                    if (err || !foundWord) {
                        reject(err ?? "word not found");
                    }
                    resolve(foundWord);
                });
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const updateWord = (id: mongoose.Types.ObjectId, updatedWordData: Partial<word>) => {
    return new Promise<word>((resolve, reject) => {
        connectToMongoDB()
            .then(() => {
                wordModel.findByIdAndUpdate(
                    id,
                    updatedWordData,
                    (err: string, updatedWord: word) => {
                        if (err || !updatedWord) {
                            reject(err ?? "word not found");
                        }
                        resolve(updatedWord);
                    }
                );
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const deleteWord = (id: mongoose.Types.ObjectId) => {
    return new Promise<void>((resolve, reject) => {
        connectToMongoDB()
            .then(() => {
                wordModel.findByIdAndDelete(id, (err: string) => {
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

export { createWord, getWord, updateWord, deleteWord };
