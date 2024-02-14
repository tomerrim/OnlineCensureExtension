"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordSchema = exports.wordModel = void 0;
const mongoose_1 = require("mongoose");
const wordSchema = new mongoose_1.Schema({
    content: { type: String, required: true },
    categoryId: { type: mongoose_1.Schema.Types.ObjectId, required: true }
});
exports.wordSchema = wordSchema;
const wordModel = (0, mongoose_1.model)("word", wordSchema);
exports.wordModel = wordModel;
//# sourceMappingURL=word.js.map