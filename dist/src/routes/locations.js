"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationRouter = void 0;
const express_1 = require("express");
const locations_1 = require("../controllers/locations");
exports.locationRouter = (0, express_1.Router)();
exports.locationRouter.get('/', locations_1.locationsGet);
