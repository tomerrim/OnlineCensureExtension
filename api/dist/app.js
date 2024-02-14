"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const scanning_1 = __importDefault(require("./src/routes/scanning"));
dotenv_1.default.config();
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json()); // pars request to JSON
app.use(express_1.default.urlencoded({ extended: true })); // pars encoded request to JSON
app.use("/scanning", scanning_1.default);
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});
mongoose_1.default
    .connect(process.env.MONGO_URL)
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
    console.log('Connected to MongoDB');
})
    .catch(error => {
    console.log('Faild to connect to MongoDB ' + error.message);
});
//# sourceMappingURL=app.js.map