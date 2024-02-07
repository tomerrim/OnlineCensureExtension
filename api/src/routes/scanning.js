import express from "express";
import { scanLink, scanText } from "../controllers/scanning";

const ScanningRouter = express.Router();

ScanningRouter.route("/link").get(scanLink);

ScanningRouter.route("/text").get(scanText);

export default ScanningRouter;
