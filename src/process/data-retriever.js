"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("../utils/Logger");
const postgres_data_handler_1 = __importDefault(require("./postgres-data-handler"));
class DataRetriever {
    constructor() {
        this.logger = new Logger_1.Logger();
    }
    findAllGames() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info('Trying to find all games stored on the db');
            return new Promise((resolve, reject) => {
                try {
                    const gameList = new postgres_data_handler_1.default().findAllGames();
                    resolve(gameList);
                }
                catch (error) {
                    this.logger.error('Error trying to find all games stored on the db', error);
                    reject(new Error(error));
                }
            });
        });
    }
    findGamesByLocation(locationId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info('Trying to find games by location');
            return new Promise((resolve, reject) => {
                try {
                    const gameList = new postgres_data_handler_1.default().findGamesByLocation(locationId);
                    resolve(gameList);
                }
                catch (error) {
                    this.logger.error('Error trying to find games by location', error);
                    reject(new Error(error));
                }
            });
        });
    }
    findAllLocations() {
        return new postgres_data_handler_1.default().findAllLocations();
    }
    findAllTeams() {
        return new postgres_data_handler_1.default().findAllTeams();
    }
}
exports.default = DataRetriever;
