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
exports.gamesDelete = exports.gamesPost = exports.gamesPut = exports.gamesGetByLocation = exports.gamesGet = void 0;
const library_1 = require("@prisma/client/runtime/library");
const data_retriever_1 = __importDefault(require("../process/data-retriever"));
const data_saver_1 = __importDefault(require("../process/data-saver"));
const gamesGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const retriever = new data_retriever_1.default();
        const gameList = yield retriever.findAllGames();
        if (gameList) {
            res.json(gameList);
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.gamesGet = gamesGet;
const gamesGetByLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query;
        const retriever = new data_retriever_1.default();
        if (query.locationId) {
            const gameList = yield retriever.findGamesByLocation(Number(query.locationId));
            if (gameList) {
                res.json(gameList);
            }
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.gamesGetByLocation = gamesGetByLocation;
const gamesPut = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json({
        msg: 'Alex PUT test response... Controller',
        id
    });
};
exports.gamesPut = gamesPut;
const gamesPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { dateAndTime, localTeam, visitorTeam, location } = req.body;
        const saver = new data_saver_1.default();
        const game = yield saver.saveGame(dateAndTime, localTeam.id, visitorTeam.id, location.id);
        if (game) {
            res.json({
                msg: `Game created successfully, id: ${game.id}`,
            });
        }
    }
    catch (error) {
        if (error instanceof library_1.PrismaClientValidationError) {
            res.status(500).json(`Error on the field validation: ${error}`);
        }
        res.status(500).json(`Error saving game: ${error}`);
    }
});
exports.gamesPost = gamesPost;
const gamesDelete = (req, res) => {
    res.json({
        msg: 'Alex DELETE test response... Controller'
    });
};
exports.gamesDelete = gamesDelete;
