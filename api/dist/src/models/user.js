"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const email_1 = require("./email");
const userSchema = new mongoose_1.Schema({
    email: { type: email_1.emailSchema, required: true },
    password: { type: String, required: true },
    categoryList: { type: [mongoose_1.Schema.Types.ObjectId], required: true },
    websiteList: { type: [mongoose_1.Schema.Types.ObjectId], required: true },
    wordList: { type: [mongoose_1.Schema.Types.ObjectId], required: true },
    personalBlockPercentage: { type: Number, default: 0 }, // ! TODO - think about the default value
});
exports.userSchema = userSchema;
const userModel = (0, mongoose_1.model)("user", userSchema);
exports.userModel = userModel;
//# sourceMappingURL=user.js.map