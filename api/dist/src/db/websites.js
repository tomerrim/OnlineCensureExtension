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
exports.deleteWebsite = exports.updateWebsite = exports.getWebsite = exports.createWebsite = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const website_1 = require("../models/website");
const createWebsite = (websiteData) => {
    return new Promise((resolve, reject) => {
        mongoose_1.default.connect(process.env.MONGO_URL).then(() => {
            if (!website_1.websiteModel.collection) {
                website_1.websiteModel.createCollection();
            }
            const createdWebsite = website_1.websiteModel.create(websiteData).catch(error => {
                reject(error);
            });
            resolve(createdWebsite);
        });
    });
};
exports.createWebsite = createWebsite;
const getWebsite = (id) => {
    return new Promise((resolve, reject) => {
        mongoose_1.default.connect(process.env.MONGO_URL).then(() => __awaiter(void 0, void 0, void 0, function* () {
            if (!website_1.websiteModel.collection) {
                website_1.websiteModel.createCollection();
                reject("collection not found");
            }
            const foundWebsite = yield website_1.websiteModel.findById(id).exec().catch(error => {
                reject(error);
            });
            resolve(foundWebsite);
        }));
    });
};
exports.getWebsite = getWebsite;
const updateWebsite = (id, updatedWebsiteData) => {
    return new Promise((resolve, reject) => {
        mongoose_1.default.connect(process.env.MONGO_URL).then(() => __awaiter(void 0, void 0, void 0, function* () {
            if (!website_1.websiteModel.collection) {
                website_1.websiteModel.createCollection();
                reject("collection not found");
            }
            const updatedWebsite = yield website_1.websiteModel.findByIdAndUpdate(id, updatedWebsiteData).exec().catch(err => {
                if (err || !updatedWebsite) {
                    reject(err !== null && err !== void 0 ? err : "user not found");
                }
                resolve(updatedWebsite);
            });
        }));
    });
};
exports.updateWebsite = updateWebsite;
const deleteWebsite = (id) => {
    return new Promise((resolve, reject) => {
        mongoose_1.default.connect(process.env.MONGO_URL).then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield website_1.websiteModel.findByIdAndDelete(id).exec().catch(err => {
                if (err) {
                    reject(err);
                }
            });
            resolve();
        }));
    });
};
exports.deleteWebsite = deleteWebsite;
//# sourceMappingURL=websites.js.map