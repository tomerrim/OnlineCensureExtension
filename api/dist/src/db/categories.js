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
exports.deleteCategory = exports.updateCategory = exports.getCategory = exports.createCategory = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const category_1 = require("../models/category");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const createCategory = (categoryData) => {
    return new Promise((resolve, reject) => {
        mongoose_1.default.connect(process.env.MONGO_URL).then(() => {
            if (!category_1.categoryModel.collection) {
                category_1.categoryModel.createCollection();
            }
            const createdCategory = category_1.categoryModel.create(categoryData).catch((error) => {
                reject(error);
            });
            resolve(createdCategory);
        });
    });
};
exports.createCategory = createCategory;
const getCategory = (id) => {
    return new Promise((resolve, reject) => {
        mongoose_1.default.connect(process.env.MONGO_URL).then(() => __awaiter(void 0, void 0, void 0, function* () {
            if (!category_1.categoryModel.collection) {
                category_1.categoryModel.createCollection();
                reject("collection not found");
            }
            const foundCategory = yield category_1.categoryModel.findById(id).exec().catch((error) => {
                reject(error);
            });
            resolve(foundCategory);
        }));
    });
};
exports.getCategory = getCategory;
const updateCategory = (id, updatedCategoryData) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        mongoose_1.default.connect(process.env.MONGO_URL).then(() => __awaiter(void 0, void 0, void 0, function* () {
            if (!category_1.categoryModel.collection) {
                category_1.categoryModel.createCollection();
                reject("collection not found");
            }
            const updatedCategory = yield category_1.categoryModel.findByIdAndUpdate(id, updatedCategoryData).exec().catch((err) => {
                if (err || !updatedCategory) {
                    reject(err !== null && err !== void 0 ? err : "category not found");
                }
                resolve(updatedCategory);
            });
        }));
    }));
};
exports.updateCategory = updateCategory;
const deleteCategory = (id) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        mongoose_1.default.connect(process.env.MONGO_URL).then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield category_1.categoryModel.findByIdAndDelete(id).exec().catch((err) => {
                if (err) {
                    reject(err);
                }
            });
            resolve();
        }));
    }));
};
exports.deleteCategory = deleteCategory;
//# sourceMappingURL=categories.js.map