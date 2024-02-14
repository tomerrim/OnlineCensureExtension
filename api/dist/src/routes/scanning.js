"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const scanning_1 = require("../controllers/scanning");
const ScanningRouter = express_1.default.Router();
ScanningRouter.get("/link", (req, res) => {
    return (0, scanning_1.scanLink)(req, res);
});
ScanningRouter.get("/text", (req, res) => {
    return (0, scanning_1.scanText)(req, res);
});
exports.default = ScanningRouter;
//# sourceMappingURL=scanning.js.map