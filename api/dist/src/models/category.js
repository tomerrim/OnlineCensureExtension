"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryModel = exports.categorySchema = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
});
exports.categorySchema = categorySchema;
const categoryModel = (0, mongoose_1.model)("category", categorySchema);
exports.categoryModel = categoryModel;
//# sourceMappingURL=category.js.map