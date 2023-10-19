"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const games_1 = require("../routes/games");
const locations_1 = require("../routes/locations");
const teams_1 = require("../routes/teams");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
class Server {
    constructor() {
        this.port = process.env.PORT;
        this.gamesPath = '/api/games';
        this.locationsPath = '/api/locations';
        this.teamsPath = '/api/teams';
        this.middlewares();
        this.routes();
    }
    middlewares() {
        app.use((0, cors_1.default)());
        app.use(express_1.default.json());
        app.use(express_1.default.static('public'));
    }
    routes() {
        app.use(this.gamesPath, games_1.gameRouter);
        app.use(this.locationsPath, locations_1.locationRouter);
        app.use(this.teamsPath, teams_1.teamRouter);
    }
    listen() {
        app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`);
        });
    }
}
exports.default = Server;
