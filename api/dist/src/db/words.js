"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWord = exports.updateWord = exports.getWord = exports.createWord = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const word_1 = require("../models/word");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const createWord = (wordData) => {
    return new Promise((resolve, reject) => {
        mongoose_1.default.connect(process.env.MONGO_URL).then(() => {
            if (!word_1.wordModel.collection) {
                word_1.wordModel.createCollection();
            }
            const createdWord = word_1.wordModel.create(wordData).catch((error) => {
                reject(error);
            });
            resolve(createdWord);
        });
    });
};
exports.createWord = createWord;
const getWord = (id) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        mongoose_1.default.connect(process.env.MONGO_URL).then(() => __awaiter(void 0, void 0, void 0, function* () {
            if (!word_1.wordModel.collection) {
                word_1.wordModel.createCollection();
                reject("collection not found");
            }
            const foundWord = yield word_1.wordModel.findById(id).exec().catch((error) => {
                reject(error);
            });
            resolve(foundWord);
        }));
    }));
};
exports.getWord = getWord;
const updateWord = (id, updatedWordData) => {
    return new Promise((resolve, reject) => {
        mongoose_1.default.connect(process.env.MONGO_URL).then(() => __awaiter(void 0, void 0, void 0, function* () {
            if (!word_1.wordModel.collection) {
                word_1.wordModel.createCollection();
                reject("collection not found");
            }
            const updatedWord = yield word_1.wordModel.findByIdAndUpdate(id, updatedWordData).exec().catch(err => {
                if (err || !updatedWord) {
                    reject(err !== null && err !== void 0 ? err : "Word not found");
                }
                resolve(updatedWord);
            });
        }));
    });
};
exports.updateWord = updateWord;
const deleteWord = (id) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        mongoose_1.default.connect(process.env.MONGO_URL).then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield word_1.wordModel.findByIdAndDelete(id).exec().catch(err => {
                if (err) {
                    reject(err);
                }
            });
            resolve();
        }));
    }));
};
exports.deleteWord = deleteWord;
//# sourceMappingURL=words.js.map