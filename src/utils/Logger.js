"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const winston_1 = __importDefault(require("winston"));
class Logger {
    constructor() {
        this.logger = winston_1.default.createLogger();
        this.logger.add(new winston_1.default.transports.Console({
            format: winston_1.default.format.simple(),
        }));
    }
    log(level, message, error) {
        this.logger.log({
            level,
            '@timestamp': new Date(),
            message,
            error: error === null || error === void 0 ? void 0 : error.message,
            stack: error === null || error === void 0 ? void 0 : error.stack
        });
    }
    info(message) {
        this.log(Logger.INFO, message);
    }
    warn(message) {
        this.log(Logger.WARN, message);
    }
    error(message, error) {
        this.log(Logger.ERROR, message, error);
    }
}
exports.Logger = Logger;
Logger.INFO = 'info';
Logger.WARN = 'warn';
Logger.ERROR = 'error';
