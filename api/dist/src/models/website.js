"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.websiteSchema = exports.websiteModel = void 0;
const mongoose_1 = require("mongoose");
const websiteSchema = new mongoose_1.Schema({
    link: { type: String, required: true },
    blockPercentage: { type: Number, required: true },
    categoryId: { type: mongoose_1.Schema.Types.ObjectId, required: true }
});
exports.websiteSchema = websiteSchema;
const websiteModel = (0, mongoose_1.model)("website", websiteSchema);
exports.websiteModel = websiteModel;
//# sourceMappingURL=website.js.map