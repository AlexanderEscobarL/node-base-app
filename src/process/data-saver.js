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
class DataSaver {
    constructor() {
        this.logger = new Logger_1.Logger();
    }
    saveGame(dateAndTime, localId, visitId, locationId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info(`Saving game with values: ${dateAndTime} - localId: ${localId} - visitId: ${visitId} - locationId: ${locationId}`);
            return new Promise((resolve, reject) => {
                try {
                    const game = new postgres_data_handler_1.default().saveGame(dateAndTime, localId, visitId, locationId);
                    resolve(game);
                }
                catch (error) {
                    this.logger.error('Error saving game', error);
                    reject(new Error(error));
                }
            });
        });
    }
}
exports.default = DataSaver;
