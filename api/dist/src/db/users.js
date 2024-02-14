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
exports.deleteUser = exports.updateUser = exports.getUser = exports.createUser = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = require("../models/user");
const createUser = (userData) => {
    return new Promise((resolve, reject) => {
        mongoose_1.default.connect(process.env.MONGO_URL).then(() => {
            if (!user_1.userModel.collection) {
                user_1.userModel.createCollection();
            }
            const createdUser = user_1.userModel.create(userData).catch(error => {
                reject(error);
            });
            resolve(createdUser);
        });
    });
};
exports.createUser = createUser;
const getUser = (id) => {
    return new Promise((resolve, reject) => {
        mongoose_1.default.connect(process.env.MONGO_URL).then(() => __awaiter(void 0, void 0, void 0, function* () {
            if (!user_1.userModel.collection) {
                user_1.userModel.createCollection();
                reject("collection not found");
            }
            const foundUser = yield user_1.userModel.findById(id).exec().catch((error) => {
                reject(error);
            });
            resolve(foundUser);
        }));
    });
};
exports.getUser = getUser;
const updateUser = (id, updatedUserData) => {
    return new Promise((resolve, reject) => {
        mongoose_1.default.connect(process.env.MONGO_URL).then(() => __awaiter(void 0, void 0, void 0, function* () {
            if (!user_1.userModel.collection) {
                user_1.userModel.createCollection();
                reject("collection not found");
            }
            const updatedUser = yield user_1.userModel.findByIdAndUpdate(id, updatedUserData).exec().catch(err => {
                if (err || !updatedUser) {
                    reject(err !== null && err !== void 0 ? err : "user not found");
                }
                resolve(updatedUser);
            });
        }));
    });
};
exports.updateUser = updateUser;
const deleteUser = (id) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        mongoose_1.default.connect(process.env.MONGO_URL).then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield user_1.userModel.findByIdAndDelete(id).exec().catch(err => {
                if (err) {
                    reject(err);
                }
            });
            resolve();
        }));
    }));
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map