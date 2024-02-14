"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailSchema = exports.emailModel = exports.isEmail = void 0;
const mongoose_1 = require("mongoose");
const emailSchema = new mongoose_1.Schema({
    address: { type: String, validate: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.com$/, required: true }
});
exports.emailSchema = emailSchema;
const emailModel = (0, mongoose_1.model)("email", emailSchema);
exports.emailModel = emailModel;
// type email = `${string}@${string}.com`;
function isEmail(mail) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.com$/;
    return emailRegex.test(mail.address);
}
exports.isEmail = isEmail;
//# sourceMappingURL=email.js.map