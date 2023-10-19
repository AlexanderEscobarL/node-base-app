"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamRouter = void 0;
const express_1 = require("express");
const teams_1 = require("../controllers/teams");
exports.teamRouter = (0, express_1.Router)();
exports.teamRouter.get('/', teams_1.teamsGet);
