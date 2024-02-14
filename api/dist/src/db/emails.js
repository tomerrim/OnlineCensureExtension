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
exports.deleteEmail = exports.updateEmail = exports.getEmail = exports.createEmail = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const email_1 = require("../models/email");
const createEmail = (mailData) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        mongoose_1.default.connect(process.env.MONGO_URL).then(() => __awaiter(void 0, void 0, void 0, function* () {
            if (!email_1.emailModel.collection) {
                email_1.emailModel.createCollection();
            }
            const createdEmail = yield email_1.emailModel.create(mailData).catch(err => {
                if (err) {
                    reject(err);
                }
            });
            resolve(createdEmail);
        }));
    }));
};
exports.createEmail = createEmail;
const getEmail = (id) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        mongoose_1.default.connect(process.env.MONGO_URL).then(() => __awaiter(void 0, void 0, void 0, function* () {
            if (!email_1.emailModel.collection) {
                email_1.emailModel.createCollection();
                reject("collection not found");
            }
            const foundEmail = yield email_1.emailModel.findById(id).catch((error) => {
                reject(error);
            });
            resolve(foundEmail);
        }));
    }));
};
exports.getEmail = getEmail;
const updateEmail = (id, updatedEmailData) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        mongoose_1.default.connect(process.env.MONGO_URL).then(() => __awaiter(void 0, void 0, void 0, function* () {
            if (!email_1.emailModel.collection) {
                email_1.emailModel.createCollection();
                reject("collection not found");
            }
            const updatedEmail = yield email_1.emailModel.findByIdAndUpdate(id, updatedEmailData)
                .catch((error) => {
                reject(error);
            });
            resolve(updatedEmail);
        }));
    }));
};
exports.updateEmail = updateEmail;
const deleteEmail = (id) => {
    return new Promise((resolve, reject) => {
        mongoose_1.default.connect(process.env.MONGO_URL).then(() => {
            if (!email_1.emailModel.collection) {
                email_1.emailModel.createCollection();
                reject("collection not found");
            }
            email_1.emailModel.findByIdAndDelete(id).catch((err) => {
                if (err) {
                    reject(err);
                }
            });
            resolve();
        });
    });
};
exports.deleteEmail = deleteEmail;
//# sourceMappingURL=emails.js.map